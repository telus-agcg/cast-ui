import * as React from 'react';
import styled from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export type PanelProps = React.PropsWithChildren<{
  /**
   * The name of the panel
   *
   * @default ''
   * */
  name?: string;
  /**
   * The title of the panel
   *
   * @default ''
   * */
  title?: string;
  /**
   * Set Panel Style
   *
   *  @default 'primary'
   */
  panelStyle: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const PanelWrapper = styled.div<PanelProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  border-radius: ${(props) => props.theme.panel.body.borderRadius};
  box-shadow: ${(props) => props.theme.panel.boxShadow};
`;

const defaultProps = {
  panelStyle: 'primary',
} satisfies Partial<PanelProps>;

export const Panel = (props: PanelProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children } = propsWithDefaults;
  return <PanelWrapper {...propsWithDefaults}>{children}</PanelWrapper>;
};
