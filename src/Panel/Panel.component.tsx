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
   * Set Panel Style
   *
   *  @default 'primary'
   */
  panelStyle: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const PanelWrapper = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;

const initialState = {};

type State = Readonly<typeof initialState>;

export class Panel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    panelStyle: 'primary',
    noPadding: false,
    theme: Themes.canopyTheme,
  };

  readonly state: State = initialState;

  render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <PanelWrapper {...props}>{children}</PanelWrapper>
      </ThemeProvider>
    );
  }
}

export default Panel;
