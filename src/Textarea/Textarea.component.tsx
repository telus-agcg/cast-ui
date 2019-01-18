import * as React from 'react';
import styled from 'styled-components';

type Props = {
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
  textareaSize: string;
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
};

const STextarea = styled.textarea`
  background: ${(props: Props) => props.theme.textarea.background}
  border: 1px solid ${(props: Props) => props.theme.textarea.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.textareaSize].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.textareaSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.textareaSize].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    border-color: ${props => props.theme.textarea.disabled.borderColor};
    background: ${props => props.theme.textarea.disabled.background};
    cursor: not-allowed;
  }
  &[data-invalid] {
    border-color: ${(props: Props) => props.theme.validation.borderColor};
  }
  ::placeholder {
    color: ${props => props.theme.textarea.placeholderColor};
  }
`;

const SErrorDiv = styled.div`
  color: ${(props: any) => props.theme.validation.errorTextColor};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.validation.fontSize};
  padding: ${(props: any) => props.theme.validation.padding};
  font-style: italic;
`;

export const Textarea: React.FunctionComponent<Props> = (textareaProps) => {
  const errorId = textareaProps.invalid ? (`${textareaProps.id}-error-msg`) : (undefined);

  const error = textareaProps.invalid ? (
    <SErrorDiv id={errorId} theme={textareaProps.theme}>
      {textareaProps.invalidText}
    </SErrorDiv>
  ) : null;

  return (
    <>
      <STextarea
        {...textareaProps}
        data-invalid={textareaProps.invalid ? '' : undefined}
        aria-invalid={textareaProps.invalid ? true : undefined}
        aria-describedby={errorId}
      >
        {textareaProps.children}
      </STextarea>
      {error}
    </>
  );
};
