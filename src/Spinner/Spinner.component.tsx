import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
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

const SSpinner = styled.div`
  width: ${(props: Props) => `${props.size}px`};
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
  margin: auto;
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props: Props) => `${props.size}px`};
    height: ${(props: Props) => `${props.size}px`};
    margin-top: ${(props: Props) => `-${props.size! / 2}px`};
    margin-left: ${(props: Props) => `-${props.size! / 2}px`};
    border-radius: 50%;
    border: ${(props: Props) =>
      `3px solid
      ${props.theme.spinner.backgroundColor}`};
    border-top-color: ${(props: Props) => props.theme.spinner.borderColor};
    animation: ${(props: Props) =>
      `spinner ${props.animationSpeed}s ${props.transitionType} infinite`};
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SSpinner {...props} />
  </ThemeProvider>
);
Spinner.defaultProps = {
  size: 50,
  animationSpeed: 1,
  transitionType: 'linear',
  theme: Themes.canopyTheme,
};
