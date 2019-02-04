import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /** the content of the panel  */
  children?: React.ReactNode;
  /** the name of the panel  */
  name?: string;
  /** the title of the panel  */
  title?: string;
  /** 'default', 'primary', 'success', 'warning', 'danger'
   *  @default 'default'
   */
  panelStyle: string;
  /** whether the panel can be collapsed
   *  @default 'false'
   */
  collapsible?: boolean;
  /** whether the panel is collapsed
   *  @default 'false'
   */
  localIsCollapsed?: boolean;
  /** toggle panel body
   *  @default 'void'
   */
  toggleItem?: Function;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  onClick?: any;
};

const SPanelHeader = styled.div`
  background: ${(props: Props) =>
    props.theme.styles[props.panelStyle].lightFlood};
  padding: 5px 8px;
  font-size: 18px;
  color: ${(props: Props) => props.theme.styles[props.panelStyle].text};
  line-height: 32px;
  &:hover {
    background: ${(props: Props) =>
      props.collapsible
        ? props.theme.styles[props.panelStyle].hoverLightFlood
        : 'auto'};
    cursor: ${(props: Props) => (props.collapsible ? 'pointer' : 'auto')};
  }
`;

/* tslint:disable:max-line-length */
const SExpandIcon = styled.div`
  float: right;
  padding: 0;
  margin: 0;
  line-height: 32px;
  // tslint:disable-next-line:max-line-length
  background: transparent
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 32px;
  height: 32px;
`;

const SCollapseIcon = styled.div`
  float: right;
  padding: 0;
  margin: 0;
  line-height: 32px;
  background: transparent
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 32px;
  height: 32px;
`;

export class PanelHeader extends React.Component<Props> {
  render() {
    const ChevronImage = this.props.localIsCollapsed ? (
      <SExpandIcon />
    ) : (
      <SCollapseIcon />
    );
    const toggleItem =
      this.props.toggleItem || (() => console.log('collapsing'));
    return (
      <SPanelHeader
        panelStyle={this.props.panelStyle || 'default'}
        collapsible={this.props.collapsible}
        onClick={toggleItem}>
        {this.props.name && <b>{this.props.name}:</b>} {this.props.title}{' '}
        {ChevronImage}
      </SPanelHeader>
    );
  }
}
