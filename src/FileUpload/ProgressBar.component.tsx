import * as React from 'react';
import styled from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export interface ProgressBarProps {
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
    width: ${(props: any) => `${props.percentage}%`};
    max-width: 100%;
    border-radius: inherit;
    height: 100%;
  }
`;

const defaultProps = {
  height: '',
  background: '',
  progressBackground: '',
  percentage: 0,
} satisfies Partial<ProgressBarProps>;

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = (
  props,
) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  return (
    <SProgressBar {...propsWithDefaults} theme={props.theme}>
      <div className="progress" />
    </SProgressBar>
  );
};
