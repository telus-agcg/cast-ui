import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { KeyboardArrowDownIcon } from '@icons';
import { getPropsWithDefaults } from '@utils';
import { Menu } from '../Menu/Menu.component';
import { Themes } from '@themes';

export type Tab = {
  label: string;
  active?: boolean;
  disabled?: boolean;
  to?: any;
  className?: string;
  'data-testid'?: string;
  children?: {
    label: string;
    disabled?: boolean;
    to?: any;
    className?: string;
    'data-testid'?: string;
  }[];
};

export type TabnavProps = React.PropsWithChildren<{
  /**
   * An array of objects.
   * Each object defines properties of each tab.
   * If an object has property children<Array>, the children
   * will automatically appear in the tab's popup view.
   *
   * @default []
   **/
  tabs?: Tab[];
  /**
   * Handle tab click events.
   *
   * @default void
   **/
  onTabClick?(tab: any, event: React.MouseEvent<HTMLElement>): void;
  /**
   * Override default options for the Tabs' Popovers.
   * See Cast-UI's Popover for options list.
   *
   * @default null
   **/
  popoverProps?: Object;
  /**
   * Override default options for the Tabs' bar.
   *
   * @default null
   **/
  tabsBarProps?: Object;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const STabNav = styled.div<TabnavProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.tabnav.color};
  padding: ${(props) => props.theme.tabnav.padding};
  background: ${(props) => props.theme.tabnav.background};
  border-top: ${(props) => props.theme.tabnav.borderTop};
  border-bottom: ${(props) => props.theme.tabnav.borderBottom};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SChildren = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
`;

const STabsBar = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  padding: 5px 0px;
`;

const STab = styled.div`
  outline: none;
  position: relative;
  padding: ${(props: any) => props.theme.tabnav.tab.padding};
  margin: ${(props: any) => props.theme.tabnav.tab.margin};
  transition: ${(props: any) => props.theme.tabnav.tab.transition};
  color: ${(props: any) =>
    props.theme.tabnav[`${props.active ? 'active' : ''}tab`].color};
  font-weight: ${(props: any) =>
    props.theme.tabnav[`${props.active ? 'active' : ''}tab`].fontWeight};
  cursor: ${(props: any) =>
    props.disabled
      ? 'not-allowed'
      : props.theme.tabnav[`${props.active ? 'active' : ''}tab`].cursor};
  background: ${(props: any) =>
    props.theme.tabnav[`${props.active ? 'active' : ''}tab`].background};
  border-radius: 20px;
  opacity: ${(props: any) =>
    props.disabled
      ? '.6'
      : props.theme.tabnav[`${props.active ? 'active' : ''}tab`].opacity};
  .icon {
    margin-bottom: -6px;
    margin-right: -5px;
    color: ${(props: any) =>
      props.theme.tabnav[`${props.active ? 'active' : ''}tab`].iconColor};
  }
  &:hover {
    background-color: ${(props: any) =>
      props.active
        ? props.theme.colors.primaryHover
        : props.theme.colors.primaryBackground};
  }
  transition: all 0.3s;
`;

const handleTabClick = (tab: Tab, e, onTabClick) => {
  if (tab.disabled) {
    return;
  }
  onTabClick(tab, e);
};

const Tab = ({ tab, onTabClick }: { tab: Tab; onTabClick: any }) => (
  <STab
    role="tab"
    onClick={(e: any) => handleTabClick(tab, e, onTabClick)}
    data-testid={_.kebabCase(tab.label)}
    {...tab}
  >
    {tab.label}
    {tab.children && (
      <KeyboardArrowDownIcon height={24} width={24} className="icon" />
    )}
  </STab>
);

const defaultProps = {
  tabs: [],
  theme: Themes.canopyTheme,
} satisfies Partial<TabnavProps>;

export const Tabnav: React.FunctionComponent<TabnavProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, tabs, tabsBarProps, onTabClick, ...rest } =
    propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <STabNav {...rest}>
        <SChildren>{children}</SChildren>
        {tabs && Boolean(tabs.length) && (
          <STabsBar {...tabsBarProps}>
            {tabs.map((tab: Tab, _i: any) =>
              tab.children ? (
                <Menu
                  items={tab.children}
                  onItemClick={onTabClick}
                  triggerComponent={<Tab tab={tab} onTabClick={onTabClick} />}
                />
              ) : (
                <Tab tab={tab} onTabClick={onTabClick} />
              ),
            )}
          </STabsBar>
        )}
      </STabNav>
    </ThemeProvider>
  );
};
