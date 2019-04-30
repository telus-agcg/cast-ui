import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { Popover } from '../Popover';
import { Icon } from 'react-icons-kit';
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
   * Adjust Tabnav height.
   *
   * @default '110px'
   **/
  height?: string;
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
    children?: {
      label: String;
      active?: boolean;
      disabled?: boolean;
      to?: any;
    }[];
  }[];
  /**
   * Handle tab click events.
   *
   * @default void
   **/
  onTabClick?(tab: any, event: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const STabBar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.tabnav.color};
  height: ${(props: Props) => props.height || props.theme.tabnav.height};
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
const STabsnav = styled.div`
  display: flex;
  align-items: center;
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
    color: ${(props: any) =>
      props.theme.tabnav[`${props.active ? 'active' : ''}tab`].iconColor};
  }
`;
const SPopoverContent = styled.div`
  padding: 24px 12px 12px;
`;

const PopoverContent = ({ tab, onTabClick }: any) => (
  <SPopoverContent>
    {tab.children.length > 0 &&
      tab.children.map((childTab: any, j: any) => (
        <div
          key={j}
          onClick={(e: any) => onTabClick(childTab, e)}
          {...childTab}
        >
          {childTab.label}
        </div>
      ))}
  </SPopoverContent>
);

export const Tabnav: React.FunctionComponent<Props> = ({
  theme,
  children,
  tabs,
  onTabClick = () => {},
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STabBar {...props}>
      <SChildren>{children}</SChildren>
      {tabs && (
        <STabsnav>
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
            >
              <STab onClick={(e: any) => onTabClick(tab, e)} {...tab}>
                {tab.label}
                {tab.children && (
                  <Icon size={24} icon={ICKAD} className="icon" />
                )}
              </STab>
            </Popover>
          ))}
        </STabsnav>
      )}
    </STabBar>
  </ThemeProvider>
);

Tabnav.defaultProps = {
  borderTop: '',
  borderBottom: '',
  tabs: [],
  theme: Themes.defaultTheme,
};
