import * as React from 'react';
// tslint:disable-next-line:max-line-length
import { TabPanel as ReactTabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export class TabPanel extends React.Component<Props> {
  public static readonly tabsRole: string = 'TabPanel';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ReactTabPanel {...this.props}>
        {this.props.children}
      </ReactTabPanel>
    );
  }
}
