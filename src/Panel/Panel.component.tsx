import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
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
   * Set header color. A CSS color code
   *
   * @default 'primary'
   **/
  headerColor?: string;
  /**
   * Set header background color. A CSS color code
   *
   * @default ''
   **/
  headerBackgroundColor?: string;
  /**
   * Set header border color. A CSS color code
   *
   * @default ''
   **/
  headerBorderColor?: string;
  /**
   * Set Panel Style
   *
   *  @default 'primary'
   */
  panelStyle: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
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
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  bodyRef?: any;
  headerRef?: any;
};

const PanelWrapper = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;

const initialState = {
  isCollapsed: false,
};
type State = Readonly<typeof initialState>;

export class Panel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    panelStyle: 'default',
    noPadding: false,
    theme: Themes.defaultTheme,
  };

  readonly state: State = initialState;

  render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <PanelWrapper panelStyle={props.panelStyle}>{children}</PanelWrapper>
      </ThemeProvider>
    );
  }
}

export default Panel;
