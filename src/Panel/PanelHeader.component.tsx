import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /** the content of the panel  */
  children?: React.ReactNode;
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
  /** whether the panel is collapsed or not
   *  @default 'false'
   */
  isCollapsed?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const PanelHeader = styled.div`
  background: ${(props: Props) =>
    props.theme.styles[props.panelStyle].lightFlood};
  padding: 5px 8px;
  border-bottom: 1px solid
    ${(props: Props) => props.theme.styles[props.panelStyle].borderColor};
  font-size: 20px;
  color: ${(props: Props) => props.theme.styles[props.panelStyle].text};
  &:hover {
    background: ${(props: Props) =>
      props.collapsible
        ? props.theme.styles[props.panelStyle].hoverLightFlood
        : 'auto'};
    cursor: ${(props: Props) => (props.collapsible ? 'pointer' : 'auto')};
  }
`;

export class Header extends React.Component<Props> {
  render() {
    return (
      <PanelHeader
        panelStyle={this.props.panelStyle || 'default'}
        collapsible={this.props.collapsible}
      >
        {this.props.children}
      </PanelHeader>
    );
  }
}
