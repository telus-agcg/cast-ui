import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Textarea Size
   *
   * @default 'md'
   **/
  TextareaSize: string;
  /**
   * Disables modification
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Type of Textarea (text, number, email, etc)
   *
   * @default 'text'
   **/
  type: string;
  /**
   * Is the field required?
   *
   * @default false
   **/
  required?: boolean;
  /**
   * Autocomplete settings for this field
   *
   * @default 'on'
   **/
  autoComplete?: string;
  /**
   * What is the maximum length of the text in the field?
   *
   * @default null
   **/
  maxLength?: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const STextarea = styled.textarea`
  background: ${(props: Props) => props.theme.Textarea.background}
  border: 1px solid ${(props: Props) => props.theme.Textarea.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.Textarea[props.TextareaSize].borderRadius};
  padding: ${(props: Props) => props.theme.Textarea[props.TextareaSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.Textarea[props.TextareaSize].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    background: ${props => props.theme.Textarea.backgroundDisabled};
    cursor: not-allowed;
  }
`;

export const Textarea: React.FunctionComponent<Props> = ({
  disabled,
  type,
  required,
  autoComplete,
  maxLength,
  children,
  TextareaSize = 'md',
  theme,
}) => (
  <STextarea
    TextareaSize={TextareaSize}
    theme={theme}
    disabled={disabled}
    type={type}
    required={required}
    autoComplete={autoComplete}
    maxLength={maxLength}
  >
    {children}
  </STextarea>
);
