import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import ReactDatePicker, {
  DatePickerProps as ReactDatePickerProps,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarMonthIcon,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from '@icons';
import { getPropsWithDefaults } from '@utils';
import { Input, InputProps } from '../Input/Input.component';
import { Themes } from '@themes';

type pickerSize = 'sm' | 'md' | 'lg';

type pickerStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

type focusInput = boolean | null;
type Focused = { focused: boolean | null };
type dateChangeEvent = {
  startDateRange: Date | null;
  endDateRange: Date | null;
};
export type DatePickerProps = InputProps &
  ReactDatePickerProps & {
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
    /**
     * onFocusChange handler
     */
    onFocusChange?: (input: Focused) => void;
    /**
     * Render calendar in a portal to avoid overflow issues
     *
     * @default false
     **/
    usePortal?: boolean;
    /**
     * ID of element to render portal into (requires usePortal=true)
     *
     * @default undefined (renders to document.body)
     **/
    portalId?: string;
    /**
     * Popper positioning strategy ('absolute' or 'fixed')
     * Use 'fixed' to escape overflow containers
     *
     * @default 'absolute'
     **/
    popperStrategy?: 'absolute' | 'fixed';
    /**
     * Placement of the calendar relative to input
     *
     * @default 'bottom-start'
     **/
    popperPlacement?:
      | 'auto'
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'top-start'
      | 'top-end'
      | 'bottom-start'
      | 'bottom-end'
      | 'left-start'
      | 'left-end'
      | 'right-start'
      | 'right-end';
    /**
     * Custom Popper.js modifiers for advanced positioning
     *
     * @default undefined
     **/
    popperModifiers?: any[];
  };

const SWrapperComponent = styled.div<{
  datePickerSize?: pickerSize;
  datePickerStyle?: pickerStyle;
  invalid?: boolean;
  showIcon: boolean;
}>`
  position: relative;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.common[props.datePickerSize!].fontSize};
  color: ${(props) => props.theme.styles[props.datePickerStyle!].text};
  input {
    height: ${(props) => props.theme.input[props.datePickerSize!].height};
    line-height: initial;
    padding: ${(props) => props.theme.common[props.datePickerSize!].padding};
    border: none;
    border-radius: ${(props) =>
      props.theme.input[props.datePickerSize!].borderRadius};
  }

  .react-datepicker__icon {
    visibility: ${(props) => (props.showIcon ? 'visible' : 'hidden')};
    color: ${(props) =>
      props.invalid ? props.theme.validation.borderColor : ''};
    cursor: pointer;
  }

  .react-datepicker {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
    border-radius: 0.3rem;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primaryBackground};

    &.react-datepicker__day--disabled {
      border: ${(props) => `1px solid ${props.theme.colors.drk400}`};
      color: ${(props) => props.theme.colors.drk400};
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: inherit;
  }

  .react-datepicker__portal {
    background-color: rgba(0, 0, 0, 0.4);
  }

  // Range picker style
  .react-datepicker__day--in-range {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  .react-datepicker__day--keyboard--in-range {
    background: ${(props) => props.theme.colors.primaryBackground};
  }

  .react-datepicker__day--in-selecting-range {
    background: ${(props) => props.theme.colors.primaryFaded};
    color: ${(props) => props.theme.colors.drk800};
  }
`;

const SDatePickerHeader = styled.div`
  margin: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const SDatePickerLabel = styled.div`
  flex-grow: 1;
`;

const SButton = styled.button<DatePickerProps & { isVisible: boolean }>`
  display: flex;
  border: none;
  padding: 6px 9px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  color: #757575;
  visibility: ${(props) => (props.isVisible ? '' : 'hidden')}
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryBackground};
  }
