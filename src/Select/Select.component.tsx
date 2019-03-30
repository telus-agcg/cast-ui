import * as React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize?: string;
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Specify if the tab is disabled
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
   * The list of options available
   *
   * @default null
   **/
  options?: any;
  /**
   * Specify the control's selected option
   *
   * @default null
   **/
  selectedOption?: string;
  /**
   * Any props that should be passed directly to the third-
   * party react-select control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
};

const SDiv = styled.div`
  background: ${(props: Props) => props.theme.input.background}
  border: 1px solid ${(props: Props) => props.theme.input.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.inputSize!].borderRadius};
  padding: ${(props: Props) => props.theme.common[props.inputSize!].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  &:disabled {
    background: ${(props: Props) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
  .react-select-component > div {
    border-color: ${(props: any) => props.invalid && 'red'};
  }
`;

const SErrorDiv = styled.div`
  color: ${(props: any) => props.theme.validation.errorColor};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.validation.fontSize};
  padding: ${(props: any) => props.theme.validation.padding};
`;

export class CustomSelect extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    inputSize: 'md',
    theme: Themes.defaultTheme,
  };

  render() {
    const { options, controlSpecificProps, theme, ...props } = this.props;
    const errorId = this.props.invalid
      ? `${this.props.id}-error-msg`
      : undefined;

    const error = this.props.invalid ? (
      <SErrorDiv id={errorId} theme={theme}>
        {this.props.invalidText}
      </SErrorDiv>
    ) : null;

    return (
      <SDiv
        className="select-wrapper"
        inputSize={this.props.inputSize}
        {...this.props.invalid}
        aria-invalid={this.props.invalid ? true : undefined}
        aria-describedby={errorId}
        invalid={this.props.invalid}
        theme={theme}
        {...props}
      >
        <Select
          className="react-select-component"
          isDisabled={this.props.disabled}
          value={this.props.selectedOption}
          options={options}
          {...this.props.invalid}
          aria-invalid={this.props.invalid ? true : undefined}
          aria-describedby={errorId}
          {...controlSpecificProps}
        />
        {error}
      </SDiv>
    );
  }
}

export default CustomSelect;
