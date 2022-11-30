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
    label: String;
    active?: boolean;
    disabled?: boolean;
    to?: any;
    className?: string;
    'data-testid'?: string;
  }[];
  /**
   * This dictates what the Menu will do on click
   *
   * @default void
   * */
  onClick?(tab: any, event: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const noop = () => {}; // tslint:disable-line

const SMenuContent = styled.div`
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

const SMenuItem = styled.div`
  opacity: ${(props: any) =>
    props.disabled
      ? '.6'
      : props.theme.tabnav[`${props.active ? 'active' : ''}tab`].opacity};
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const MenuContent = ({ items, onItemClick, ...props }: any) => (
  <SMenuContent {...props}>
    {items.length > 0 &&
      items.map((item: any, j: any) => (
        <SMenuItem
          key={j}
          onClick={(e: any) => handleItemClick(item, e, onItemClick)}
          data-testid={_.kebabCase(item.label)}
          {...item}
        >
          {item.label}
        </SMenuItem>
      ))}
  </SMenuContent>
);

const handleItemClick = (item, e, onItemClick) => {
  if (item.disabled) {
    return;
  }
  onItemClick(item, e);
};

export class Menu extends React.Component<Props, any> {
  static defaultProps = {
    theme: Themes.defaultTheme,
  };
  render() {
    const { theme, items, onClick = noop } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <MenuContent items={items} onItemClick={onClick} />
      </ThemeProvider>
    );
  }
}
