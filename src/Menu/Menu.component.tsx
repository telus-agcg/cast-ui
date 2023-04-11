import * as React from 'react';
import _ from 'lodash';
import { Themes } from '../themes';
import styled, { ThemeProvider } from 'styled-components';

export interface MenuItem {
  disabled?: boolean;
  id?: any;
  label: string;
}

export interface Props {
  /**
   * An array of MenuItems.
   * Each object defines properties of each menu item.
   *
   * @default []
   **/
  items?: MenuItem[];
  /**
   * This dictates what the Menu will do on item click
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

const SMenuItem = styled.div`
  opacity: ${(props: any) => (props.disabled ? '.6' : '1')};
  text-align: left;
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const noop = () => {}; // tslint:disable-line

export const Menu: React.FC<Props> = ({
  theme,
  items,
  onItemClick = noop,
  ...props
}) => {
  const handleItemClick = (item, e) => {
    if (item.disabled) {
      return;
    }
    onItemClick(item, e);
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
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
    </ThemeProvider>
  );
};

Menu.defaultProps = {
  theme: Themes.defaultTheme,
};
