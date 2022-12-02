import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_expand_more as ICEM } from 'react-icons-kit/md/ic_expand_more';
import { Themes } from '../themes';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { Popover } from '../Popover';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Set Button Style
   *
   * @default 'primary'
   **/
  btnStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
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
    label: String;
    to?: any;
  }[];
  /**
   * This dictates what the button will do
   *
   * @default void
   * */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SPopover = styled(Popover)`
  text-align: left;
`;

const SMenuButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  & i {
    border-left: 1px solid ${(props: any) => props.theme.colors.lt800};
    margin: ${(props: any) => props.theme.button[props.btnSize!].padding};
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    padding: 3px;
  }
`;

const noop = () => {}; // tslint:disable-line

export const MenuButton: React.FC<Props> = ({
  children,
  theme,
  onClick = noop,
  items,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SPopover
      content={<Menu items={items} onClick={onClick} />}
      arrow={false}
      placement="bottom-start"
      distance={2}
      hideOnClick={true}
    >
      <span>
        <SMenuButton {...props}>
          {children}
          <Icon icon={ICEM} size={24} />
        </SMenuButton>
      </span>
    </SPopover>
  </ThemeProvider>
);

MenuButton.defaultProps = {
  theme: Themes.defaultTheme,
  btnStyle: 'primary',
  btnSize: 'md',
};
