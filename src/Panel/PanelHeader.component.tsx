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
   * The ref of the panel headre
   *
   * @default null
   * */
  headerRef?: React.RefObject<HTMLDivElement>;
  /**
   * The name of the panel
   *
   * @default ''
   * */
  name?: string;
  /**
   * The title of the panel
   *
   * @default ''
   * */
  title?: string;
  /**
   * Set header color. A CSS color code or a color defined in theme colors
   *
   * @default 'primary'
   **/
  headerColor?: string;
  /**
   * Set header background color. A CSS color code or a color defined in theme colors
   *
   * @default 'white'
   **/
  headerBackgroundColor?: string;
  /**
   * Set header border color. A CSS color code or a color defined in theme colors
   *
   * @default 'gray'
   **/
  headerBorderColor?: string;
  /**
   * Set PanelHeader Style
   *
   *  @default 'default'
   */
  panelStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   *  Whether the panel can be collapsed
   *
   *  @default 'false'
   */
  collapsible?: boolean;
  /**
   * Whether the panel is collapsed or not
   *
   *  @default 'false'
   */
  isCollapsed?: boolean;
  /**
   * Whether the panel is collapsed
   *
   *  @default 'false'
   */
  localIsCollapsed?: boolean;
  /**
   * Toggle panel body
   *
   *  @default 'void'
   */
  toggleItem?(event: React.MouseEvent<HTMLElement>, theme: any): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SPanelHeader = styled.div`
  background: ${(props: Props) =>
    props.theme.styles[props.panelStyle!].lightFlood};
  padding: ${(props: Props) => props.theme.panel.header.padding};
  color: ${(props: Props) =>
    props.theme.colors[props.headerColor!] || props.headerColor!.toString()};
  background: ${(props: Props) =>
    props.theme.colors[props.headerBackgroundColor!] ||
    props.headerBackgroundColor!.toString()};
  border: ${(props: Props) =>
    `${props.theme.panel.borderWidth} solid
    ${props.theme.colors[props.headerBorderColor!] ||
      props.headerBorderColor!.toString()}`};
  &:hover {
    cursor: ${(props: Props) => (props.collapsible ? 'pointer' : 'auto')};
  }
`;

/* tslint:disable:max-line-length */
const SExpandIcon = styled.div`
  float: right;
  padding: 0;
  margin: -4px 0 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-size: 28px;
  background-repeat: no-repeat;
`;

const SCollapseIcon = styled.div`
  float: right;
  padding: 0;
  margin: -4px 0 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-size: 28px;
  background-repeat: no-repeat;
`;

export class PanelHeader extends React.Component<Props> {
  static defaultProps = {
    panelStyle: 'default',
    headerColor: 'primary',
    headerBackgroundColor: 'white',
    headerBorderColor: 'lightGray',
    collapsible: false,
    toggleItem: () => {},
    theme: Themes.defaultTheme,
  };

  render() {
    const ChevronImage = this.props.localIsCollapsed ? (
      <SExpandIcon />
    ) : (
      <SCollapseIcon />
    );
    const { toggleItem, headerRef, name, title, theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SPanelHeader
          onClick={(e: any) => toggleItem!(e, theme)}
          ref={headerRef}
          {...props}
        >
          {name && <b>{name}:</b>} {title} {props.collapsible && ChevronImage}
        </SPanelHeader>
      </ThemeProvider>
    );
  }
}

export default withTheme(PanelHeader);
