import * as React from 'react';
// tslint:disable-next-line:max-line-length
import { TabPanel as ReactTabPanel, TabPanelProps } from 'react-tabs';
import { Omit } from '@utils';

export interface Props extends Omit<TabPanelProps, 'ref'> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

export class TabPanel extends React.Component<React.PropsWithChildren<Props>> {
  public static readonly tabsRole: string = 'TabPanel';

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { theme, children, ...props } = this.props;
    return <ReactTabPanel {...props}>{children}</ReactTabPanel>;
  }
}
