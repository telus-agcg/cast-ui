import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

// import { DatePickerContext } from './context';
// import { Props as DatePickerProps } from './props';
// import { InputForDatePicker } from './InputForDatePicker';
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

const SWrapperComponent = styled.div<any>``;

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
