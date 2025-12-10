import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ButtonProps } from '../Button/Button.component';
import { Menu, MenuItem } from '../Menu/Menu.component';
import { KeyboardArrowDownIcon } from '@icons';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';
import { TippyProps } from '@tippyjs/react/headless';

interface StyledButtonProps {
  btnStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  btnSize?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  outline?: boolean;
  selected?: boolean;
  theme?: any;
}

export interface SplitButtonProps extends Omit<ButtonProps, 'displayType' | 'onClick'> {
  /**
   * The primary action text displayed on the main button
   */
  children: React.ReactNode;
  
  /**
   * Callback triggered when the primary button is clicked
   */
  onPrimaryClick: (e: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Array of menu items for secondary actions
   */
  menuItems: MenuItem[];
  
  /**
   * Callback triggered when a menu item is clicked
   */
  onMenuItemClick?: (item: MenuItem, e: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Button style variant
   * @default 'primary'
   */
  btnStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Button size
   * @default 'md'
   */
  btnSize?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in outline mode
   * @default false
   */
  outline?: boolean;
  
  /**
   * Theme object
   */
  theme?: any;
  
  /**
   * Specifies the parent element for rendering the Menu Popover
   */
  appendTo?: TippyProps['appendTo'];
}

const computeColor: Function = (
  btnState: string,
  selected: Boolean,
  outline: Boolean,
  btnStyle: string,
  theme: any,
) => {
  switch (true) {
    case selected === true:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case 'disabled':
          return {
            background: theme.colors.disabledText,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].disabledText,
          };
        default:
          return {
            background: theme.styles[btnStyle].selectedFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
    case outline === true:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].selectedFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].selectedFlood,
          };
        case 'disabled':
          return {
            background: theme.styles[btnStyle].disabledFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].disabledFlood,
          };
        default:
          return {
            background: theme.button.outlineBackgroundColor,
            color: theme.styles[btnStyle].flood,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
    default:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case 'disabled':
          return {
            background: theme.styles[btnStyle].disabledFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].disabledFlood,
          };
        default:
          return {
            background: theme.styles[btnStyle].flood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
  }
};

const SSplitButtonContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const SPrimaryButton = styled.button<StyledButtonProps>`
  min-width: 96px;
  box-sizing: border-box;
  transition: all 0.3s;
  border-top-left-radius: ${(props) => props.theme.button[props.btnSize!].borderRadius};
  border-bottom-left-radius: ${(props) => props.theme.button[props.btnSize!].borderRadius};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: ${(props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).background};
  border: 1px solid
    ${(props) =>
      computeColor(
        'normal',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).borderColor};
  border-right: 1px solid ${(props) => props.theme.colors.lt800};
  padding: ${(props) => props.theme.button[props.btnSize!].padding};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.button[props.btnSize!].fontSize};
  font-weight: 600;
  line-height: ${(props) => props.theme.button[props.btnSize!].lineHeight};
  color: ${(props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).color};

  outline: none !important;
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors[props.btnStyle || 'primary']};
    box-shadow: 0 0 3px
      ${(props) => props.theme.colors[props.btnStyle || 'primary']};
  }
  &:hover,
  &:active {
    background: ${(props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background};
    color: ${(props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color};
    border: 1px solid
      ${(props) =>
        computeColor(
          'hover',
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme,
        ).borderColor};
    border-right: 1px solid ${(props) => props.theme.colors.lt800};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background};
    color: ${(props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color};
    border: 1px solid
      ${(props) =>
        computeColor(
          'disabled',
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme,
        ).borderColor};
    border-right: 1px solid ${(props) => props.theme.colors.lt800};
    cursor: not-allowed;
  }
`;

const SDropdownButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  transition: all 0.3s;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: ${(props) => props.theme.button[props.btnSize!].borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.button[props.btnSize!].borderRadius};
  background: ${(props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).background};
  border: 1px solid
    ${(props) =>
      computeColor(
        'normal',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).borderColor};
  border-left: none;
  padding: ${(props) => {
    const size = props.btnSize!;
    if (size === 'sm') return '7px 8px';
    if (size === 'lg') return '10px 12px';
    return '8px 10px';
  }};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.button[props.btnSize!].fontSize};
  font-weight: 600;
  line-height: ${(props) => props.theme.button[props.btnSize!].lineHeight};
  color: ${(props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).color};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => {
    const size = props.btnSize!;
    if (size === 'sm') return '28px';
    if (size === 'lg') return '40px';
    return '32px';
  }};

  outline: none !important;
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors[props.btnStyle || 'primary']};
    box-shadow: 0 0 3px
      ${(props) => props.theme.colors[props.btnStyle || 'primary']};
  }
  &:hover,
  &:active {
    background: ${(props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background};
    color: ${(props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color};
    border: 1px solid
      ${(props) =>
        computeColor(
          'hover',
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme,
        ).borderColor};
    border-left: none;
    cursor: pointer;
  }
  &:disabled {
    background: ${(props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background};
    color: ${(props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color};
    border: 1px solid
      ${(props) =>
        computeColor(
          'disabled',
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme,
        ).borderColor};
    border-left: none;
    cursor: not-allowed;
  }
`;

const noop = () => {}; // tslint:disable-line

const defaultProps = {
  btnStyle: 'primary',
  btnSize: 'md',
  disabled: false,
  outline: false,
  theme: Themes.canopyTheme,
  onMenuItemClick: noop,
} satisfies Partial<SplitButtonProps>;

export const SplitButton: React.FC<SplitButtonProps> = (props: SplitButtonProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    theme,
    children,
    onPrimaryClick,
    menuItems,
    onMenuItemClick,
    disabled,
    btnStyle,
    btnSize,
    outline,
    appendTo,
    ...rest
  } = propsWithDefaults;

  const iconSize = btnSize === 'sm' ? 14 : btnSize === 'lg' ? 24 : 16;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSplitButtonContainer>
        <SPrimaryButton
          disabled={disabled}
          onClick={!disabled ? onPrimaryClick : noop}
          btnStyle={btnStyle}
          btnSize={btnSize}
          outline={outline}
          theme={theme}
          {...rest}
        >
          {children}
        </SPrimaryButton>
        <Menu
          items={menuItems}
          onItemClick={onMenuItemClick}
          appendTo={appendTo}
          triggerComponent={
            <SDropdownButton
              disabled={disabled}
              btnStyle={btnStyle}
              btnSize={btnSize}
              outline={outline}
              theme={theme}
              type="button"
            >
              <KeyboardArrowDownIcon width={iconSize} height={iconSize} />
            </SDropdownButton>
          }
        />
      </SSplitButtonContainer>
    </ThemeProvider>
  );
};
