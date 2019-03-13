import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set SideNavItem as active
   *
   * @default false
   **/
  active?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItem = styled.div`
  float: left;
  list-style: none;
  width: 100%;
  height: auto;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: ${(props: Props) => (props.active ? '4px' : '0')};
    background-color: blue;
    height: 100%;
    position: absolute;
    top: 0;
    let: 0;
  }
`;

export const SideNavItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItem {...props}>{children}</SSideNavItem>;

SideNavItem.defaultProps = {
  active: false,
};
