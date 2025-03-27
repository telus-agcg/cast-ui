import * as React from 'react';
// tslint:disable-next-line:max-line-length
import {
  TabPanel as ReactTabPanel,
  TabPanelProps as ReactTabPanelProps,
} from 'react-tabs';
import { Omit } from '@utils';
import { ThemeProvider } from 'styled-components';

export interface TabPanelProps extends Omit<ReactTabPanelProps, 'ref'> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

export class TabPanel extends React.Component<
  React.PropsWithChildren<TabPanelProps>
> {
  public static readonly tabsRole: string = 'TabPanel';

  constructor(props: TabPanelProps) {
    super(props);
  }

  render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <ReactTabPanel {...props}>{children}</ReactTabPanel>
      </ThemeProvider>
    );
  }
}
