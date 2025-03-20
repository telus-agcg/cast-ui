import * as React from 'react';
import { TabList as ReactTabList, TabListProps } from 'react-tabs';
import styled from 'styled-components';
import { Omit } from '@utils';

export interface Props extends Omit<TabListProps, 'as'> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const ReactTabListProxy = ({ children, className, ...props }: any) => (
  <ReactTabList {...props} className={` ${className} react-tabs__tab`}>
    {children}
  </ReactTabList>
);

ReactTabListProxy.tabsRole = 'TabList';

const SReactTabList = styled(ReactTabListProxy)`
  border-bottom: 1px solid #aaa;
  margin: 0;
  padding: 0 0 1px;
  width: fit-content;
`;

export class TabList extends React.Component<React.PropsWithChildren<Props>> {
  public static readonly tabsRole: string = 'TabList';

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { theme, children, ...props } = this.props;
    return <SReactTabList {...props}>{children}</SReactTabList>;
  }
}
