import * as React from 'react';
import styled from 'styled-components';
import SButton from '../Button/SButton';

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
    ${SButton} + ${SButton} {
      margin-left: 10px;
    }
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
