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
  children?: React.ReactElement | string | null;
  content?: React.ReactElement | string | null;
  toastStyle?: ToastStyleEnum;
  size?: ToastSizeEnum;
  duration?: ToastDurationEnum;
  Close?: React.ReactElement | null;
  Dismiss?: React.ReactElement | null;
  onClose?: (id: string) => void;
  onDismiss?: (id: string) => void;
  active?: boolean,
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
  transition: transform ${props => props.duration} ease;
  &.inactive {
    transform: translateX(${props => hasPosition(PositionEnum.LEFT, props) ? '-999px' : '999px'});
  }
`;

const AlertWrapper = styled(Alert)<Partial<Props>>`
  padding: ${props => props.size === ToastSizeEnum.SMALL && '4px 8px'};
  min-width: 225px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  ${props => props.size === ToastSizeEnum.LARGE && `
    min-height: 85px;
    align-items: flex-start;
  `}
`

const CloseComponent = styled(IconButton)<Partial<Props>>`
  margin: 0 5px;
  ${props => props.size === ToastSizeEnum.LARGE && `
    position: absolute;
    top: 5px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.white}
    &:hover {
      background-color: transparent;
      border: none;
    }
  `}
`;
const DismissComponent = styled.span<Partial<Props>>`
  display: none;
  ${props => props.size === ToastSizeEnum.LARGE && `
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    color:  #0072CE;
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Toast = ({
  alertProps,
  theme,
  children,
  content,
  Close,
  Dismiss,
  active,
  className,
  size,
  toastStyle,
  onDismiss,
  onClose,
  ...props
}: Props) => {
  const onDefaultClick: any = (onDismiss && !onClose)
    ? onDismiss
    : (onClose && !onDismiss)
      ? onClose
      : undefined
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <ToastWrapper size={size} className={!active ? `${className} inactive` : className} active={active} {...props}>
        <AlertWrapper lightMode={size === ToastSizeEnum.LARGE} size={size} alertStyle={toastStyle} {...alertProps}>
          <React.Fragment>
            {children || content}
            {Close === undefined
              ? <CloseComponent toastStyle={toastStyle} size={size} btnStyle={toastStyle} icon={icTimes} onClick={onDefaultClick || onClose} />
              : Close
            }
            {size === ToastSizeEnum.LARGE && (Dismiss === undefined
                ? <DismissComponent theme={(outerTheme: any) => outerTheme || theme} toastStyle={toastStyle} size={size} onClick={onDefaultClick || onDismiss}>DISMISS</DismissComponent>
                : Dismiss
            )}
          </React.Fragment>
        </AlertWrapper>
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
