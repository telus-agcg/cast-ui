import styled, { ThemeProvider } from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';
import 'tippy.js/dist/tippy.css';

export interface TooltipProps extends TippyProps {
  theme?: any;
}

const STippy = styled(Tippy)<TooltipProps>`
  background: ${(props) => props.theme.tooltip.background};
  border-radius: ${(props) => props.theme.tooltip.borderRadius};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.body.fontSize};
  color: ${(props) => props.theme.colors.white};
  &[x-placement^='bottom'] .tippy-arrow,
  &[x-placement^='top'] .tippy-arrow {
    border-color: ${(props) => props.theme.tooltip.background} transparent;
  }
  &[x-placement^='left'] .tippy-arrow,
  &[x-placement^='right'] .tippy-arrow {
    border-color: transparent ${(props) => props.theme.tooltip.background};
  }
`;

const defaultProps = {
  arrow: true,
  theme: Themes.canopyTheme,
} satisfies Partial<TooltipProps>;

export const Tooltip = (props: TooltipProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <STippy {...propsWithDefaults}>{children}</STippy>
    </ThemeProvider>
  );
};
