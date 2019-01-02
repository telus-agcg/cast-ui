import * as React from 'react';
import { TabList as ReactTabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export class TabList extends React.Component<Props> {
  public static readonly tabsRole: string = 'TabList';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ReactTabList {...this.props}>
        {this.props.children}
      </ReactTabList>
    );
  }
}
