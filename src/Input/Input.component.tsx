import * as React from 'react';
import styled from 'styled-components';

type PropsThemeOnly = {
    /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type Props = PropsThemeOnly & {
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
  type: string;
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
  inputSize: string;
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
};

const SInput = styled.input`
  background: ${(props: Props) => props.theme.input.background}
  border: 1px solid ${(props: Props) => props.theme.input.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.input[props.inputSize].borderRadius};
  padding: ${(props: Props) => props.theme.input[props.inputSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.input[props.inputSize].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    background: ${props => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
  &[data-invalid] {
    border-color: ${(props: Props) => props.theme.validation.errorColor};
  }
`;

const SErrorDiv = styled.div`
  color: ${(props: PropsThemeOnly) => props.theme.validation.errorColor};
  font-family: ${(props: PropsThemeOnly) => props.theme.typography.fontFamily};
  font-size: ${(props: PropsThemeOnly) => props.theme.validation.fontSize};
  padding: ${(props: PropsThemeOnly) => props.theme.validation.padding};
`;

export const Input: React.FunctionComponent<Props> = ({
  id,
  type,
  autoComplete,
  children,
  disabled,
  inputSize = 'md',
  invalid = false,
  invalidText,
  maxLength,
  placeholder,
  required,
  theme,
}) => {
  const errorId = `${id}-error-msg`;

  const error = invalid ? (
    <SErrorDiv id={errorId} theme={theme}>
      {invalidText}
    </SErrorDiv>
  ) : null;

  return invalid ? (
    <>
    <SInput
      id={id}
      inputSize={inputSize}
      theme={theme}
      disabled={disabled}
      type={type}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      maxLength={maxLength}
      invalid={invalid}
      data-invalid
      aria-invalid
      aria-describedby={errorId}
    >
      {children}
    </SInput>
    {error}
    </>
  ) : (
    <>
    <SInput
      id={id}
      inputSize={inputSize}
      theme={theme}
      disabled={disabled}
      type={type}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      maxLength={maxLength}
      invalid={invalid}
    >
      {children}
    </SInput>
    </>
  );
};
