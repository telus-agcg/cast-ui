import * as React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

type PropsThemeOnly = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type PropsThemeAndInputSize = PropsThemeOnly & {
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize: string;
};

type Props = PropsThemeAndInputSize & {
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
  background: ${(props: PropsThemeAndInputSize) => props.theme.input.background}
  border: 1px solid ${(props: PropsThemeAndInputSize) => props.theme.input.borderColor};
  border-radius: ${(props: PropsThemeAndInputSize) =>
    props.theme.common[props.inputSize].borderRadius};
  padding: ${(props: PropsThemeAndInputSize) => props.theme.common[props.inputSize].padding}
  font-family: ${(props: PropsThemeAndInputSize) => props.theme.typography.fontFamily};
  font-size: ${(props: PropsThemeAndInputSize) => props.theme.common[props.inputSize].fontSize}
  color: ${(props: PropsThemeAndInputSize) => props.theme.reverseText};
  &:disabled {
    background: ${(props: PropsThemeAndInputSize) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

const SErrorDiv = styled.div`
  color: ${(props: PropsThemeOnly) => props.theme.validation.errorColor};
  font-family: ${(props: PropsThemeOnly) => props.theme.typography.fontFamily};
  font-size: ${(props: PropsThemeOnly) => props.theme.validation.fontSize};
  padding: ${(props: PropsThemeOnly) => props.theme.validation.padding};
`;

class CustomSelect extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const errorId = this.props.invalid ? (`${this.props.id}-error-msg`) : (undefined);

    const error = this.props.invalid ? (
      <SErrorDiv id={errorId} theme={this.props.theme}>
        {this.props.invalidText}
      </SErrorDiv>
    ) : null;

    return (
      <SDiv inputSize={this.props.inputSize}
        data-invalid={this.props.invalid ? '' : undefined}
        aria-invalid={this.props.invalid ? true : undefined}
        aria-describedby={errorId}
      >
        <Select
          isDisabled={this.props.disabled}
          value={this.props.selectedOption}
          options={this.props.options}
          {...this.props.controlSpecificProps}
        />
        {error}
      </SDiv>
    );
  }
}

export default CustomSelect;
