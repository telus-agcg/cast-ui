import * as React from 'react';
import styled from 'styled-components';
import SButton from '../Button/SButton';

type ButtonGroupRole = 'group' | 'toolbar';
type ButtonGroupMode = 'radio' | 'checkbox';

type Props = {
  /**
   * Specify role (group or toolbar)
   *
   * @default null
   **/
  role: ButtonGroupRole;
  /**
   * Specify mode (radio or checkbox)
   *
   * @default null
   **/
  mode: ButtonGroupMode;
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

type State = {
  SelectedValues: number[];
};

class ButtonGroup extends React.Component<Props> {
  static Header: React.Component;
  static Body: React.Component;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = { SelectedValues: [] };

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(key: any, fn: any) {
    if (this.props.mode === 'radio') {
      this.state.SelectedValues.length = 0;
      this.state.SelectedValues.push(key);
    } else {
      const index = this.state.SelectedValues.indexOf(key);
      if (index < 0) {
        this.state.SelectedValues.push(key);
      } else {
        this.state.SelectedValues.splice(index, 1);
      }
    }
    this.setState({ SelectedValues: [...this.state.SelectedValues] });

    if (fn !== null) {
      fn();
    }
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
      return React.cloneElement(child, {
        onClick: () => this.onBtnClick(child.props.value, child.props.onClick),
        selected: this.state.SelectedValues.includes(child.props.value),
      });
    });
  }

  render() {
    return (
      <ButtonGroupWrapper {...this.props}>
        {this.renderChildren()}
      </ButtonGroupWrapper>
    );
  }
}

export default ButtonGroup;
