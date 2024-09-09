import * as React from 'react';
import classNames from 'classnames';
import styled, { ThemeProvider } from 'styled-components';
import ErrorMessage from '../Typography/ErrorMessage/index';
import { Themes } from '../themes';
import { components } from 'react-select';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Type of input (text, number, email, etc)
   *
   * @default 'text'
   **/
  type?: string;
  /**
   * Autocomplete settings for this field
   *
   * @default 'off'
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
   * Specify if the input is clearable
   *
   * @default false
   **/
  isClearable?: boolean;
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
  icon?:
    | JSX.Element
    | React.Component
    | React.FunctionComponent
    | string
    | null;
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
  flex-grow: 1;
  min-width: 0;
  height: ${(props: Props) => props.theme.input[props.inputSize!].height};
  box-sizing: border-box;
  border: none;
  border-radius: ${(props: Props) =>
    props.theme.input[props.inputSize!].borderRadius};
  padding: ${(props: Props) => props.theme.input[props.inputSize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.input.fontSize};
  color: ${(props: Props) => props.theme.input.color};
  text-align: left;
  margin-right: 0;
  background-color: transparent !important;

  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // override autofill user-agent styles
    -webkit-text-fill-color: ${(props: Props) => props.theme.input.color};
  }

  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;

const SIconWrapper = styled.div`
  margin-left: ${(props: Props) =>
    props.iconPosition === 'left' ? '8px' : '0px'};
  margin-right: ${(props: Props) =>
    props.iconPosition === 'right' ? '8px' : '0px'};
  border-radius: 0px;
  button {
    border-radius: 0px;
  }
  > * {
    vertical-align: middle;
  }
`;

const SAddonTextWrapper = styled.div`
  margin: 0 8px;
`;

const SInputWrapper = styled.div<Partial<Props>>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  background: ${(props: Props) => props.theme.input.background};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize};
  color: ${(props: Props) => props.theme.reverseText};
  transition: all 0.3s;
  border: ${(props: Props) =>
    `${props.theme.input.borderWidth} 
     ${props.theme.input.borderStyle} 
     ${
       props.invalid
         ? props.theme.validation.borderColor
         : props.theme.input.borderColor
     }`};
  border-radius: ${(props: Props) =>
    props.theme.input[props.inputSize!].borderRadius};

  outline: none !important;

  &.focused {
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

  &.disabled,
  &.disabled > input {
    border: ${(props: Props) => props.theme.input.disabled.border};
    background: ${(props: Props) => props.theme.input.disabled.background};
    cursor: not-allowed;
    &:hover {
      border: ${(props: Props) => props.theme.input.disabled.border};
    }
    & > div {
      color: ${(props: Props) => props.theme.input.disabled.addonTextColor};
    }
  }

  &:hover {
    border-color: ${(props: Props) => props.theme.colors.drk800};
  }
`;

export const Input: React.FunctionComponent<Props> = ({
  theme,
  children,
  value,
  onChange,
  ...inputProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const errorId = inputProps.invalid ? `${inputProps.id}-error-msg` : '';
  const {
    disabled,
    iconPosition,
    invalid,
    addonTextPosition,
    addonText,
    icon,
    isClearable,
    inputSize,
  } = inputProps;

  const [focused, setFocused] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputProps.maxLength && inputProps.maxLength < e.target.value.length) {
      return;
    }

    onChange && onChange(e);
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SInputWrapper
          inputSize={inputSize}
          invalid={invalid}
          className={classNames(inputProps.className, {
            disabled,
            focused,
          })}
        >
          {'left' === iconPosition && icon && (
            <SIconWrapper iconPosition={iconPosition}>{icon}</SIconWrapper>
          )}
          {'left' === addonTextPosition && addonText && (
            <SAddonTextWrapper>{addonText}</SAddonTextWrapper>
          )}
          <SInput
            ref={inputRef}
            {...inputProps}
            onChange={handleChange}
            value={value}
            data-invalid={invalid ? '' : undefined}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {isClearable && !disabled && value && (
            <SIconWrapper
              data-testid={`clear-${inputProps['data-testid']}`}
              onClick={() => {
                // manually trigger onChange event to provide value to parent component
                // @ts-ignore
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                  // @ts-ignore
                  window.HTMLInputElement.prototype,
                  'value',
                ).set;
                // @ts-ignore
                nativeInputValueSetter.call(inputRef.current, '');
                const e = new Event('input', { bubbles: true });
                inputRef &&
                  inputRef.current &&
                  inputRef.current.dispatchEvent(e);
              }}
            >
              <components.CrossIcon />
            </SIconWrapper>
          )}
          {'right' === iconPosition && icon && (
            <SIconWrapper iconPosition={iconPosition}>{icon}</SIconWrapper>
          )}
          {'right' === addonTextPosition && addonText && (
            <SAddonTextWrapper className={'addon-text'}>
              {addonText}
            </SAddonTextWrapper>
          )}
          {invalid && inputProps.invalidText && (
            <ErrorMessage
              id={errorId}
              message={inputProps.invalidText || ''}
              textColor={inputProps.invalidTextColor || ''}
            />
          )}
        </SInputWrapper>
      </>
    </ThemeProvider>
  );
};

Input.defaultProps = {
  theme: Themes.canopyTheme,
  inputSize: 'md',
  type: 'text',
};
