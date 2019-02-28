import * as React from 'react';
import styled from 'styled-components';
import PanelHeader from './PanelHeader.component';

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
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'panelBackground'
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

const PanelWrapper = styled.div`
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;

const PanelBody = styled.div`
  background: ${(props: Props) =>
    props.theme.colors[props.bodyBackgroundColor!] ||
    props.bodyBackgroundColor};
  border: ${(props: Props) =>
    `${props.theme.panel.borderWidth} solid
    ${props.theme.colors[props.bodyBorderColor!] || props.bodyBorderColor}`};
  border-top: none;
  padding: ${(props: Props) =>
    props.noPadding ? '0' : props.theme.panel.body.padding};
  overflow: hidden;
  height: auto;
  transition: all 300ms ease-in-out;
`;

const initialState = {
  isCollapsed: false,
};
type State = Readonly<typeof initialState>;

class Panel extends React.Component<Props, State> {
  static Header: React.Component;
  static Body: React.Component;
  private headerRef: React.RefObject<HTMLDivElement>;
  private bodyRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.headerRef = React.createRef();
    this.bodyRef = React.createRef();
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }

  static defaultProps = {
    panelStyle: 'default',
    noPadding: false,
    headerColor: 'primary',
    headerBackgroundColor: 'white',
    headerBorderColor: 'lightGray',
    bodyBackgroundColor: 'panelBackground',
    bodyBorderColor: 'lightGray',
  };

  readonly state: State = initialState;
  localIsCollapsed: boolean = false;

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.isCollapsed !== nextProps.isCollapsed) {
      const header: any = this.headerRef.current;
      header.click();
    }
  }

  handleToggleCollapse(theme: any) {
    const { collapsible, noPadding } = this.props;
    if (this.bodyRef.current && (collapsible || false)) {
      this.localIsCollapsed
        ? collapseSection(this.bodyRef.current, theme, noPadding || false)
        : expandSection(this.bodyRef.current, theme, noPadding || false);
    }

    this.setState({
      isCollapsed: this.localIsCollapsed && (collapsible || false),
    });
  }

  toggleItem(e: any, theme: any) {
    this.localIsCollapsed = !this.localIsCollapsed;
    this.handleToggleCollapse(theme);
  }

  render() {
    return (
      <PanelWrapper panelStyle={this.props.panelStyle} theme={this.props.theme}>
        <PanelHeader
          panelStyle={this.props.panelStyle}
          headerColor={this.props.headerColor}
          headerBackgroundColor={this.props.headerBackgroundColor}
          headerBorderColor={this.props.headerBorderColor}
          collapsible={this.props.collapsible}
          toggleItem={this.toggleItem}
          name={this.props.name}
          title={this.props.title}
          localIsCollapsed={this.localIsCollapsed}
          headerRef={this.headerRef}
          theme={this.props.theme}
        />
        <PanelBody
          panelStyle={this.props.panelStyle}
          bodyBackgroundColor={this.props.bodyBackgroundColor}
          bodyBorderColor={this.props.bodyBorderColor}
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

const collapseSection = (
  element: HTMLElement | null,
  theme: any,
  noPadding: boolean,
) => {
  if (element !== null) {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(() => {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(() => {
        element.style.height = '0px';
        element.style.padding = noPadding
          ? '0px'
          : `0px ${theme.panel.body.padding.toString().split(' ')[1]}`;
        element.style.opacity = '0';
      });
    });
  }
};

const expandSection = (
  element: HTMLElement,
  theme: any,
  noPadding: boolean,
) => {
  const sectionHeight = element.scrollHeight;
  element.style.height = `${sectionHeight}px`;
  element.style.padding = noPadding ? '0px' : theme.panel.body.padding;
  element.style.opacity = '1';
};

export default Panel;
