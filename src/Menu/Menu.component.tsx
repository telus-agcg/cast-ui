import * as React from 'react';
import _ from 'lodash';
import { Themes } from '../themes';
import styled, { ThemeProvider } from 'styled-components';

export interface Props {
  /**
   * An array of objects.
   * Each object defines properties of each menu item.
   *
   * @default []
   **/
  items?: {
    className?: string;
    'data-testid'?: string;
    disabled?: boolean;
    to?: any;
  }[];
  /**
   * This dictates what the Menu will do on item click
   *
   * @default void
   * */
  onClick?(item: any, e: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SMenuContent = styled.div`
  padding: 8px 0;
  min-width: 140px;
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
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const MenuContent = ({ items, onClick, ...props }: Props) => (
  <SMenuContent {...props}>
    {Array.isArray(items) &&
      items.map((item: any, j: any) => (
        <SMenuItem
          {...item}
          key={j}
          onClick={(e: any) => handleItemClick(item, e, onClick)}
          data-testid={_.kebabCase(item.label)}
        >
          {item.label}
        </SMenuItem>
      ))}
  </SMenuContent>
);

const handleItemClick = (item, e, onClick) => {
  if (item.disabled) {
    return;
  }
  onClick(item, e);
};

const noop = () => {}; // tslint:disable-line

export const Menu: React.FC<Props> = ({ theme, items, onClick = noop }) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <MenuContent items={items} onClick={onClick} />
  </ThemeProvider>
);

Menu.defaultProps = {
  theme: Themes.defaultTheme,
};
