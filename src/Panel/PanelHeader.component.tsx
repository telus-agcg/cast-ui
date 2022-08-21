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
   * Set PanelHeader Style
   *
   *  @default 'primary'
   */
  panelStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Set PanelHeader Icon position
   *
   *  @default 'right'
   */
  iconPosition?: 'right' | 'left';
  /**
   * Whether the panel is collapsed or not
   *
   *  @default 'false'
   */
  isCollapsed?: boolean;
  /**
   * Toggle panel body
   *
   *  @default 'void'
   */
  collapsedIcon?: React.ReactElement;
  expandedIcon?: React.ReactElement;
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
  color: ${(props: Props) => props.theme.panel.headerColor};
  background: ${(props: Props) => props.theme.panel.headerBackgroundColor};
  border: ${(props: Props) =>
    `${props.theme.panel.borderWidth} solid
    ${props.theme.panel.headerBorderColor}`};
  &:hover {
    cursor: ${(props: Props) =>
      props.isCollapsed !== undefined ? 'pointer' : 'auto'};
  }
`;

/* tslint:disable:max-line-length */
const SExpandIcon = styled.div`
  float: ${(props: Props) => props.iconPosition};
  padding: 0;
  margin-right: 8px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 18px;
  height: 18px;
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center;
`;

const SCollapseIcon = styled.div`
  float: ${(props: Props) => props.iconPosition};
  padding: 0;
  margin-right: 8px;
  transform: rotate(90deg);
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 18px;
  height: 18px;
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center;
`;

const ChevronImage: Function = (
  isCollapsed: boolean | undefined,
  iconPosition?: 'right' | 'left',
  collapsedIcon?: any,
  expandedIcon?: any,
) => {
  if (undefined === isCollapsed) {
    return null;
  }
  return isCollapsed
    ? collapsedIcon || <SCollapseIcon iconPosition={iconPosition} />
    : expandedIcon || <SExpandIcon iconPosition={iconPosition} />;
};

const initialState = {
  isCollapsed: false,
};
type State = Readonly<typeof initialState>;

export class PanelHeader extends React.Component<Props> {
  static defaultProps = {
    panelStyle: 'primary',
    toggleItem: () => {},
    theme: Themes.defaultTheme,
  };

  readonly state: State = initialState;
  isCollapsed: boolean = false;

  render() {
    const {
      toggleItem,
      name,
      title,
      theme,
      collapsedIcon,
      expandedIcon,
      iconPosition,
      ...props
    } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SPanelHeader onClick={(e: any) => toggleItem!(e, theme)} {...props}>
          {name && (
            <b>
              {name}
              {title ? ':' : ''}
            </b>
          )}{' '}
          {title}{' '}
          {ChevronImage(
            this.props.isCollapsed,
            iconPosition,
            collapsedIcon,
            expandedIcon,
          )}
        </SPanelHeader>
      </ThemeProvider>
    );
  }
}

export default withTheme(PanelHeader);
