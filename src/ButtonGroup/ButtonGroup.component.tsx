import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const ButtonGroupWrapper = styled.div`
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

export class ButtonGroup extends React.Component<Props> {
  static Header: React.Component;
  static Body: React.Component;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ButtonGroupWrapper {...this.props}>
        {this.props.children}
      </ButtonGroupWrapper>
    );
  }
}
