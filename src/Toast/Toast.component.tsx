import * as React from 'react';
import Alert, { AlertProps } from '../Alert';
import styled, { ThemeProvider } from 'styled-components';

export enum PositionEnum {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
};

export enum PositionType {
  ABSOLUTE = 'absolute',
  FIXED = 'fixed',
};

export enum ToastStyleEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
};

export enum ToastSizeEnum {
  LARGE = 'lg',
  SMALL = 'sm',
};

export enum ToastDurationEnum {
  SHORT = '5s',
  LONG = '2.5s',
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  alertProps?: AlertProps;
  position?: string;
  children: React.ReactChild;
  toastStyle?: ToastStyleEnum;
  size?: ToastSizeEnum;
  duration?: ToastDurationEnum;
  close?: React.ReactChild | null;
  dismiss?: React.ReactChild | null;
  onClose: (id: string) => void;
  onDismiss: (id: string) => void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const calcPosition = (position: string): string[] => position.split(' ');

const hasPosition = (position: string, props: Partial<Props>) =>
  calcPosition(props.position!).includes(position);

const ToastWrapper = styled.div<Partial<Props>>`
  position: fixed;
  top: ${props =>
    hasPosition(PositionEnum.TOP, props)
      ? /* props.theme.toast.position.top */ '20px'
      : 'unset'};
  left: ${props =>
    hasPosition(PositionEnum.LEFT, props)
      ? /* props.theme.toast.position.left */ '20px'
      : 'unset'};
  right: ${props =>
    hasPosition(PositionEnum.RIGHT, props)
      ? /* props.theme.toast.position.right */ '20px'
      : 'unset'};
  bottom: ${props =>
    hasPosition(PositionEnum.BOTTOM, props)
      ? /* props.theme.toast.position.bottom */ '20px'
      : 'unset'};
  position: ${props =>
    (hasPosition(PositionType.ABSOLUTE, props) && PositionType.ABSOLUTE) ||
    (hasPosition(PositionType.FIXED, props) && PositionType.FIXED) ||
    PositionType.FIXED};
`;

export const Toast = ({ alertProps, theme, children, ...props }: Props) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <ToastWrapper {...props}>
        <Alert {...alertProps}>{children}</Alert>
      </ToastWrapper>
    </ThemeProvider>
  );
};

Toast.defaultProps = {
  position: 'top right',
  toastStyle: ToastStyleEnum.PRIMARY,
  size: ToastSizeEnum.SMALL,
  duration: ToastDurationEnum.SHORT,
};
