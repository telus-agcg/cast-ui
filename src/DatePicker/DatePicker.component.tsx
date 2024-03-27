import React, { Component, ForwardRefExoticComponent, forwardRef } from 'react';
import uuid from 'uuid';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Input from '../Input/index';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Themes } from '../themes';
import Icon from 'react-icons-kit';
import {
  calendarO,
  angleRight,
  angleLeft,
  angleDoubleRight,
  angleDoubleLeft,
} from 'react-icons-kit/fa';

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

export type Props = Partial<any> & {
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
  date: Date | null;
};

const SWrapperComponent = styled.div<Partial<Props>>`
  position: relative;
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.datePickerSize!].fontSize};
  color: ${(props: Partial<Props>) =>
    props.theme.styles[props.datePickerStyle!].text};
  max-width: 200px;

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
    &[data-invalid] {
      border-color: ${(props: Partial<Props>) =>
        props.theme.validation.borderColor};
    }
    ::placeholder {
      color: ${(props: Partial<Props>) => props.theme.input.placeholderColor};
    }
  }

  .react-datepicker__icon {
    color: ${(props: Props) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.colors.primary};
  }

  .react-datepicker__header.react-datepicker__header--custom {
    text-align: center;
    background-color: #fff;
  }

  .react-datepicker__day-name {
    width: 32px;
  }

  .react-datepicker__day {
    width: 32px;
    line-height: 32px;
  }

  .react-datepicker__day--today {
    border: ${(props: Props) => `1px solid ${props.theme.colors.primary}`};
    border-radius: 3px;
    color: ${(props: Partial<Props>) => props.theme.colors.primary};
  }

  .react-datepicker__day--selected {
    border: ${(props: Props) => `1px solid ${props.theme.colors.primary}`};
    border-radius: 3px;
    background-color: ${(props: Partial<Props>) => props.theme.colors.primary};
    color: ${(props: Partial<Props>) => props.theme.colors.white};
  }

  .react-datepicker__day--keyboard-selected {
    background: ${(props: Partial<Props>) =>
      props.theme.colors.primaryBackground};
  }

  .react-datepicker__portal {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const SDatePickerHeader = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const SDatePickerLabel = styled.div`
  flex-grow: 1;
`;

const SButton = styled.button`
  display: flex;
  border: none;
  padding: 6px 9px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  color: #757575;
  &:hover {
    background-color: ${(props: Partial<Props>) =>
      props.theme.colors.primaryBackground};
  }
`;

const CustomInput = (props: any) => {
  return (
    <Input
      {...props}
      icon={<Icon className="react-datepicker__icon" icon={calendarO} />}
    />
  );
};

class ReactDatePicker extends Component<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    wrapperId: uuid.v4(),
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    date: null,
    focused: null,
    onChange: null,
    onFocusChange: null,
    monthsShown: null,
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

  onDateChange = (event: Date) => {
    this.props.onChange instanceof Function
      ? this.props.onChange(event)
      : this.setState(
          {
            date: event,
          },
          () => console.log(event),
        );
  };

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

  getYearsOption = (): number[] => {
    return Array.from(
      { length: 7 },
      (_, index) => new Date().getFullYear() - 3 + index,
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
      onChange,
      onFocusChange,
      monthsShown,

      // /**
      //  * override sizes from react-datePicker
      //  */
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
          <DatePicker
            customInput={<CustomInput {...this.props} />}
            onChange={this.onDateChange}
            selected={date || this.state.date}
            showIcon={true}
            monthsShown={monthsShown}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              increaseYear,
              customHeaderCount,
              decreaseYear,
              monthDate,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              prevYearButtonDisabled,
              nextYearButtonDisabled,
            }) => {
              return (
                <SDatePickerHeader>
                  <SButton
                    disabled={prevYearButtonDisabled}
                    onClick={decreaseYear}
                    style={
                      customHeaderCount === 1 ? { visibility: 'hidden' } : null
                    }
                  >
                    <Icon icon={angleDoubleLeft} />
                  </SButton>
                  <SButton
                    disabled={prevMonthButtonDisabled}
                    onClick={decreaseMonth}
                    style={
                      customHeaderCount === 1 ? { visibility: 'hidden' } : null
                    }
                  >
                    <Icon icon={angleLeft} />
                  </SButton>
                  <SDatePickerLabel>
                    {`${monthDate.toLocaleString('default', {
                      month: 'long',
                    })} ${date.getFullYear()}`}
                  </SDatePickerLabel>
                  <SButton
                    disabled={nextMonthButtonDisabled}
                    onClick={increaseMonth}
                    style={
                      monthsShown > 1 && customHeaderCount === 0
                        ? { visibility: 'hidden' }
                        : null
                    }
                  >
                    <Icon icon={angleRight} />
                  </SButton>
                  <SButton
                    disabled={nextYearButtonDisabled}
                    onClick={increaseYear}
                    style={
                      monthsShown > 1 && customHeaderCount === 0
                        ? { visibility: 'hidden' }
                        : null
                    }
                  >
                    <Icon icon={angleDoubleRight} />
                  </SButton>
                </SDatePickerHeader>
              );
            }}
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
export const SingleDatePicker: ForwardRefExoticComponent<Props> = withTheme(
  ReactDatePicker,
);
