import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

type Props = TippyProps &
  Partial<{
    children: any;
    theme: any;
  }>;

const CastTheme = createGlobalStyle`
  .tippy-tooltip.cast-theme {
    background: ${(props: Props) => props.theme.popover.background};
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    color: ${(props: Props) => props.theme.typography.color};
    border-radius: 1px
    border: 1px solid ${(props: Props) => props.theme.popover.borderColor};
  }
  .tippy-tooltip.cast-theme[data-animatefill] {
    background-color: transparent;
  }
  .tippy-tooltip.cast-theme .tippy-backdrop {
    background: ${(props: Props) => props.theme.popover.background};
  }
  .tippy-popper[x-placement^='top'] .tippy-tooltip.cast-theme .tippy-arrow {
    border-top-color: ${(props: Props) => props.theme.popover.borderColor};
  }
  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.cast-theme .tippy-arrow {
    border-bottom-color: ${(props: Props) => props.theme.popover.borderColor};
  }
  .tippy-popper[x-placement^='left'] .tippy-tooltip.cast-theme .tippy-arrow {
    border-left-color: ${(props: Props) => props.theme.popover.borderColor};
  }
  .tippy-popper[x-placement^='right'] .tippy-tooltip.cast-theme .tippy-arrow {
    border-right-color: ${(props: Props) => props.theme.popover.borderColor};
  }
  .tippy-tooltip.cast-theme .tippy-roundarrow {
    fill: ${(props: Props) => props.theme.popover.background};
  }
  .tippy-tooltip.cast-theme {
    background: white;
    border: 1px solid rgba(0, 8, 16, 0.15);
    color: #333;
    box-shadow: 0 3px 14px -0.5px rgba(0, 8, 16, 0.1);
    .tippy-arrow {
      transform-style: preserve-3d;
      &::after {
        content: '';
        position: absolute;
        left: -8px;
        transform: translateZ(-1px);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
    }
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.cast-theme
    .tippy-arrow {
    border-top-color: #fff;
    &::after {
      top: -7px;
      border-top: 8px solid rgba(0, 8, 16, 0.15);
    }
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.cast-theme
    .tippy-arrow {
    border-bottom-color: #fff;
    &::after {
      bottom: -7px;
      border-bottom: 8px solid rgba(0, 8, 16, 0.15);
    }
  }
`;

class Popover extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <CastTheme {...this.props} />
        <Tippy
          theme="cast"
          isVisible={true}
          content={this.props.content}
          {...this.props}
        >
          {this.props.children}
        </Tippy>
      </React.Fragment>
    );
  }
}

export default Popover;
