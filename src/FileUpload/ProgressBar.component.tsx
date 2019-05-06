import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props {
  /**
   * Set height of ProgressBar
   *
   * @default ''
   **/
  height?: String;
  /**
   * Set default background
   *
   * @default ''
   **/
  background?: String;
  /**
   * Set progress background
   *
   * @default ''
   **/
  progressBackground?: String;
  /**
   * Set progress background
   *
   * @default 0
   **/
  percentage?: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SProgressBar = styled.div`
  position: relative;
  min-width: ${(props: any) => props.theme.progressBar.minWidth};
  height: ${(props: any) => props.height || props.theme.progressBar.height};
  border-radius: ${(props: any) => props.theme.progressBar.borderRadius};
  background: ${(props: any) =>
    props.background || props.theme.progressBar.background};
  .progress {
    background: ${(props: any) =>
      props.progressBackground || props.theme.progressBar.progressBackground};
    transition: ${(props: any) => props.theme.progressBar.transition};
    width: ${(props: any) => `${props.percentage}%`}
        max-width: 100%;
    border-radius: inherit;
    height: 100%;
  }
`;

export const ProgressBar: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SProgressBar {...props}>
      <div className="progress" />
    </SProgressBar>
  </ThemeProvider>
);

ProgressBar.defaultProps = {
  height: '',
  background: '',
  progressBackground: '',
  percentage: 0,
  theme: Themes.defaultTheme,
};
