import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_expand_more as ICEM } from 'react-icons-kit/md/ic_expand_more';
import { Themes } from '../themes';
import { Button, ButtonProps } from '../Button';
import { Menu, MenuItem } from '../Menu';

export interface Props extends ButtonProps {
  /**
   * An array of MenuItems.
   * Each object defines properties of each menu item.
   *
   * @default []
   **/
  items?: MenuItem[];
  /**
   * Called when an item is clicked
   *
   * @default void
   * */
  onItemClick?(item: any): void;
}

const SMenuButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
`;

const SIcon = styled(Icon)`
  border-left: 1px solid ${(props: any) => props.theme.colors.lt800};
  margin: ${(props: any) => props.theme.button[props.btnSize!].padding};
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  padding: 3px;
`;

const noop = () => {}; // tslint:disable-line

export const MenuButton: React.FC<Props> = ({
  children,
  theme,
  onItemClick = noop,
  items,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <Menu
      items={items}
      onItemClick={onItemClick}
      triggerComponent={
        <SMenuButton>
          {children}
          <SIcon {...props} icon={ICEM} size={24} />
        </SMenuButton>
      }
    />
  </ThemeProvider>
);

MenuButton.defaultProps = {
  theme: Themes.defaultTheme,
  btnStyle: 'primary',
  btnSize: 'md',
};
