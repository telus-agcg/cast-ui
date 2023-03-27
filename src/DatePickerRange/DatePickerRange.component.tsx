import * as React from 'react';
import uuid from 'uuid';
import { DateRangePicker, DateRangePickerShape } from 'react-dates';
import { Moment } from 'moment';
import ErrorMessage from '../Typography/ErrorMessage/index';
import styled, { ThemeProvider } from 'styled-components';
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
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
  /**
   * Color of the invalid text
   *
   * @default ''
   **/
  invalidTextColor?: string;
  /**
   * Specify whether the dates can be edited manually
   *
   * @default false
   **/
  readOnly?: boolean;
}

type State = {
  focusedInput: focusInputs;
  range: dateChangeEvent;
};

const SWrapperComponent = styled.div<Partial<Props>>`
  position: relative;
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.datePickerSize!].fontSize};
  color: ${(props: Partial<Props>) =>
    props.theme.styles[props.datePickerStyle!].text};
  
  input {
    box-sizing: border-box;
    font-size: ${(props: Partial<Props>) => props.theme.input.fontSize};
    height: ${(props: Partial<Props>) =>
      props.theme.input[props.datePickerSize!].height};
    line-height: initial;
    padding: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].padding};
    border: none;
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
    &[data-invalid] {
      border-color: ${(props: Partial<Props>) =>
        props.theme.validation.borderColor};
    }
    ::placeholder {
      color: ${(props: Partial<Props>) => props.theme.input.placeholderColor};
    }
  }
  .CalendarDay__hovered_span, .CalendarDay__selected_span {
    background: ${(props: Partial<Props>) => props.theme.colors.primaryFaded};
    border-color: ${(props: Partial<Props>) => props.theme.colors.primary};
    color: ${(props: Partial<Props>) => props.theme.colors.white}
  }
  .CalendarDay__selected {
    background: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .DateRangePickerInput {
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
  }
  .DateRangePickerInput_calendarIcon {
    padding: 0 10px;
  }
  .DateInput {
    width: 110px;
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
  }
  .DateRangePicker_picker {
    z-index: ${(props: Partial<Props>) => props.theme.datepicker.zIndex};
  }
  .DateRangePickerInput__withBorder {
    border-color: ${(props: Partial<Props>) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.input.borderColor};
    transition: all 0.3s;
  }
  .DateRangePickerInput__withBorder:hover {
    border-color: ${(props: Partial<Props>) => props.theme.colors.drk800}
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
    invalid: false,
    invalidText: '',
    invalidTextColor: '',
    verticalSpacing: 10,
    theme: Themes.defaultTheme,
    readOnly: true,
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
      invalid,
      invalidText,
      invalidTextColor,
      disabled,
      readOnly,
      ...props
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperComponent
          className={className!}
          id={id!}
          invalid={invalid}
          datePickerSize={datePickerSize!}
          datePickerStyle={datePickerStyle!}
          data-invalid={invalid ? '' : undefined}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
          {...props}
        >
          <DateRangePicker
            // The next properties have to be overridden by the instance's functions
            startDate={startDate || this.state.range.startDate}
            endDate={endDate || this.state.range.endDate}
            focusedInput={focusedInput || this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            onDatesChange={this.onDatesChange}
            showDefaultInputIcon={true}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
          {invalid && (
            <ErrorMessage
              id={errorId}
              message={invalidText || ''}
              textColor={invalidTextColor || ''}
            />
          )}
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
