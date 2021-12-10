import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { Popover } from '../Popover';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_down as ICKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';

export type Props = {
  /**
   * The shorthand string for setting element background
   *
   * @default ''
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderTop?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderBottom?: string;
  /**
   * An array of objects.
   * Each object define properties of a each tab.
   * If an object has property children<Array>, the children
   * will automatically appear in the tab's popup view.
   *
   * @default []
   **/
  tabs?: {
    label: String;
    active?: boolean;
    disabled?: boolean;
    to?: any;
    className?: string;
    children?: {
      label: String;
      active?: boolean;
      disabled?: boolean;
      to?: any;
      className?: string;
    }[];
  }[];
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
  background: ${(props: Props) =>
    props.background || props.theme.tabnav.background};
  border-top: ${(props: Props) =>
    props.borderTop || props.theme.tabnav.borderTop};
  border-bottom: ${(props: Props) =>
    props.borderBottom || props.theme.tabnav.borderBottom};
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
  opacity: ${(props: any) =>
    props.disabled
      ? '.6'
      : props.theme.tabnav[`${props.active ? 'active' : ''}tab`].opacity};
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${(props: any) =>
      props.theme.tabnav[`${props.active ? 'active' : ''}tab`]
        .bottomBorderWidth};
    background-color: ${(props: any) =>
      props.theme.tabnav[`${props.active ? 'active' : ''}tab`]
        .bottomBorderColor};
  }
  .icon {
    margin-bottom: -6px;
    margin-right: -5px;
    color: ${(props: any) =>
      props.theme.tabnav[`${props.active ? 'active' : ''}tab`].iconColor};
  }
`;
const SPopoverContent = styled.div`
  padding: 8px 0;
  min-width: 140px;
  text-align: left;
  > * {
    cursor: pointer;
    text-decoration: none;
    padding: ${(props: any) => props.theme.tabnav.tabDropdown.padding};
    color: ${(props: any) => props.theme.tabnav.tabDropdown.color};
    background: ${(props: any) => props.theme.tabnav.tabDropdown.background};
    font-family: ${(props: any) => props.theme.typography.fontFamily};
  }
  > *:hover {
    color: ${(props: any) => props.theme.tabnav.tabDropdown.hoverColor};
    background: ${(props: any) =>
      props.theme.tabnav.tabDropdown.hoverBackground};
  }
`;

const SPopoverItem = styled.div`
  opacity: ${(props: any) =>
    props.disabled
      ? '.6'
      : props.theme.tabnav[`${props.active ? 'active' : ''}tab`].opacity};
`;

const PopoverContent = ({ tab, onTabClick, ...props }: any) => (
  <SPopoverContent {...props}>
    {tab.children.length > 0 &&
      tab.children.map((childTab: any, j: any) => (
        <SPopoverItem
          key={j}
          onClick={(e: any) => handleTabClick(childTab, e, onTabClick)}
          {...childTab}
        >
          {childTab.label}
        </SPopoverItem>
      ))}
  </SPopoverContent>
);

const handleTabClick = (tab, e, onTabClick) => {
  if (tab.disabled) {
    return;
  }
  onTabClick(tab, e);
};

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
      {tabs && (
        <STabsBar {...tabsBarProps}>
          {tabs.map((tab: any, i: any) => (
            <Popover
              content={
                tab.children ? (
                  <PopoverContent tab={tab} onTabClick={onTabClick} />
                ) : (
                  ''
                )
              }
              arrow={false}
              placement="bottom-start"
              key={i}
              {...popoverProps}
            >
              <STab
                role="tab"
                tabIndex="0"
                onClick={(e: any) => handleTabClick(tab, e, onTabClick)}
                {...tab}
              >
                {tab.label}
                {tab.children && (
                  <Icon size={24} icon={ICKAD} className="icon" />
                )}
              </STab>
            </Popover>
          ))}
        </STabsBar>
      )}
    </STabNav>
  </ThemeProvider>
);

Tabnav.defaultProps = {
  tabs: [],
  theme: Themes.defaultTheme,
};
