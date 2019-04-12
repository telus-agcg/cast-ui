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
  color: ${(props: Props) => props.theme.typography.popover.color};
  border-radius: ${(props: Props) =>
    props.theme.typography.popover.borderRadius};
  background: ${(props: Props) => props.theme.typography.popover.background};
  border: 1px solid
    ${(props: Props) => props.theme.typography.popover.borderColor};
  &[x-placement^='bottom'] .tippy-arrow {
    border-bottom: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^='right'] .tippy-arrow {
    border-right: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^='left'] .tippy-arrow {
    border-left: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^='top'] .tippy-arrow {
    border-top: 8px solid ${(props: Props) => props.theme.colors.white};
  }
`;

export class Popover extends React.Component<Props> {
  static defaultProps = {
    arrow: false,
    placement: 'bottom-start',
    theme: Themes.defaultTheme,
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
