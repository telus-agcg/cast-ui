import * as React from 'react';
import classNames from 'classnames';
import styled, { ThemeProvider } from 'styled-components';
import ErrorMessage from '../Typography/ErrorMessage/index';
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
   * Specify whether the control shows an icon
   *
   * @default null
   **/
  icon?: JSX.Element | React.Component | React.FunctionComponent | string;
  /**
   * Specify the position of the icon within the control
   *
   * @default 'right'
   */
  iconPosition?: 'left' | 'right';
  /**
   * Specify whether the control shows an icon
   *
   * @default null
   **/
  addonText?: string;
  /**
   * Specify the position of the icon within the control
   *
   * @default 'right'
   */
  addonTextPosition?: 'left' | 'right';
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
   * Value of the input
   */
  value?: string;
  /**
   * onChange handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: ${(props: Props) => props.theme.input.background}
	border: ${(props: Props) =>
    props.icon || props.addonText ? 'none' : props.theme.input.border};
  border-radius: ${(props: Props) =>
    props.theme.common[props.inputSize!].borderRadius};
	padding: ${(props: Props) => props.theme.common[props.inputSize!].padding}
	padding-left: ${(props: Props) =>
    'left' === props.addonTextPosition ? '0' : 'auto'}
	padding-right: ${(props: Props) =>
    'right' === props.addonTextPosition ? '0' : 'auto'}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  text-align: ${(props: Props) => (props.addonText ? 'right' : 'auto')};
  &[data-invalid] {
    border-color: ${(props: Props) => props.theme.validation.borderColor};
  }
  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }
`;

const SInputWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  outline: red;
  flex-wrap: wrap;
	align-items: stretch;
	font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  border: ${(props: Props) =>
    props.icon || props.addonText ? props.theme.input.border : 'none'};
  &.input-icon-left,
  &.input-icon-right {
    & > span {
      display: flex;
			align-items: center;
			padding: ${(props: Props) =>
        props.addonText
          ? props.theme.common[props.inputSize!].padding
          : 'auto'};
      & > * {
        padding: ${(props: Props) =>
          props.theme.common[props.inputSize!].padding};
      }
    }
  }
  &.input-icon-left {
    & > span {
      margin-right: -1px;
    }
  }
  &.input-icon-right {
    & > span {
      margin-left: -1px;
    }
  }
  &.disabled, &.disabled > input {
    border: ${props => props.theme.input.disabled.border};
    background: ${props => props.theme.input.disabled.background};
    cursor: not-allowed;
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
        <SInputWrapper
          className={classNames(
            [
              (inputProps.icon || inputProps.addonText) &&
                `input-icon-${inputProps.iconPosition ||
                  inputProps.addonTextPosition}`,
            ],
            {
              disabled: inputProps.disabled,
            },
          )}
          {...inputProps}
        >
          {('left' === inputProps.iconPosition ||
            'left' === inputProps.addonTextPosition) && (
            <span>{inputProps.icon || inputProps.addonText}</span>
          )}
          <SInput
            value={value}
            onChange={onChange}
            {...inputProps}
            data-invalid={inputProps.invalid ? '' : undefined}
            aria-invalid={inputProps.invalid ? true : undefined}
            aria-describedby={errorId}
          />
          {('right' === inputProps.iconPosition ||
            'right' === inputProps.addonTextPosition) && (
            <span>{inputProps.icon || inputProps.addonText}</span>
          )}
        </SInputWrapper>
        {inputProps.invalid && inputProps.invalidText && (
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
