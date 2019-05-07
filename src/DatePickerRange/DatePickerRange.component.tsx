import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DateRangePicker, DateRangePickerShape } from 'react-dates';
import uuid from 'uuid';
import { Moment } from 'moment';
import { lighten } from '../utils/colorUtils';
import { Themes } from '../themes';

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

export interface Props extends DateRangePickerShape {
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

const SWrapperComponent = styled.div<Partial<Props>>`
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.datePickerSize!].fontSize}
  color: ${(props: Partial<Props>) => props.theme.colors.primary};
  z-index: ${(props: Partial<Props>) => props.theme.datepicker.zIndex};
  input {
    box-sizing: border-box;
  }
  .DateRangePickerInput {
    background: ${(props: Partial<Props>) => props.theme.colors.white};
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
    border: 1px solid ${(props: Partial<Props>) =>
      props.theme.colors.lightGray};
  }
  .CalendarDay__hovered_span, .CalendarDay__selected_span {
    background: ${(props: Partial<Props>) =>
      lighten(props.theme.styles[props.datePickerStyle!].borderColor, 25)};
    border-color: ${(props: Partial<Props>) =>
      lighten(props.theme.styles[props.datePickerStyle!].borderColor, 5)};
    color: ${(props: Partial<Props>) => props.theme.colors.white}
  }
  .CalendarDay__selected {
    background: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .DateInput_input__small {
    line-height: unset;
    padding: 11px 11px 9px;
  }
  .DateInput_input__focused {
    border-bottom: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor} 2px solid
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
}`;

export class DatePickerRange extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    startDateId: uuid.v4(),
    endDateId: uuid.v4(),
    startDate: null,
    endDate: null,
    focusedInput: null,
    onDatesChange: null,
    onFocusChange: null,
    inputIconPosition: 'after',
    theme: Themes.defaultTheme,
  };

  state: State = {
    focusedInput: null,
    range: {
      startDate: null,
      endDate: null,
    },
  };

  onDatesChange = (event: dateChangeEvent) =>
    this.props.onDatesChange instanceof Function
      ? this.props.onDatesChange(event)
      : this.setState({
          range: {
            endDate: event.endDate || this.state.range.endDate,
            startDate: event.startDate || this.state.range.startDate,
          },
        });

  onFocusChange = (input: focusInputs) =>
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState({ focusedInput: input }, () => console.log(input));

  render() {
    const {
      theme,
      /**
       * exclude props for combine with state
       */
      startDate,
      endDate,
      focusedInput,
      onDatesChange,
      onFocusChange,

      /**
       * exclude div props from the react-dates
       */
      className,
      id,
      datePickerSize,
      datePickerStyle,

      /**
       * override sizes from react-dates
       */
      small,
      regular,
      block,
      ...props
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <SWrapperComponent
          className={className!}
          id={id!}
          datePickerSize={datePickerSize!}
          datePickerStyle={datePickerStyle!}
          {...props}
        >
          <DateRangePicker
            // The next properties have to be overrided by the instance's functions
            startDate={startDate || this.state.range.startDate}
            endDate={endDate || this.state.range.endDate}
            focusedInput={focusedInput || this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            onDatesChange={this.onDatesChange}
            {...props}
          />
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
