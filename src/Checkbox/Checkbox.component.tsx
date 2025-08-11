import { Themes } from '@themes';
import { ErrorMessage } from '@typography';
import { getDataProps } from '@utils';
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export interface State {
  checked: boolean | undefined;
}

export type CheckboxProps = React.PropsWithChildren<{
  /**
   * Specify the ID of the individual checkbox
   *
   * @default null
   **/
  id?: string;
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
  /**
   * Specify if the default state of the checkbox is checked
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Specify if the checkbox should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the way checkboxes will be laid out
   *
   * @default 'stacked'
   **/
  displayStyle?: 'inline' | 'stacked';
  /**
   * Specify whether the checkbox is neither "on" or "off"
   *
   * @default void
   **/
  indeterminate?: boolean;
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
   * Specify the function to fire when the checkbox is changed
   *
   * @default void
   **/
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
}>;

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
  };
};

const SDiv = styled.div<CheckboxProps>`
  ${(props) => displayStyleRules(props.displayStyle, props.theme)};
  display: inline-flex;
  position: relative;
`;

const SLabel = styled.label<{ cbSize: 'sm' | 'md' | 'lg' }>`
  cursor: pointer;
  padding-left: 20px;
  text-indent: -20px;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.common[props.cbSize!].fontSize};
`;

const SInput = styled.input<CheckboxProps>`
  position: relative;
  display: none;
  & + label {
    &:before,
    &:after {
      display: inline-flex;
      border-radius: ${(props) => props.theme.checkbox.borderRadius ?? ''};
    }
  }
  + label:before {
    content: '';
    width: ${(props) => props.theme.checkbox[props.cbSize!].squareSize};
    height: ${(props) => props.theme.checkbox[props.cbSize!].squareSize};
    background-clip: padding-box;
    background-color: ${(props) => props.theme.checkbox.unselectedColor};
    border-color: ${(props) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.checkbox.borderColor};
    border-style: ${(props) => props.theme.checkbox.borderStyle};
    border-width: ${(props) => props.theme.checkbox.borderWidth};
    margin-right: ${(props: any) => (props.hasChildren ? '4px' : '0px')};
    padding: 3px;
    transition: all 0.3s;
  }
  &:disabled + label {
    color: ${(props) => props.theme.checkbox.disabledText};
    cursor: not-allowed;
  }

  &:checked + label:before,
  &:indeterminate + label:before {
    background-color: ${(props) => props.theme.checkbox.selectedColor};
    border-color: ${(props) => props.theme.checkbox.selectedColor};
  }
  &:checked + label:hover:before,
  &:indeterminate + label:hover:before {
    background-color: ${(props) => props.theme.colors.primaryHover};
    border-color: ${(props) => props.theme.colors.primaryHover};
  }

  &:not(:checked) + label:hover:before {
    border-color: ${(props) => props.theme.colors.primaryHover};
  }

  label:before {
    background-color: ${(props) => props.theme.checkbox.disabledCheck};
    border-color: ${(props) => props.theme.checkbox.disabledCheck};
  }
  &:checked + label:after {
    content: '';
    padding: ${(props) => props.theme.checkbox[props.cbSize!].checkmark.padding};
    position: absolute;
    border-radius: 0px;
    height: ${(props) => props.theme.checkbox[props.cbSize!].checkmark.height};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.white};
    border-width: ${(props) =>
      props.cbSize === 'lg'
        ? props.theme.checkbox.lg.borderWidth ?? '0 4px 4px 0'
        : props.theme.checkbox.md.borderWidth ?? '0 3px 3px 0'};
    transform: rotate(45deg) translateX(-1px) translateY(-1px);
    -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
    -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
    margin-left: ${(props) => props.theme.checkbox[props.cbSize!].marginLeft};
    top: ${(props) => props.theme.checkbox[props.cbSize!].checkmark.top};
    left: ${(props) => props.theme.checkbox[props.cbSize!].checkmark.left};
  }

  &:indeterminate + label:after {
    content: '';
    padding: ${(props) => props.theme.checkbox[props.cbSize!].indeterminate.padding};
    text-align: center;
    position: absolute;
    border-radius: 0px;
    height: 0px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.white};
    border-width: ${(props) =>
      props.cbSize === 'lg' ? '0 0 2px 0' : '0 0 1px 0'};
    margin-left: 6px;
    top: ${(props) => props.theme.checkbox[props.cbSize!].indeterminate.top};
    left: ${(props) => props.theme.checkbox[props.cbSize!].indeterminate.left};
  }

  &:disabled:checked + label:before {
    background-color: ${(props) => props.theme.checkbox.disabledCheck};
    border-color: ${(props) => props.theme.checkbox.disabledCheck};
  }
  &:disabled + label:before,
  &:disabled:not(:checked) + label:before {
    background-color: ${(props) =>
      props.theme.checkbox.disabledNotChecked ??
      props.theme.checkbox.disabledCheck};
    border-color: ${(props) =>
      props.theme.checkbox.disabledNotChecked ??
      props.theme.checkbox.disabledCheck};
  }
`;

export class Checkbox extends React.Component<CheckboxProps, State> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  componentDidMount() {
    this.input.indeterminate = this.props.indeterminate;
  }
  componentDidUpdate(prevProps: CheckboxProps) {
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
    theme: Themes.canopyTheme,
    indeterminate: false,
    defaultChecked: false,
    disabled: false,
  };

  onChange = (event: any) => {
    if (!this.props.disabled) {
      this.setState(
        (prevState) => ({
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
              hasChildren={Boolean(children)}
              type="checkbox"
              role="checkbox"
              //   @ts-ignore
              ref={(el) => (this.input = el)}
              id={id}
              cbSize={cbSize}
              disabled={disabled}
              value={value}
              indeterminate={indeterminate}
              invalid={invalid}
              invalidText={invalidText}
              invalidTextColor={invalidTextColor}
            />
            <SLabel htmlFor={id} cbSize={cbSize || 'md'}>
              {children}
            </SLabel>
            {invalid && invalidText && (
              <ErrorMessage id={errorId} message={invalidText || ''} />
            )}
          </SDiv>
        </>
      </ThemeProvider>
    );
  }
}

export default Checkbox;
