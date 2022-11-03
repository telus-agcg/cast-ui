import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getDataProps } from '../utils/common';
import { Themes } from '../themes';
import ErrorMessage from '../Typography/ErrorMessage/index';

export interface State {
  checked: boolean | undefined;
}

export type Props = {
  /**
   * Specify the ID of the individual checkbox
   *
   * @default null
   **/
  id: string;
  /**
   * Specify the size of the checkbox (sm | md | lg)
   *
   * @default 'md'
   **/
  cbSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify if the checkbox is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Set className
   *
   * @default ''
   **/
  className?: string;
  defaultChecked?: boolean;
  /**
   * Specify if the checkbox should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the display style the radio button will have
   *
   * @default 'stacked'
   **/
  displayStyle?: 'inline' | 'stacked';
  /**
   * Specify the function to fire when the checkbox is changed
   *
   * @default void
   **/
  indeterminate?: boolean;
  /**
   * Specify if the default state of the checkbox is checked
   *
   * @default false
   **/
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
  onChange?(checked: boolean, event: React.SyntheticEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Specify the value of the checkbox group when the current button is selected
   *
   * @default ''
   **/
  value: string;
};

const displayStyleRules: Function = (
  displayStyle: 'inline' | 'stacked',
  theme: any,
) => {
  if (displayStyle === 'inline') {
    return {
      display: 'inline-block',
      'padding-right': theme.checkbox.inlineSpacing,
    };
  }
  return {
    display: 'block',
    'padding-bottom': theme.checkbox.stackedSpacing,
  };
};

const indeterminateCheckboxRules: Function = (cbSize: string) => {
  const ySize = { lg: -1, md: 1, sm: 3 }[cbSize];
  const xSize = { lg: -1, md: -2, sm: -1 }[cbSize];
  const transform = `rotate(90deg) translateX(${xSize}px) translateY(${ySize}px);`;
  return {
    transform,
    '-webkit-transform': transform,
    '-ms-transform': transform,
  };
};

const SDiv = styled.div`
  line-height: ${(props: Props) => props.theme.checkbox[props.cbSize!].height};
  ${(props: Props) => displayStyleRules(props.displayStyle, props.theme)};
  display: inline-flex;
  align-items: center;
`;

const SLabel = styled.label`
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.cbSize!].fontSize};
  position: relative;
`;

const SInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:focus {
    & + label:before {
      border: 1px solid ${(props: Props) => props.theme.colors.white};
      box-shadow: 0 0 0 2px ${(props: Props) =>
        props.theme.checkbox.selectedColor};
    }
  }
	& + label {
    &:before, &:after {
      display:block;
    }
  }
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.checkbox[props.cbSize!].squareSize};
    height: ${(props: Props) => props.theme.checkbox[props.cbSize!].squareSize};
    background-clip: padding-box;
    background-color: ${(props: Props) => props.theme.checkbox.unselectedColor};
    border-color: ${(props: Props) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.checkbox.borderColor};
    border-style: ${(props: Props) => props.theme.checkbox.borderStyle};
    border-radius: 1px;
    border-width ${(props: Props) => props.theme.checkbox.borderWidth};
    margin: ${(props: Props) =>
      props.theme.checkbox[props.cbSize!].squareMargin};
    margin-right: 5px;
    padding: 3px;
    transition: all 0.3s;
  }
  &:disabled + label {
    color: ${(props: Props) => props.theme.checkbox.disabledText};
    cursor: not-allowed;
  }

  &:checked + label:before,  
  &:indeterminate + label:before {
    background-color: ${(props: Props) => props.theme.checkbox.selectedColor};
  }

  &:checked + label:hover:before,
  &:indeterminate + label:hover:before {  
    background-color: ${(props: Props) => props.theme.colors.primaryHover};
    border-color: ${(props: Props) => props.theme.colors.primaryHover};
  }

  &:not(:checked) + label:hover:before{
    border-color: ${(props: Props) => props.theme.colors.primaryHover};
  }

  label:before  {
    background-color: ${(props: Props) => props.theme.checkbox.disabledCheck};
    border-color: ${(props: Props) => props.theme.checkbox.disabledCheck};
  } 

  &:checked + label:after {
      content: "";
      padding: 2px;
      text-align: center;
      position: absolute;
      height:  ${(props: Props) => (props.cbSize === 'lg' ? '8px' : '6px')};
      border-style: solid;
      border-color: ${(props: Props) => props.theme.colors.white};
      border-width: ${(props: Props) =>
        props.cbSize === 'lg' ? '0 4px 4px 0' : '0 3px 3px 0'};
      transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      margin-left: ${(props: Props) =>
        props.theme.checkbox[props.cbSize!].marginLeft};
      left: 0;
      top:${(props: Props) =>
        props.theme.checkbox[props.cbSize!].checkedTopPosition};
    }

    &:indeterminate + label:after {
      content: "";
      padding: 2px;
      text-align: center;
      position: absolute;
      height:  ${(props: Props) => (props.cbSize === 'lg' ? '8px' : '6px')};
      border-style: solid;
      border-color: ${(props: Props) => props.theme.colors.white};
      border-width: ${(props: Props) =>
        props.cbSize === 'lg' ? '0 4px 0px 0' : '0 3px 0px 0'};
      ${(props: Props) => indeterminateCheckboxRules(props.cbSize)};
      margin-left: ${(props: Props) =>
        props.theme.checkbox[props.cbSize!].marginLeft};
			transform: rotate(90deg) translateX(50%) translateY(0px);
			-webkit-transform: rotate(90deg) translateX(50%) translateY(0px);
			-ms-transform: rotate(90deg) translateX(50%) translateY(0px);
			top:${(props: Props) =>
        props.theme.checkbox[props.cbSize!].indeterminateTopPosition};
    }
    &:disabled + label:before,
    &:disabled:checked + label:before,
    &:disabled:not(:checked) + label:before
     {
      background-color: ${(props: Props) => props.theme.checkbox.disabledCheck};
      border-color: ${(props: Props) => props.theme.checkbox.disabledCheck};
    } 
     
