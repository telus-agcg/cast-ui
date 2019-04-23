import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DateRangePicker } from 'react-dates';

export interface Props {
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
}

const SWrapperComponent = styled.div``;

export class DatePickerRange extends React.Component<Props> {
  render() {
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperComponent>
          <DateRangePicker {...props} />
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
