import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';
import { Themes } from '../themes';

export interface Props extends TippyProps {
  /** anchor for the popover  */
  children: any;
  /**
   * From theme provider
   * @default defaultTheme
   **/
  theme?: any;
}

const TippyPopover: React.FunctionComponent<Props> = (props: Props) => (
  <Tippy {...props} />
);
TippyPopover.defaultProps = {
  animateFill: false,
  animation: 'scale',
  interactive: true,
  interactiveBorder: 10,
  theme: 'light-border',
  trigger: 'click',
};

const SPopover = styled(TippyPopover)`
  color: ${(props: Props) => props.theme.popover.color};
  border-radius: ${(props: Props) => props.theme.popover.borderRadius};
  background: ${(props: Props) => props.theme.popover.background};
  border: 1px solid ${(props: Props) => props.theme.popover.borderColor};
  box-shadow: ${(props: Props) => props.theme.popover.boxShadow};
  padding: 0;
  .tippy-arrow:before {
    content: '';
    width: 9px;
    height: 9px;
    border-right: 1px solid ${(props: Props) => props.theme.popover.borderColor};
    border-top: 1px solid ${(props: Props) => props.theme.popover.borderColor};
    position: absolute;
    border: 1px solid ${(props: Props) => props.theme.popover.borderColor};
  }
  &[x-placement^='bottom'] .tippy-arrow {
    border-bottom: 8px solid ${(props: Props) => props.theme.colors.white};
    &:before {
      transform: rotate(-45deg) translate(-4px, -3px);
    }
  }

  &[x-placement^='right'] .tippy-arrow {
    border-right: 8px solid ${(props: Props) => props.theme.colors.white};
    &:before {
      transform: rotate(225deg) translate(3px, 4px);
    }
  }

  &[x-placement^='left'] .tippy-arrow {
    border-left: 8px solid ${(props: Props) => props.theme.colors.white};
    &:before {
      transform: rotate(45deg) translate(-11px, 4px);
    }
  }

  &[x-placement^='top'] .tippy-arrow {
    border-top: 8px solid ${(props: Props) => props.theme.colors.white};
    &:before {
      transform: rotate(135deg) translate(-4px, 11px);
    }
  }
`;

export class Popover extends React.Component<Props> {
  static defaultProps = {
    arrow: false,
    placement: 'bottom-start',
    theme: Themes.canopyTheme,
  };
  public render() {
    const { theme, children, ...props } = this.props;
    const distance =
      props.distance || props.arrow
        ? theme.popover.withArrowDistance
        : theme.popover.withoutArrowDistance;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <React.Fragment>
          <SPopover distance={distance} {...props}>
            {children}
          </SPopover>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Popover;
