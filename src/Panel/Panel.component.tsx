import * as React from 'react';
import styled from 'styled-components';
import { PanelHeader } from './PanelHeader.component';

type Props = {
  /**
   * The content of the panel
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
   * 'default', 'primary', 'success', 'warning', 'danger'
   *
   *  @default 'default'
   */
  panelStyle: string;
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
  /** Whether the panel has padding or not
   *
   *  @default 'false'
   */
  noPadding?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const PanelWrapper = styled.div`
  border: ${(props: Props) =>
    `${props.theme.borders.width} solid ${props.theme.styles[props.panelStyle]
      .borderColor || '#eee'}`};
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;

const PanelBody = styled.div`
  color: ${(props: Props) => props.theme.styles[props.panelStyle].text};
  background: ${(props: Props) => props.theme.panel.body.background};
  padding: ${(props: Props) =>
    props.noPadding ? '0' : props.theme.panel.body.padding};
  overflow: hidden;
  height: auto;
  font-size: 14px;
  opacity: ${(props: Props) => 1};
  transition: all 300ms ease-in-out;
`;

const initialState = {
  isCollapsed: false,
};
type State = Readonly<typeof initialState>;

export class Panel extends React.Component<Props, State> {
  static Header: React.Component;
  static Body: React.Component;
  private bodyRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.bodyRef = React.createRef();
    this.handleToggleCollapse.bind(this);
  }

  readonly state: State = initialState;
  localIsCollapsed: boolean = false;

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.isCollapsed !== nextProps.isCollapsed) {
      this.localIsCollapsed = !!nextProps.isCollapsed;
      this.handleToggleCollapse();
    }
  }

  handleToggleCollapse() {
    if (this.bodyRef.current && (this.props.collapsible || false)) {
      this.localIsCollapsed
        ? collapseSection(this.bodyRef.current)
        : expandSection(this.bodyRef.current);
    }

    this.setState({
      isCollapsed: this.localIsCollapsed && (this.props.collapsible || false),
    });
  }

  toggleItem() {
    this.localIsCollapsed = !this.localIsCollapsed;
    this.handleToggleCollapse();
  }

  render() {
    return (
      <PanelWrapper panelStyle={this.props.panelStyle} theme={this.props.theme}>
        <PanelHeader
          panelStyle={this.props.panelStyle}
          collapsible={this.props.collapsible}
          toggleItem={() => {
            this.toggleItem();
          }}
          name={this.props.name}
          title={this.props.title}
          localIsCollapsed={this.localIsCollapsed}
          theme={this.props.theme}
        />
        <PanelBody
          panelStyle={this.props.panelStyle}
          noPadding={this.props.noPadding}
          isCollapsed={this.localIsCollapsed}
          ref={this.bodyRef}
          theme={this.props.theme}>
          {this.props.children}
        </PanelBody>
      </PanelWrapper>
    );
  }
}

const collapseSection = (element: HTMLElement | null) => {
  if (element !== null) {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(() => {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(() => {
        element.style.height = '0px';
        element.style.padding = '0 28px';
        element.style.opacity = '0';
      });
    });
  }
};

const expandSection = (element: HTMLElement) => {
  const sectionHeight = element.scrollHeight;
  element.style.height = `${sectionHeight}px`;
  element.style.padding = '20px 28px';
  element.style.opacity = '1';
};
