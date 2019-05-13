import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface State {
  checked: boolean;
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

  indeterminate?: boolean;
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
   * Specify the function to fire when the checkbox is changed
   *
   * @default void
   **/
  onChange?(
    checked: boolean,
    id: string,
    event: React.SyntheticEvent<HTMLElement>,
  ): void;
  /**
   * Specify the value of the checkbox group when the current button is selected
   *
   * @default ''
   **/
  value: string;
  /**
   * Specify the display style the radio button will have
   *
   * @default 'stacked'
   **/
  displayStyle?: 'inline' | 'stacked';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
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
  cursor: pointer;
  ${(props: Props) => displayStyleRules(props.displayStyle, props.theme)}
`;

const SLabel = styled.label`
  align-items: center;
  display: inline-flex;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.cbSize!].fontSize};
`;

const SInput = styled.input`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.checkbox[props.cbSize!].size};
    height: ${(props: Props) => props.theme.checkbox[props.cbSize!].size};
    background-clip: padding-box;
    background-color: ${(props: Props) => props.theme.checkbox.unselectedColor};
    border-color: ${(props: Props) => props.theme.checkbox.borderColor};
    border-style: ${(props: Props) => props.theme.checkbox.borderStyle};
    border-radius: 1px;
    border-width ${(props: Props) => props.theme.checkbox.borderWidth};
    margin-right: 5px;
    padding: 3px;
  }
  &:disabled + label {
    color: ${(props: Props) => props.theme.checkbox.disabledText};
    cursor: not-allowed;
  }
  &:checked + label:before,  &:indeterminate + label:before{
    background-color: ${(props: Props) => props.theme.checkbox.selectedColor};
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
        props.cbSize === 'lg' ? '6.5px' : '6px'};
    }
    &:checked&:disabled + label:after {
      opacity: 0.5;
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
      ${(props: Props) => indeterminateCheckboxRules(props.cbSize)}
      margin-left: ${(props: Props) =>
        props.cbSize === 'lg' ? '6.5px' : '6px'};
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
          console.log(this.state);
          if (this.props.onChange instanceof Function) {
            this.props.onChange(this.state.checked, this.props.id, event);
          }
        },
      );
    }
  };

  render() {
    const {
      id,
      cbSize,
      onChange,
      theme,
      children,
      checked,
      defaultChecked,
      indeterminate,
      disabled,
      value,
      ...props
    } = this.props;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv
          data-checkbox=""
          id={`checkbox-wrapper-${id}`}
          value={value}
          {...props}
        >
          <SInput
            onChange={this.onChange}
            checked={this.state.checked}
            type="checkbox"
            ref={el => (this.input = el)}
            id={id}
            cbSize={cbSize}
            disabled={disabled}
            value={value}
            indeterminate={indeterminate}
          />
          <SLabel htmlFor={id} cbSize={cbSize}>
            {children}
          </SLabel>
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default Checkbox;
