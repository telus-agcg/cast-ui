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
  required,
  rows,
  cols,
  maxLength,
  children,
  TextareaSize = 'md',
  placeholder,
  theme,
}) => (
  <STextarea
    TextareaSize={TextareaSize}
    theme={theme}
    disabled={disabled}
    required={required}
    rows={rows}
    cols={cols}
    placeholder={placeholder}
    maxLength={maxLength}
  >
    {children}
  </STextarea>
);
