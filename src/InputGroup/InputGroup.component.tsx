import * as React from "react";
import styled from "styled-components";

type Props = {
  /** the content of the input group  */
  // children?: React.ReactNode[] | Function;
  /** the label of the input group  */
  label: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const InputGroupWrapper = styled.div`
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  display: ${(props: Props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props: Props) => props.theme.inputGroup.root.flexWrap};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;
const SLabel = styled.label`
  background: white;
  overflow: hidden;
  height: auto;
  padding: ${(props: Props) => props.theme.label.padding};
`;

const initialState = {
  isCollapsed: false
};
type State = Readonly<typeof initialState>;

export class InputGroup extends React.Component<Props, State> {
  static Header: React.Component;
  static Body: React.Component;

  constructor(props: Props) {
    super(props);
  }

  readonly state: State = initialState;
  localIsCollapsed: boolean = false;

  render() {
    return (
      <InputGroupWrapper {...this.props}>
        <SLabel {...this.props}>{this.props.label}</SLabel>
        {this.props.children}
      </InputGroupWrapper>
    );
  }
}
