import * as React from 'react';
import styled from 'styled-components';
import { TabList as ReactTabList, TabListProps } from 'react-tabs';
import { getPropsWithDefaults, Omit } from '@utils';

export interface Props
  extends React.PropsWithChildren<Omit<TabListProps, 'as'>> {
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

const defaultProps = {} satisfies Partial<Props>;

export const TabList = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, ...rest } = propsWithDefaults;
  return <SReactTabList {...rest}>{children}</SReactTabList>;
};
