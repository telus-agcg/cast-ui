import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

type ButtonGroupRole = 'group' | 'toolbar';
type ButtonGroupMode = 'radio' | 'checkbox';

export type Props = {
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
`;

type State = {
  SelectedValues: number[];
};

export class ButtonGroup extends React.Component<Props> {
  static Header: React.Component;
  static Body: React.Component;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = { SelectedValues: [] };

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  static defaultProps = {
    theme: Themes.defaultTheme,
  };

  onBtnClick(key: any, fn: any, event: any) {
    if (this.props.mode === 'radio') {
      const newArray = [key];
      this.setState({ SelectedValues: newArray });
    } else {
      const myClonedArray = Object.assign([], this.state.SelectedValues);
      const index = myClonedArray.indexOf(key);
      if (index < 0) {
        myClonedArray.push(key);
      } else {
        myClonedArray.splice(index, 1);
      }
      this.setState({ SelectedValues: [...myClonedArray] });
    }

    if (fn !== null && fn instanceof Function) {
      fn(event);
    }
  }

  renderChildren() {
    return React.Children.map(
      this.props.children,
      (child: React.ReactElement<any>) => {
        return React.cloneElement(child, {
          onClick: (event: any) =>
            this.onBtnClick(child.props.value, child.props.onClick, event),
          selected: this.state.SelectedValues.includes(child.props.value),
        });
      },
    );
  }

  render() {
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <ButtonGroupWrapper {...props}>
          {this.renderChildren()}
        </ButtonGroupWrapper>
      </ThemeProvider>
    );
  }
}

export default ButtonGroup;
