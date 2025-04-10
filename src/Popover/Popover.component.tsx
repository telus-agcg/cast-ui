import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import { Themes } from '@themes';
import 'tippy.js/dist/tippy.css';

export interface PopoverProps extends TippyProps {
  /** anchor for the popover  */
  children: any;
  /**
   * From theme provider
   * @default defaultTheme
   **/
  theme?: any;
}

const tippyDefaultProps = {
  animateFill: false,
  animation: 'scale',
  interactive: true,
  interactiveBorder: 10,
  theme: 'light-border',
  trigger: 'click',
} satisfies Partial<TippyProps>;

const TippyPopover: React.FunctionComponent<PopoverProps> = (
  props: PopoverProps,
) => {
  const propsWithDefaults = { ...tippyDefaultProps, ...props };
  return <Tippy {...propsWithDefaults} />;
};

const SPopover = styled(TippyPopover)<PopoverProps>`
  border: 1px solid ${(props) => props.theme.popover.borderColor};
  box-shadow: ${(props) => props.theme.popover.boxShadow};
  background: ${(props) => props.theme.popover.background} !important;
  color: ${(props) => props.theme.popover.color} !important;
  .tippy-arrow {
    color: ${(props) => props.theme.popover.background};
  }
  &[x-placement^='bottom'] .tippy-arrow {
    border-bottom: 8px solid ${(props) => props.theme.colors.white};
    &:before {
      transform: rotate(-45deg) translate(-4px, -3px);
    }
  }

  &[x-placement^='right'] .tippy-arrow {
    border-right: 8px solid ${(props) => props.theme.colors.white};
    &:before {
      transform: rotate(225deg) translate(3px, 4px);
    }
  }
  &[x-placement^='left'] .tippy-arrow {
    border-left: 8px solid ${(props) => props.theme.colors.white};
    &:before {
      transform: rotate(45deg) translate(-11px, 4px);
    }
  }

  &[x-placement^='top'] .tippy-arrow {
    border-top: 8px solid ${(props) => props.theme.colors.white};
    &:before {
      transform: rotate(135deg) translate(-4px, 11px);
    }
  }
`;

const defaultProps = {
  arrow: false,
  placement: 'bottom-start',
  theme: Themes.canopyTheme,
} satisfies Partial<PopoverProps>;

export const Popover = (props: PopoverProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SPopover {...propsWithDefaults}>{children}</SPopover>
    </ThemeProvider>
  );
};
