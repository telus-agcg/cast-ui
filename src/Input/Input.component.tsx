import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Type of input (text, number, email, etc)
   *
   * @default 'text'
   **/
  type?: string;
  /**
   * Autocomplete settings for this field
   *
   * @default 'on'
   **/
  autoComplete?: string;
  /**
   * Disables modification
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize?: 'sm' | 'md' | 'lg';
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
   * What is the maximum length of the text in the field?
   *
   * @default null
   **/
  maxLength?: number;
  /**
   * Specify the placeholder attribute for the <input>
   *
   * @default null
   */
  placeholder?: string;
  /**
   * Is the field required?
   *
   * @default false
   **/
  required?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Value of the TextArea
   */
  value?: string;
  /**
   * onChange handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SInput = styled.input`
  background: ${(props: Props) => props.theme.input.background}
  border: ${(props: Props) => props.theme.input.border};
  border-radius: ${(props: Props) =>
    props.theme.common[props.inputSize!].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.inputSize!].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    border: ${props => props.theme.input.disabled.border};
    background: ${props => props.theme.input.disabled.background};
    cursor: not-allowed;
  }
  &[data-invalid] {
    border-color: ${(props: Props) => props.theme.validation.borderColor};
  }
  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }
`;

export const Input: React.FunctionComponent<Props> = ({
  theme,
  children,
  value,
  onChange,
  ...inputProps
}) => {
  const errorId = inputProps.invalid ? `${inputProps.id}-error-msg` : '';
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SInput
          value={value}
          onChange={onChange}
          {...inputProps}
          data-invalid={inputProps.invalid ? '' : undefined}
          aria-invalid={inputProps.invalid ? true : undefined}
          aria-describedby={errorId}
        >
          {children}
        </SInput>
        {inputProps.invalid && (
          <ErrorMessage
            id={errorId}
            message={inputProps.invalidText || ''}
            textColor={inputProps.invalidTextColor || ''}
          />
        )}
      </>
    </ThemeProvider>
  );
};

Input.defaultProps = {
  theme: Themes.defaultTheme,
  inputSize: 'md',
  type: 'text',
};
