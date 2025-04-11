import * as React from 'react';
import _ from 'lodash';
import styled, { ThemeProvider } from 'styled-components';
// import { Popover } from '../Popover/Popover.component';
import { HeadlessPopover as Popover } from '../HeadlessPopover/HeadlessPopover.component';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface MenuItem {
  disabled?: boolean;
  id?: any;
  label?: string;
  component?: any;
  icon?: any;
}

export interface MenuProps {
  /**
   * An array of `MenuItem`.
   * Each `MenuItem` can contain the following properties:
   * - `disabled` (boolean),  *optional*
   * - `id` (any),  *optional*
   * - `label` (string), *optional*
   * - `component` (string), *optional*
   *
   * @default []
   **/
  items?: MenuItem[];
  /**
   * Callback that's triggered when an item is clicked. Returns the original `MenuItem` and the `event` object.
   *
   * @default void
   * */
  onItemClick?(item: MenuItem, e: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * A Component, such as a `Link` or `Button`, that triggers the menu's display.
   *
   * @default undefined
   **/
  triggerComponent: React.ReactElement;
}

const SMenu = styled.div`
  padding: 8px 0;
  min-width: 140px;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  cursor: pointer;
`;

const SPopover = styled(Popover)`
  text-align: left;
`;

const SMenuItem = styled.div`
  opacity: ${(props: any) => (props.disabled ? '.6' : '1')};
  text-align: left;
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  padding: 8px 16px;
  color: ${(props: any) => props.theme.select.color};
  background: ${(props: any) => props.theme.select.optionBackgroundColor};
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props: any) => props.theme.select.highlightOptionColor};
    background: ${(props: any) =>
      props.theme.select.highlightOptionBackgroundColor};
  }
`;

interface MenuItemLabelProps {
  itemsHasNonEmptyIcon: boolean;
  hasIcon: boolean;
}

const MenuItemLabel = styled.span<MenuItemLabelProps>`
  padding-left: 4px;
  margin-left: ${(props) =>
    props.itemsHasNonEmptyIcon ? (props.hasIcon ? '0px' : '24px') : '0px'};
`;

const noop = () => {}; // tslint:disable-line

const defaultProps = {
  onItemClick: noop,
  items: [],
  theme: Themes.canopyTheme,
} satisfies Partial<MenuProps>;

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [popoverInstance, setPopoverInstance] = React.useState(null);
  const closePopoverMenu = () => {
    // @ts-ignore
    popoverInstance && popoverInstance.hide();
  };
  const { theme, items, onItemClick, triggerComponent, ...rest } =
    propsWithDefaults;
  const hasNonEmptyIcon = items?.some((item) => {
    return item.hasOwnProperty('icon') && item['icon'] !== '';
  });
  const handleItemClick = (item, e) => {
    if (item.disabled) {
      return;
    }
    closePopoverMenu();
    onItemClick && onItemClick(item, e);
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SPopover
        content={
          <SMenu {...rest}>
            {Array.isArray(items) &&
              items.map((item: MenuItem, j: number) => {
                if (item.component) return item.component;
                return (
                  <SMenuItem
                    {...item}
                    theme={theme}
                    key={j}
                    onClick={(e: any) => handleItemClick(item, e)}
                    data-testid={_.kebabCase(item.label)}
                  >
                    {item.icon && item.icon}
                    <MenuItemLabel
                      itemsHasNonEmptyIcon={Boolean(hasNonEmptyIcon)}
                      hasIcon={item.icon ? true : false}
                    >
                      {item.label}
                    </MenuItemLabel>
                  </SMenuItem>
                );
              })}
          </SMenu>
        }
        arrow={false}
        placement="bottom-start"
        hideOnClick={true}
        onMount={(instance: any) => setPopoverInstance(instance)}
        displayType="menu"
      >
        <span>{triggerComponent}</span>
      </SPopover>
    </ThemeProvider>
  );
};
