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
    label: String;
    disabled?: boolean;
    to?: any;
    className?: string;
    'data-testid'?: string;
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

export class MenuButton extends React.Component<Props, any> {
  static defaultProps = {
    theme: Themes.defaultTheme,
    btnStyle: 'primary',
    btnSize: 'md',
  };
  render() {
    const { children, theme, onClick = noop, items, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <Popover
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
        </Popover>
      </ThemeProvider>
    );
  }
}
