import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export type SpinnerProps = {
  /**
   * Adjust spinner size in pixels
   *
   * @default 50
   **/
  size?: number;
  /**
   * Adjust animation speed in seconds
   *
   * @default 1
   **/
  animationSpeed?: number;
  /**
   * Set transition type
   *
   * @default 'linear'
   **/
  transitionType?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSpinner = styled.div<{
  size: number;
  $animationSpeed: number;
  $transitionType: string;
}>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: relative;
  margin: auto;
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    margin-top: ${(props) => `-${props.size! / 2}px`};
    margin-left: ${(props) => `-${props.size! / 2}px`};
    border-radius: 50%;
    border: ${(props) =>
      `3px solid
      ${props.theme.spinner.backgroundColor}`};
    border-top-color: ${(props) => props.theme.spinner.borderColor};
    animation: ${(props) =>
      `spinner ${props.$animationSpeed}s ${props.$transitionType} infinite`};
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

const defaultProps = {
  size: 50,
  animationSpeed: 1,
  transitionType: 'linear',
  theme: Themes.canopyTheme,
} satisfies Partial<SpinnerProps>;

export const Spinner: React.FunctionComponent<SpinnerProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, size, animationSpeed, transitionType } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSpinner size={size!} $animationSpeed={animationSpeed!} $transitionType={transitionType!} />
    </ThemeProvider>
  );
};
