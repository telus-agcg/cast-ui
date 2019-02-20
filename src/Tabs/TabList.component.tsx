import * as React from 'react';
import { TabList as ReactTabList } from 'react-tabs';
import styled from 'styled-components';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const ReactTabListProxy = ({ children, className, ...props }: any) => (
  <ReactTabList {...props} className={` ${className} react-tabs__tab`}>
    {children}
  </ReactTabList>
);

ReactTabListProxy.tabsRole = 'TabList';

const SReactTabList = styled(ReactTabListProxy)`
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
`

export class TabList extends React.Component<Props> {
  public static readonly tabsRole: string = 'TabList';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SReactTabList {...this.props}>
        {this.props.children}
      </SReactTabList>
    );
  }
}
