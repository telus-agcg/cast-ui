import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Select Textarea Size
   *
   * @default 'md'
   **/
  textareaSize?: 'sm' | 'md' | 'lg';
  /**
   * Disables modification
   *
   * @default false
   **/
  disabled?: boolean;
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
   * A CSS code of the invalid text
   *
   * @default ''
   **/
  invalidTextColor?: string;
  /**
   * Is the field required?
   *
   * @default false
   **/
  required?: boolean;
  /**
   * What is the maximum length of the text in the field?
   *
   * @default null
   **/
  maxLength?: number;
  /**
   * What is the maximum length of the text in the field?
   *
   * @default null
   **/
  rows?: number;
  /**
   * What is the maximum length of the text in the field?
   *
   * @default null
   **/
  cols?: number;
  /**
   * Placeholder text
   *
   * @default null
   **/
  placeholder?: any;
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
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const STextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  background: ${(props: Props) => props.theme.textarea.background};
  border: 1px solid ${(props: Props) => props.theme.textarea.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.textareaSize!].borderRadius};
  border-color: ${(props: Props) =>
    props.invalid
      ? props.theme.validation.borderColor
      : props.theme.colors.secondary};
  padding: ${(props: Props) => props.theme.common[props.textareaSize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) =>
    props.theme.common[props.textareaSize!].fontSize};
  color: ${(props: Props) => props.theme.reverseText};
  outline: none !important;
  &:focus {
    outline: none !important;
    border-color: ${(props: Props) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.colors.primary};
    box-shadow: 0 0 3px
      ${(props: Props) =>
        props.invalid
          ? props.theme.validation.borderColor
          : props.theme.colors.primary};
  }
  &:disabled {
    border-color: ${props => props.theme.textarea.disabled.borderColor};
    background: ${props => props.theme.textarea.disabled.background};
    cursor: not-allowed;
  }
  ::placeholder {
    color: ${props => props.theme.textarea.placeholderColor};
  }
`;

export const Textarea: React.FunctionComponent<Props> = ({
  theme,
  children,
  value,
  onChange,
  ...textareaProps
}) => {
  const errorId = textareaProps.invalid ? `${textareaProps.id}-error-msg` : '';
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <STextarea
          value={value}
          onChange={onChange}
          {...textareaProps}
          data-invalid={textareaProps.invalid ? '' : undefined}
          aria-invalid={textareaProps.invalid ? true : undefined}
          aria-describedby={errorId}
        >
          {children}
        </STextarea>
        {textareaProps.invalid && (
          <ErrorMessage
            id={errorId}
            message={textareaProps.invalidText || ''}
            textColor={textareaProps.invalidTextColor || ''}
          />
        )}
      </>
    </ThemeProvider>
  );
};
Textarea.defaultProps = {
  textareaSize: 'md',
  theme: Themes.defaultTheme,
};
