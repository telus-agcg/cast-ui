import * as React from 'react';
import _ from 'lodash';
import { Themes } from '../themes';
import styled, { ThemeProvider } from 'styled-components';
import { Popover } from '../Popover';

export interface MenuItem {
  disabled?: boolean;
  id?: any;
  label: string;
}

export interface Props {
  /**
   * An array of `MenuItem`.
   * Each `MenuItem` can contain the following properties:
   * - `disabled` (boolean),  *optional*
   * - `id` (any),  *optional*
   * - `label` (string), **required**
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
   * Optional component, such as a `Link` or `Button`, that triggers the menu's display.
   *
   * @default []
   **/
  triggerComponent?: React.ReactElement;
}

const SMenu = styled.div`
  padding: 8px 0;
  min-width: 140px;
  border: 1px solid ${(props: any) => props.theme.select.borderColor};
  > * {
    cursor: pointer;
    text-decoration: none;
    padding: 8px 16px;
    color: ${(props: any) => props.theme.select.color};
    background: ${(props: any) => props.theme.select.optionBackgroundColor};
    font-family: ${(props: any) => props.theme.typography.fontFamily};
  }
  > *:hover {
    color: ${(props: any) => props.theme.select.highlightOptionColor};
    background: ${(props: any) =>
      props.theme.select.highlightOptionBackgroundColor};
  }
`;

const SPopover = styled(Popover)`
  text-align: left;
`;

const SMenuItem = styled.div`
  opacity: ${(props: any) => (props.disabled ? '.6' : '1')};
  text-align: left;
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const noop = () => {}; // tslint:disable-line

export const Menu: React.FC<Props> = ({
  triggerComponent,
  theme,
  items,
  onItemClick = noop,
  ...props
}) => {
  const [popoverInstance, setPopoverInstance] = React.useState(null);
  const closePopoverMenu = () => {
    // @ts-ignore
    popoverInstance && popoverInstance.hide();
  };

  const handleItemClick = (item, e) => {
    if (item.disabled) {
      return;
    }
    closePopoverMenu();
    onItemClick(item, e);
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SPopover
        content={
          <SMenu {...props}>
            {Array.isArray(items) &&
              items.map((item: MenuItem, j: number) => (
                <SMenuItem
                  {...item}
                  key={j}
                  onClick={(e: any) => handleItemClick(item, e)}
                  data-testid={_.kebabCase(item.label)}
                >
                  {item.label}
                </SMenuItem>
              ))}
          </SMenu>
        }
        arrow={false}
        placement="bottom-start"
        distance={2}
        hideOnClick={true}
        onMount={(instance: any) => setPopoverInstance(instance)}
      >
        <span>{triggerComponent}</span>
      </SPopover>
    </ThemeProvider>
  );
};

Menu.defaultProps = {
  theme: Themes.defaultTheme,
};
