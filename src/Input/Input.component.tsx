import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize: string;
  /**
   * Disables modification
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Type of input (text, number, email, etc)
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

const SInput = styled.input`
  background: ${(props: Props) => props.theme.input.background}
  border: 1px solid ${(props: Props) => props.theme.input.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.inputSize].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.inputSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    background: ${props => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

export const Input: React.FunctionComponent<Props> = ({
  disabled,
  type,
  required,
  autoComplete,
  maxLength,
  children,
  inputSize = 'md',
  theme,
}) => (
  <SInput
    inputSize={inputSize}
    theme={theme}
    disabled={disabled}
    type={type}
    required={required}
    autoComplete={autoComplete}
    maxLength={maxLength}
  >
    {children}
  </SInput>
);
