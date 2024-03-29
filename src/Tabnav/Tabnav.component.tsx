import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_down as ICKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import _ from 'lodash';
import { Menu } from '../Menu';

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

export type Props = {
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
};

const STabNav = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.tabnav.color};
  padding: ${(props: Props) => props.theme.tabnav.padding};
  background: ${(props: Props) => props.theme.tabnav.background};
  border-top: ${(props: Props) => props.theme.tabnav.borderTop};
  border-bottom: ${(props: Props) => props.theme.tabnav.borderBottom};
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
    tabIndex="0"
    onClick={(e: any) => handleTabClick(tab, e, onTabClick)}
    data-testid={_.kebabCase(tab.label)}
    {...tab}
  >
    {tab.label}
    {tab.children && <Icon size={24} icon={ICKAD} className="icon" />}
  </STab>
);

export const Tabnav: React.FunctionComponent<Props> = ({
  theme,
  children,
  tabs,
  onTabClick = () => {},
  popoverProps,
  tabsBarProps,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STabNav {...props}>
      <SChildren>{children}</SChildren>
      {tabs && Boolean(tabs.length) && (
        <STabsBar {...tabsBarProps}>
          {tabs.map((tab: Tab, i: any) =>
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

Tabnav.defaultProps = {
  tabs: [],
  theme: Themes.canopyTheme,
};
