import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from 'react-icons-kit';
import Button, { ButtonProps } from '../Button';
import { Themes } from '../themes';

export interface Props extends ButtonProps {
  /**
   * Set button icon
   *
   * @default null
   **/
  icon?: React.ComponentType<any>;
  /**
   * Set button size in pixels
   *
   * @default '38'
   **/
  pixelButtonSize?: number;
  /**
   * Set Icon size
   *
   * @default '28'
   **/
  iconSize?: number;
  /**
   * Specify if the button is rounded
   *
   * @default true
   **/
  rounded?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SIconButton = styled(Button)`
  position: relative;
  border-radius: ${(props: any) =>
    props.rounded ? '50%' : props.theme.button[props.btnSize].borderRadius};
  min-width: ${(props: any) =>
    props.rounded || !props.rounded ? '10px' : '75px'};
  width: ${(props: any) =>
    props.rounded ? `${props.pixelButtonSize}px` : 'auto'};
  height: ${(props: any) =>
    props.rounded ? `${props.pixelButtonSize}px` : 'auto'};
  padding: ${(props: any) =>
    props.rounded ? '0' : props.theme.common[props.btnSize].padding};
  outline: none;
`;

export const IconButton: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SIconButton {...props}>
      {props.icon && <Icon icon={props.icon} size={props.iconSize} />}
      {props.children}
    </SIconButton>
  </ThemeProvider>
);

IconButton.defaultProps = {
  theme: Themes.canopyTheme,
  pixelButtonSize: 32,
  iconSize: 24,
  rounded: true,
  btnSize: 'md',
};
