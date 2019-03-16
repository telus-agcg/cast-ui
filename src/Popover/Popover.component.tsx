import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';

export type Props = TippyProps & {
  arrow: boolean;
  isVisible: boolean;
  /** anchor for the popover  */
  children?: any;
  /**
   * From theme provider
   * @default defaultTheme
   **/
  theme?: any;
};
 
const CastTheme = createGlobalStyle`
  .tippy-tooltip.cast-theme {
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    background: ${(props: Props) => props.theme.popover.background};
    border: 1px solid ${(props: Props) => props.theme.popover.borderColor};
    border-radius: 1px
    color: ${(props: Props) => props.theme.typography.color};
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
      border-top: 8px solid ${(props: Props) =>
        props.theme.popover.borderColor};
    }
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.cast-theme
    .tippy-arrow {
    border-bottom-color: #fff;
    &::after {
      bottom: -7px;
      border-bottom: 8px solid ${(props: Props) =>
        props.theme.popover.borderColor};
    }
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.cast-theme
    .tippy-arrow {
    border-left-color: #fff;
    &::after {
      bottom: -8px
      left: -7px;
      border-left: 8px solid ${(props: Props) =>
        props.theme.popover.borderColor};
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.cast-theme
    .tippy-arrow {
    border-right-color: #fff;
    &::after {
      bottom: -8px
      left: -9px;
      border-right: 8px solid ${(props: Props) =>
        props.theme.popover.borderColor};
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
`;

export class Popover extends React.Component<Props> {
  public render() {
    const { arrow } = this.props;
    const withArrowDistance = 10;
    const withoutArrowDistance = 3;
    const distance = arrow ? withArrowDistance : withoutArrowDistance;
    return (
      <React.Fragment>
        <CastTheme {...this.props} />
        <Tippy
          theme="cast"
          arrow={this.props.arrow || false}
          placement={this.props.placement || 'bottom-end'}
          isVisible={true}
          content={this.props.content}
          distance={this.props.distance || distance}
          {...this.props}
        >
          {this.props.children}
        </Tippy>
      </React.Fragment>
    );
  }
}

export default Popover;
