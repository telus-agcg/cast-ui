import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export type PanelBodyProps = React.PropsWithChildren<{
  /**
   * Set PanelBody Style
   *
   *  @default 'primary'
   */
  panelStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Whether the panel has padding or not
   *
   *  @default 'false'
   */
  noPadding?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SPanelBody = styled.div<PanelBodyProps>`
  border: ${(props) =>
    `${props.theme.panel.body.borderWidth} solid 
    ${props.theme.panel.bodyBorderColor}`};
  border-radius: ${(props) => props.theme.panel.body.borderRadius};
  padding: ${(props) =>
    props.noPadding ? '10px' : props.theme.panel.body.padding};
  height: auto;
`;

const defaultProps = {
  panelStyle: 'primary',
} satisfies Partial<PanelBodyProps>;

export const PanelBody = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SPanelBody {...rest}>{children}</SPanelBody>
    </ThemeProvider>
  );
};
