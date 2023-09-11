import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// tslint:disable-next-line:max-line-length
import { TabPanel as ReactTabPanel, TabPanelProps } from 'react-tabs';
import { Themes } from '../themes';
import { Omit } from '../utils/castTypes';

export interface Props extends Omit<TabPanelProps, 'ref'> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

export class TabPanel extends React.Component<Props> {
  public static readonly tabsRole: string = 'TabPanel';

  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    theme: Themes.canopyTheme,
  };

  render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <ReactTabPanel {...props}>{children}</ReactTabPanel>
      </ThemeProvider>
    );
  }
}
