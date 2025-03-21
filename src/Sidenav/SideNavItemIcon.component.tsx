import * as React from 'react';
import styled from 'styled-components';
import { getPropsWithDefaults, nameSpace } from '@utils';
import { Themes } from '@themes';

export type SideNavItemIconProps = React.PropsWithChildren<{
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  isOpen?: any;
  item?: any;
}>;

const SSideNavItemIcon = styled.div<{ isOpen: boolean; item: any }>`
  height: 24px;
  :hover {
    background: ${(props) =>
      props.isOpen || props.item.disabled
        ? ''
        : props.theme.sidenav['activenavItem'].background};
    border-radius: ${(props) => (props.isOpen ? '' : '4px')};
    transition: color 0.3s;
  }
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<SideNavItemIconProps>;

export const SideNavItemIcon: React.FunctionComponent<SideNavItemIconProps> = (
  props,
) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { isOpen, item, children } = propsWithDefaults;
  return (
    <SSideNavItemIcon
      className={`${nameSpace}-sidenav-item-icon`}
      role="side-nav-icon"
      isOpen={isOpen}
      item={item}
      {...props}
    >
      {children}
      {/* {isOpen ? (
          children
        ) : (
          <Tooltip
            content={
              <span data-testid={`sidenav-item-icon-${item.label}`}>
                {item.label}
              </span>
            }
            placement="right"
          >
            <span>{children}</span>
          </Tooltip>
        )} */}
    </SSideNavItemIcon>
  );
};
