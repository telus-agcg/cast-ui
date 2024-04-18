import React, { Component, ForwardRefExoticComponent } from 'react';
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

type dateChangeEvent = {
  startDateRange: Date | null;
  endDateRange: Date | null;
};

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
    height: ${(props: Partial<Props>) =>
      props.theme.input[props.datePickerSize!].height};
    line-height: initial;
    padding: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].padding};
    border: none;
    border-radius: ${(props: Partial<Props>) =>
      props.theme.input[props.datePickerSize!].borderRadius};
  }

  .react-datepicker__icon {
    visibility: ${(props: Props) => (props.showIcon ? 'visible' : 'hidden')};
    color: ${(props: Props) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.colors.primary};
    cursor: pointer;
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
    border-radius: 0.3rem;
    color: ${(props: Partial<Props>) => props.theme.colors.primary};
    background-color: ${(props: Partial<Props>) =>
      props.theme.colors.primaryBackground};
  }

  .react-datepicker__day--selected {
    background-color: ${(props: Partial<Props>) => props.theme.colors.primary};
    color: ${(props: Partial<Props>) => props.theme.colors.white};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: inherit;
  }

  .react-datepicker__portal {
    background-color: rgba(0, 0, 0, 0.4);
  }

  // Range picker style
  .react-datepicker__day--in-range {
    background-color: ${(props: Partial<Props>) => props.theme.colors.primary};
    color: ${(props: Partial<Props>) => props.theme.colors.white};
  }

  .react-datepicker__day--keyboard--in-range {
    background: ${(props: Partial<Props>) =>
      props.theme.colors.primaryBackground};
  }

  .react-datepicker__day--in-selecting-range {
    background: ${(props: Partial<Props>) => props.theme.colors.primaryFaded};
    color: ${(props: Partial<Props>) => props.theme.colors.drk800};
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

const CustomInput = (props: Partial<Props>) => {
  return (
    <Input
      {...props}
      icon={<Icon className="react-datepicker__icon" icon={calendarO} />}
    />
  );
};

const CustomDatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  increaseYear,
  customHeaderCount,
  decreaseYear,
  monthDate,
  monthsShown,
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
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
      >
        <Icon icon={angleDoubleLeft} />
      </SButton>
      <SButton
        disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
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
    monthsShown: 1,
    selectsRange: false,
    startDate: null,
    endDate: null,
    invalid: false,
    invalidText: '',
    invalidTextColor: '',
    verticalSpacing: 10,
    showIcon: true,
    theme: Themes.canopyTheme,
  };

  state: State = {
    focused: null,
    date: null,
    range: { startDateRange: null, endDateRange: null },
  };

  onDateChange = (selectsRange: boolean, event) => {
    if (selectsRange) {
      const [start, end] = event;
      this.props.onChange instanceof Function
        ? this.props.onChange(event)
        : this.setState({
            date: null,
            range: {
              startDateRange: start,
              endDateRange: end,
            },
          });
    } else {
      this.props.onChange instanceof Function
        ? this.props.onChange(event)
        : this.setState({
            date: event,
            range: { startDateRange: null, endDateRange: null },
          });
    }
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

      /**
       * exclude props for combine with state
       */
      startDate,
      endDate,
      date,
      monthsShown,
      selectsRange,
      focusedInput,
      onChange,
      onFocusChange,

      /**
       * exclude div props from the react-datepicker
       */
      id,
      className,
      datePickerSize,
      datePickerStyle,
      wrapperId,
      showIcon,
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
          showIcon={showIcon}
        >
          <label>
            <DatePicker
              customInput={<CustomInput {...this.props} />}
              onChange={event => this.onDateChange(selectsRange, event)}
              selected={
                date ||
                this.state.date ||
                startDate ||
                this.state.range.startDateRange
              }
              startDate={startDate || this.state.range.startDateRange}
              endDate={endDate || this.state.range.endDateRange}
              monthsShown={monthsShown}
              selectsRange={selectsRange}
              renderCustomHeader={props => (
                <CustomDatePickerHeader {...props} monthsShown={monthsShown} />
              )}
              {...props}
            />
          </label>
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
