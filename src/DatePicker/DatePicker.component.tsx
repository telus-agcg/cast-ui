import React, { Component, ForwardRefExoticComponent } from 'react';
import uuid from 'uuid';
import ErrorMessage from '../Typography/ErrorMessage/index';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { Moment } from 'moment';
import { Themes } from '../themes';
import './DatePickerStyles.css';

type momentDate = Moment | null;
type pickerSize = 'sm' | 'md' | 'lg';
type pickerStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
type focusInput = boolean | null;
type focused = { focused: focusInput };

export type Props = Partial<SingleDatePickerShape> & {
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
  wrapperId?: string;
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
};

type State = {
  focused: focusInput;
  date: momentDate;
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
      props.theme.input[props.datePickerSize!].borderRadius};
    ::placeholder {
      color: ${(props: Partial<Props>) => props.theme.input.placeholderColor};
    }
  }
  .SingleDatePickerInput {
    background: ${(props: Partial<Props>) => props.theme.colors.white};
    border-radius: ${(props: Partial<Props>) =>
      props.theme.input[props.datePickerSize!].borderRadius};
    display: flex;
  }
  .SingleDatePickerInput__withBorder {
    border-color: ${(props: Partial<Props>) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.input.borderColor};
    transition: all 0.3s;
  }
  .SingleDatePickerInput__withBorder:hover {
    border-color: ${(props: Partial<Props>) => props.theme.colors.drk800};
  }
  .SingleDatePickerInput_calendarIcon {
    padding: 0 10px;
    margin: -3px 0 0 0;
  }
  .DateInput {
    width: 110px;
    border-radius: ${(props: Partial<Props>) =>
      props.theme.input[props.datePickerSize!].borderRadius};
  }
  .SingleDatePicker_picker {
    z-index: ${(props: Partial<Props>) => props.theme.datepicker.zIndex};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid
      ${(props: Partial<Props>) =>
        props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .CalendarDay__selected {
    background: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .CalendarDay__today {
    border: 1.5px double ${props => props.theme.colors.drk800}!important;
  }
`;

class ReactDatePicker extends Component<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    wrapperId: uuid.v4(),
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    date: null,
    focused: null,
    onDateChange: null,
    onFocusChange: null,
    invalid: false,
    invalidText: '',
    invalidTextColor: '',
    verticalSpacing: 10,
    theme: Themes.canopyTheme,
  };

  state: State = {
    focused: null,
    date: null,
  };

  onDateChange = (event: momentDate) =>
    this.props.onDateChange instanceof Function
      ? this.props.onDateChange(event)
      : this.setState(
          {
            date: event,
          },
          () => console.log(event),
        );

  onFocusChange = (input: focused) => {
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState({
          focused: input.focused,
        });
    document.body.classList.add(
      `cui-${this.props.theme.name.toLowerCase()}-theme`,
    );
  };

  render() {
    const {
      theme,
      className,
      id,
      wrapperId,
      datePickerSize,
      datePickerStyle,

      date,
      focused,
      onDateChange,
      onFocusChange,

      /**
       * override sizes from react-dates
       */
      small,
      regular,
      block,
      invalid,
      invalidText,
      invalidTextColor,
      ...props
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';
    return (
      <ThemeProvider theme={theme}>
        <SWrapperComponent
          id={wrapperId!}
          invalid={invalid}
          className={className}
          datePickerSize={datePickerSize}
          datePickerStyle={datePickerStyle}
          data-invalid={invalid ? '' : undefined}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
        >
          <SingleDatePicker
            id={id!}
            date={date || this.state.date}
            focused={!!focused || !!this.state.focused}
            onFocusChange={this.onFocusChange}
            onDateChange={this.onDateChange}
            showDefaultInputIcon={true}
            numberOfMonths={1}
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
export const DatePicker: ForwardRefExoticComponent<Props> = withTheme(
  ReactDatePicker,
);