`;

export class Checkbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.input.indeterminate = this.props.indeterminate;
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.input.indeterminate = this.props.indeterminate;
    }
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
    return false;
  }

  state = {
    checked: this.props.checked || !!this.props.defaultChecked,
  };

  input: any;

  static defaultProps = {
    cbSize: 'md',
    theme: Themes.defaultTheme,
    indeterminate: false,
    defaultChecked: false,
    disabled: false,
  };

  onChange = (event: any) => {
    if (!this.props.disabled) {
      this.setState(
        prevState => ({
          checked: !prevState.checked,
        }),
        () => {
          if (this.props.onChange instanceof Function) {
            this.props.onChange(this.state.checked, event);
          }
        },
      );
    }
  };

  render() {
    const {
      id,
      cbSize,
      className,
      theme,
      children,
      displayStyle,
      indeterminate,
      invalid,
      invalidText,
      invalidTextColor,
      disabled,
      value,
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';
    const dataProps = getDataProps(this.props);
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <>
          <SDiv
            data-checkbox=""
            id={`${id}-Checkbox`}
            value={value}
            cbSize={cbSize}
            displayStyle={displayStyle}
            theme={theme}
            className={className}
          >
            <SInput
              {...dataProps}
              onChange={this.onChange}
              checked={this.state.checked}
              type="checkbox"
              role="checkbox"
              ref={el => (this.input = el)}
              id={id}
              cbSize={cbSize}
              disabled={disabled}
              value={value}
              indeterminate={indeterminate}
              invalid={invalid}
              invalidText={invalidText}
              invalidTextColor={invalidTextColor}
            />
            <SLabel htmlFor={id} cbSize={cbSize}>
              {children}
            </SLabel>
          </SDiv>
          {invalid && invalidText && (
            <ErrorMessage
              id={errorId}
              message={invalidText || ''}
              textColor={invalidTextColor || ''}
            />
          )}
        </>
      </ThemeProvider>
    );
  }
}

export default Checkbox;
