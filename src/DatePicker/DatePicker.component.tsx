import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { Moment } from 'moment';
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
type focusInput = boolean | null;
type focused = { focused: focusInput };

export interface Props extends SingleDatePickerShape {
  /**
   * Set className
   *
   * @default ''
   **/
  className: string;
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
}

type State = {
  focused: focusInput;
  date: momentDate;
};

const SWrapperComponent = styled.div<Partial<Props>>`
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.datePickerSize!].fontSize}
  color: ${(props: Partial<Props>) =>
    props.theme.styles[props.datePickerStyle!].text};
  z-index: ${(props: Partial<Props>) => props.theme.datepicker.zIndex};
  input {
    box-sizing: border-box;
    padding: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].padding}
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
  }
  .SingleDatePickerInput {
    background: ${(props: Partial<Props>) => props.theme.colors.white};
    display: flex;
  }
  .DateInput_input__small {
    line-height: unset;
    padding: 11px 11px 9px;
  }
  .DateInput_input__focused {
    border-bottom-color: transparent;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .CalendarDay__selected {
    background: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
`;

export class DatePicker extends React.PureComponent<Props> {
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
    theme: Themes.defaultTheme,
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

  onFocusChange = (input: focused) =>
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState(
          {
            focused: input.focused,
          },
          () => console.log(input),
        );

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
      ...props
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SWrapperComponent
          id={wrapperId!}
          className={className}
          datePickerSize={datePickerSize}
          datePickerStyle={datePickerStyle}
        >
          <SingleDatePicker
            // The next properties have to be overrided by the instance's functions
            id={id!}
            date={date || this.state.date}
            focused={!!focused || !!this.state.focused}
            onFocusChange={this.onFocusChange}
            onDateChange={this.onDateChange}
            {...props}
          />
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