`;

const CustomInput = (props: InputProps) => {
  return (
    <Input {...props} icon={<CalendarMonthIcon height={18} width={18} />} />
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
        isVisible={customHeaderCount != 1}
        type="button"
      >
        <KeyboardDoubleArrowLeftIcon height={24} width={24} />
      </SButton>

      <SButton
        disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
        isVisible={customHeaderCount != 1}
        type="button"
      >
        <KeyboardArrowLeftIcon height={24} width={24} />
      </SButton>

      <SDatePickerLabel>
        {`${monthDate.toLocaleString('default', {
          month: 'long',
        })}  ${date.getFullYear()}`}
      </SDatePickerLabel>

      <SButton
        disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
        isVisible={monthsShown < 1 && customHeaderCount != 0}
        type="button"
      >
        <KeyboardArrowRightIcon height={24} width={24} />
      </SButton>

      <SButton
        disabled={nextYearButtonDisabled}
        onClick={increaseYear}
        isVisible={!(monthsShown < 1 && customHeaderCount != 0)}
        type="button"
      >
        <KeyboardDoubleArrowRightIcon height={24} width={24} />
      </SButton>
    </SDatePickerHeader>
  );
};

const defaultProps = {
  className: '',
  id: uuidv4(),
  wrapperId: uuidv4(),
  datePickerSize: 'md',
  datePickerStyle: 'primary',
  iconPosition: 'right',
  date: undefined,
  onChange: () => {},
  monthsShown: 1,
  startDate: null,
  endDate: null,
  invalid: false,
  invalidText: '',
  invalidTextColor: '',
  showIcon: true,
  theme: Themes.canopyTheme,
  usePortal: false,
  portalId: undefined,
  popperStrategy: 'absolute',
  popperPlacement: 'bottom-start',
  popperModifiers: undefined,
} satisfies Partial<DatePickerProps>;

export const DatePicker = (props: DatePickerProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState(null);
  const [{ startDateRange, endDateRange }, setRange] = useState({
    startDateRange: null,
    endDateRange: null,
  });

  const {
    id,
    onChange,
    onFocusChange,
    theme,
    selectsRange,
    monthsShown,
    invalid,
    wrapperId,
    className,
    datePickerSize,
    datePickerStyle,
    showIcon,
    startDate,
    endDate,
    usePortal,
    portalId,
    popperStrategy,
    popperPlacement,
    popperModifiers,
    ...rest
  } = propsWithDefaults;

  const handleDateChange = (selectsRange: boolean, event) => {
    if (selectsRange) {
      const [start, end] = event;
      setDate(null);
      setRange({ startDateRange: start, endDateRange: end });
    } else {
      setDate(event);
      setRange({ startDateRange: null, endDateRange: null });
    }
    if (onChange instanceof Function) {
      onChange(event);
    }
  };

  const handleFocusChange = (input: Focused) => {
    onFocusChange instanceof Function
      ? onFocusChange(input)
      : setFocused(Boolean(input.focused));

    document.body.classList.add(`cui-${theme.name.toLowerCase()}-theme`);
  };

  const errorId = invalid ? `${id}-error-msg` : '';
  const datePickerProps = props as ReactDatePickerProps;

  // Build popper configuration if needed
  const popperProps =
    popperStrategy === 'fixed' || popperPlacement || popperModifiers
      ? {
          strategy: popperStrategy,
          ...(popperPlacement && { placement: popperPlacement }),
          ...(popperModifiers && { modifiers: popperModifiers }),
        }
      : undefined;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SWrapperComponent
        id={wrapperId!}
        invalid={invalid}
        className={className}
        datePickerSize={datePickerSize}
        datePickerStyle={datePickerStyle}
        data-invalid={invalid ? '' : undefined}
        aria-invalid={invalid ? 'true' : 'false'}
        aria-describedby={errorId}
        showIcon={Boolean(showIcon)}
      >
        {/* @ts-ignore */}
        <ReactDatePicker
          fixedHeight
          customInput={<CustomInput {...props} />}
          onChange={(event) => handleDateChange(Boolean(selectsRange), event)}
          selected={date || startDate}
          startDate={startDate || startDateRange}
          endDate={endDate || endDateRange}
          monthsShown={monthsShown}
          focusSelectedMonth={true}
          renderCustomHeader={(props) => (
            <CustomDatePickerHeader {...props} monthsShown={monthsShown} />
          )}
          withPortal={usePortal}
          portalId={portalId}
          popperProps={popperProps}
          {...rest}
        />
      </SWrapperComponent>
    </ThemeProvider>
  );
};
