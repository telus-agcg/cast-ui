import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';
import { Moment } from 'moment';

type momentDate = Moment | null;
type pickerSize = 'sm' | 'md' | 'lg';
type pickerStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
type focusInputs = FocusInputs.START_DATE | FocusInputs.END_DATE | null;
enum FocusInputs {
  START_DATE = 'startDate',
  END_DATE = 'endDate',
}
type dateChangeEvent = { startDate: momentDate; endDate: momentDate };

export interface Props extends DateRangePicker {
  startDate: momentDate;
  endDate: momentDate;
  startDateId: string;
  endDateId: string;
  focusedInput: focusInputs;
  onDatesChange: (arg: dateChangeEvent) => null;
  onFocusChange: (arg: focusInputs) => null;
  /**
   * Set className
   *
   * @default ''
   **/
  className?: string;
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Type of input
   *
   * @default 'text'
   **/
  type?: string;
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datePickerSize?: pickerSize;
  /**
   * Select DatePicker style.
   *
   * @default 'primary'
   **/
  datePickerStyle?: pickerStyle;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

type State = {
  focusedInput: focusInputs;
  range: dateChangeEvent;
};

const SWrapperComponent = styled.div`
  background: ${(props: any) => props.theme.colors.white};
  border-radius: ${(props: any) =>
    props.theme.common[props.datePickerSize!].borderRadius};
  border: 1px solid ${(props: any) => props.theme.colors.lightGray};
  margin-top: ${(props: any) =>
    props.theme.common[props.datePickerSize!].padding.toString().split(' ')[1]};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) =>
    props.theme.common[props.datePickerSize!].fontSize}
  color: ${(props: any) => props.theme.colors.primary};
  box-shadow: #0000001a 0px 3px 25px;
  position: ${(props: any) => props.theme.datepicker.position};
  z-index: ${(props: any) => props.theme.datepicker.zIndex};
`;

export class DatePickerRange extends React.Component<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    type: 'text',
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    startDateId: uuid.v4(),
    endDateId: uuid.v4(),
    startDate: null,
    endDate: null,
    focusedInput: null,
    onDatesChange: null,
    onFocusChange: null,
  };

  state: State = {
    focusedInput: FocusInputs.START_DATE,
    range: {
      startDate: null,
      endDate: null,
    },
  };

  onDatesChange = (event: dateChangeEvent) =>
    this.props.onDatesChange instanceof Function
      ? this.props.onDatesChange(event)
      : this.setState(
          {
            range: {
              endDate: event.endDate || this.state.range.endDate,
              startDate: event.startDate || this.state.range.startDate,
            },
          },
          () => console.log(event),
        );

  onFocusChange = (input: focusInputs) =>
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState({ focusedInput: input }, () => console.log(input));

  render() {
    const {
      theme,
      /**
       * exclude custom props
       */
      // className,
      // id,
      // type,
      // datePickerSize,
      // datePickerStyle,
      /**
       * exclude props for combine with state
       */
      startDate,
      endDate,
      focusedInput,
      startDateId,
      endDateId,
      onDatesChange,
      onFocusChange,
      ...props
    } = this.props;
    console.log(startDate, endDate, this.state.range);
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperComponent {...props}>
          <DateRangePicker
            {...props}
            // The next properties have to be overrided by the instance's functions
            startDate={startDate || this.state.range.startDate}
            endDate={endDate || this.state.range.endDate}
            startDateId={startDateId}
            endDateId={endDateId}
            focusedInput={focusedInput || this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            onDatesChange={this.onDatesChange}
          />
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
