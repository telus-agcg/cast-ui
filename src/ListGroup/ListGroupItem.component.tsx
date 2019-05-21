import * as React from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * The content of the panel header
   *
   * @default null
   * */
  children?: any;
  /**
   * Set ListGroupItem Style
   *
   *  @default 'primary'
   */
  listGroupStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'lightBackground'
   **/
  backgroundColor?: string;
  /**
   * Set body border color. A CSS color code or a color defined in theme colors
   *
   * @default 'red'
   **/
  borderColor?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SListGroupItem = styled.li`
  overflow: hidden;
  height: auto;
  border-bottom: 1px solid ${(props: Props) => props.theme.colors.secondary};
  background-color: ${(props: Props) =>
    props.backgroundColor ||
    props.theme.styles[props.listGroupStyle!].listGroupBackground};
`;

const initialState = {};
type State = Readonly<typeof initialState>;

export class ListGroupItem extends React.Component<Props> {
  static defaultProps = {
    listGroupStyle: 'primary',
    theme: Themes.defaultTheme,
  };

  readonly state: State = initialState;

  render() {
    const { children, theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SListGroupItem {...props}>{children}</SListGroupItem>
      </ThemeProvider>
    );
  }
}

export default withTheme(ListGroupItem);
