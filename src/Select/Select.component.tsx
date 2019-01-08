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
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize: string;
};

type Props = PropsThemeOnly & {
  /**
   * Specify the control's selected option
   *
   * @default null
   **/
  selectedOption?: string;
  /**
   * The list of options available
   *
   * @default null
   **/
  options?: any;
  /**
   * Specify if the tab is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Any props that should be passed directly to the third-
   * party react-select control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
};

const SDiv = styled.div`
  background: ${(props: PropsThemeOnly) => props.theme.input.background}
  border: 1px solid ${(props: PropsThemeOnly) => props.theme.input.borderColor};
  border-radius: ${(props: PropsThemeOnly) =>
    props.theme.common[props.inputSize].borderRadius};
  padding: ${(props: PropsThemeOnly) => props.theme.common[props.inputSize].padding}
  font-family: ${(props: PropsThemeOnly) => props.theme.typography.fontFamily};
  font-size: ${(props: PropsThemeOnly) => props.theme.common[props.inputSize].fontSize}
  color: ${(props: PropsThemeOnly) => props.theme.reverseText};
  &:disabled {
    background: ${(props: PropsThemeOnly) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

class CustomSelect extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SDiv inputSize={this.props.inputSize}>
        <Select
          isDisabled={this.props.disabled}
          value={this.props.selectedOption}
          options={this.props.options}
          {...this.props.controlSpecificProps}
        />
      </SDiv>
    );
  }
}

export default CustomSelect;
