import { DayPickerInputProps } from 'react-day-picker';

import { InputProps } from '../Input';

type BlendedProps = InputProps & DayPickerInputProps;

export type Props = Partial<BlendedProps> & {
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
  id: string;
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
  datePickerSize?: 'sm' | 'md' | 'lg';
  /**
   * Select DatePicker style.
   *
   * @default 'primary'
   **/
  datePickerStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  withoutPicker: boolean;
};
