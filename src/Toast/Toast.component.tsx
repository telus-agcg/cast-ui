import * as React from 'react';
import { ic_close as icTimes } from 'react-icons-kit/md/ic_close'
import Alert, { AlertProps } from '../Alert';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton } from '../IconButton/';

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
  Close?: React.ReactElement;
  Dismiss?: React.ReactElement;
  onClose?: (id: string) => void;
  onDismiss?: (id: string) => void;
  active: boolean,
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

const getPosition = (position: string, props: Partial<Props>) => {
  return hasPosition(position, props)
    ? props.theme.toast.position[position] || '20px'
    : 'unset';
}

const ToastWrapper = styled.div<Partial<Props>>`
  top: ${props =>
    hasPosition(PositionEnum.TOP, props)
      ? props.theme.toast.position.top || '20px'
      : 'unset'};
  bottom: ${props =>
    hasPosition(PositionEnum.BOTTOM, props)
      ? props.theme.toast.position.bottom || '20px'
      : 'unset'};
  position: ${props =>
    (hasPosition(PositionType.ABSOLUTE, props) && PositionType.ABSOLUTE) ||
    (hasPosition(PositionType.FIXED, props) && PositionType.FIXED) ||
    PositionType.FIXED};
  left: ${props => getPosition(PositionEnum.LEFT, props)};
  right: ${props => getPosition(PositionEnum.RIGHT, props)};
  transition: transform 0.3s ease;
  &.inactive {
    transform: translateX(${props => hasPosition(PositionEnum.LEFT, props) ? '-999px' : '999px'});
  }
`;

const CloseComponent = styled(IconButton)<Partial<Props>>``;
const DismissComponent = styled.span<Partial<Props>>``;

export const Toast = ({
    alertProps,
    theme,
    children,
    Close,
    Dismiss,
    active,
    className,
    ...props
  }: Props) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <ToastWrapper className={!active ? `${className} inactive` : className} active={active} {...props}>
        <Alert {...alertProps}>
          {children}
          {Close === undefined
            ? <CloseComponent icon={icTimes} />
            : Close
          }
          {Dismiss === undefined
            ? <DismissComponent>Dismiss</DismissComponent>
            : Dismiss
          }
        </Alert>
      </ToastWrapper>
    </ThemeProvider>
  );
};

Toast.defaultProps = {
  position: 'top right',
  toastStyle: ToastStyleEnum.PRIMARY,
  size: ToastSizeEnum.SMALL,
  duration: ToastDurationEnum.SHORT,
  active: false,
  className: '',
};
