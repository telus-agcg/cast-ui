import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

// TODO: we should be able to use an interface to inherit the base properties of an
// HTMLInputElement. However, when I do this, CPU usage goes nuts, and the base
// properties still don't inherit correctly. We need to research this further.
// interface WrapperProps extends React.HTMLAttributes<HTMLInputElement> {
// ...
// }

type PropsThemeOnly = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export type Props = PropsThemeOnly & {
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
  inputSize?: string;
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
};

const SInput = styled.input`
  background: ${(props: Props) => props.theme.input.background}
  border: 1px solid ${(props: Props) => props.theme.input.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.inputSize!].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.inputSize!].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    border-color: ${props => props.theme.input.disabled.borderColor};
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

const SErrorDiv = styled.div`
  color: ${(props: Props) =>
    props.invalidTextColor || props.theme.validation.errorTextColor};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.validation.fontSize};
  padding: ${(props: Props) => props.theme.validation.padding};
  font-style: italic;
`;

export const Input: React.FunctionComponent<Props> = ({
  invalidTextColor,
  theme,
  children,
  ...inputProps
}) => {
  const errorId = inputProps.invalid ? `${inputProps.id}-error-msg` : '';
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SInput
          {...inputProps}
          data-invalid={inputProps.invalid ? '' : undefined}
          aria-invalid={inputProps.invalid ? true : undefined}
          aria-describedby={errorId}
        >
          {children}
        </SInput>
        {inputProps.invalid && (
          <SErrorDiv id={errorId} invalidTextColor={invalidTextColor}>
            {inputProps.invalidText}
          </SErrorDiv>
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
