import * as React from 'react';
import styled from 'styled-components';

type Props = {
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
    props.theme.common[props.textareaSize].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.textareaSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.textareaSize].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    background: ${props => props.theme.Textarea.backgroundDisabled};
    cursor: not-allowed;
  }
  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }
`;

export const Textarea: React.FunctionComponent<Props> = ({
  disabled,
  required,
  rows,
  cols,
  maxLength,
  children,
  textareaSize = 'md',
  placeholder,
  theme,
}) => (
  <STextarea
    textareaSize={textareaSize}
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
