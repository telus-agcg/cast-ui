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
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'light'
   **/
  listGroupTheme?: 'light' | 'dark';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SListGroupItem = styled.li<Partial<Props>>`
  overflow: hidden;
  height: auto;
`;

const initialState = {};
type State = Readonly<typeof initialState>;

export class ListGroupItem extends React.Component<Props> {
  static defaultProps = {
    listGroupTheme: '',
    theme: Themes.canopyTheme,
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
