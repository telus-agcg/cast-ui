import * as React from 'react';
import Alert, { AlertProps } from '../Alert';
import styled, { ThemeProvider } from 'styled-components';

export enum PositionEnum {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum PositionType {
  ABSOLUTE = 'absolute',
  FIXED = 'fixed',
}

export enum ToastStyleEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export enum ToastDurationEnum {
  SHORT = '1s',
  LONG = '2.5s',
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for base of Toast
   */
  alertProps?: AlertProps;
  /**
   * Position for separated Toast
   */
  position?: string;
  /**
   * children elements
   */
  children?: React.ReactElement | string | null;
  /**
   * Content if Toast created as object
   */
  content?: React.ReactElement | string | null;
  /**
   * styling for Toast
   */
  toastStyle?: ToastStyleEnum;
  /**
   * duration for hiding and showing toast
   */
  duration?: ToastDurationEnum;
  /**
   * Toggle lightMode
   */
  lightMode?: boolean;
  /**
   * is Toast visible
   */
  active?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * ClassName
   *
   * @default defaultTheme
   **/
  className?: any;
}

const calcPosition = (position: string): string[] => position.split(' ');

const hasPosition = (position: string, props: Partial<Props>) =>
  calcPosition(props.position!).includes(position);

const getPosition = (position: string, props: Partial<Props>) => {
  return hasPosition(position, props)
    ? props.theme.toast.position[position] || '20px'
    : 'unset';
};

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
    transform: translateX(
      ${props => (hasPosition(PositionEnum.LEFT, props) ? '-999px' : '999px')}
    );
  }
`;

const AlertWrapper = styled(Alert)<Partial<Props>>`
  padding: '4px 8px';
  min-width: 225px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Toast = ({
  alertProps,
  theme,
  children,
  content,
  active,
  className,
  toastStyle,
  lightMode,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <ToastWrapper
        className={!active ? `${className} inactive` : className}
        active={active}
        {...props}
      >
        <AlertWrapper
          lightMode={lightMode}
          alertStyle={toastStyle}
          {...alertProps}
        >
          <React.Fragment>{children || content}</React.Fragment>
        </AlertWrapper>
      </ToastWrapper>
    </ThemeProvider>
  );
};

Toast.defaultProps = {
  position: 'top right',
  lightMode: false,
  toastStyle: ToastStyleEnum.PRIMARY,
  duration: ToastDurationEnum.SHORT,
  active: false,
  className: '',
};
