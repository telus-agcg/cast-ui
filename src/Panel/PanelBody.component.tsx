import * as React from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

export type Props = {
  /**
   * The content of the panel header
   *
   * @default null
   * */
  children?: any;
  /**
   * Set PanelBody Style
   *
   *  @default 'primary'
   */
  panelStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Whether the panel has padding or not
   *
   *  @default 'false'
   */
  noPadding?: boolean;
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'lightBackground'
   **/
  bodyBackgroundColor?: string;
  /**
   * Set body border color. A CSS color code or a color defined in theme colors
   *
   * @default 'gray'
   **/
  bodyBorderColor?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SPanelBody = styled.div`
  display: flex;
  background: ${(props: Props) =>
    props.bodyBackgroundColor ||
    props.theme.colors[props.bodyBackgroundColor!]};
  border: ${(props: Props) =>
    `${props.theme.panel.borderWidth} solid 
    ${props.bodyBorderColor || props.theme.panel.bodyBorderColor}`};

  padding: ${(props: Props) =>
    props.noPadding ? '10px' : props.theme.panel.body.padding};
  overflow: hidden;
  height: auto;
`;

const initialState = {};
type State = Readonly<typeof initialState>;

export class PanelBody extends React.Component<Props> {
  static defaultProps = {
    panelStyle: 'primary',
  };

  readonly state: State = initialState;

  render() {
    const { children, theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SPanelBody {...props}>{children}</SPanelBody>
      </ThemeProvider>
    );
  }
}

export default withTheme(PanelBody);
