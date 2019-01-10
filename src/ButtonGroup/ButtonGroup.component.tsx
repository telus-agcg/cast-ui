import * as React from 'react';
import styled from 'styled-components';
import SButton from '../Button/SButton';

type ButtonGroupRole = 'group' | 'toolbar';

type Props = {
  /**
   * Specify role (group or toolbar)
   *
   * @default defaultTheme
   **/
  role: ButtonGroupRole;
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
// ${SButton} + ${SButton} {
//   margin-left: 10px;
// }
`;

const initialState = {
  selectedKey: null,
};
type State = typeof initialState;

export class ButtonGroup extends React.Component<Props> {
  static Header: React.Component;
  static Body: React.Component;

  constructor(props: Props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <ButtonGroupWrapper {...this.props}>
        {this.props.children}
      </ButtonGroupWrapper>
    );
  }
}
