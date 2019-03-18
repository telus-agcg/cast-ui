import * as React from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';

export type Props = TippyProps & {
  /** anchor for the popover  */
  children?: any;
  /**
   * From theme provider
   * @default defaultTheme
   **/
  theme?: any;
};

const TippyPopover: React.FunctionComponent<Props> = (props:Props) => <Tippy {...props} />;
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
  border-radius: ${(props: Props) => props.theme.typography.popover.borderRadius};
  background: ${(props: Props) => props.theme.typography.popover.background};
  border:1px solid ${(props: Props) => props.theme.typography.popover.borderColor};
`;

export class Popover extends React.Component<Props> {
  public render() {
    const { arrow } = this.props;
    const withArrowDistance = 10;
    const withoutArrowDistance = 9;
    const distance = arrow ? withArrowDistance : withoutArrowDistance;
    return (
      <React.Fragment>
        <SPopover
          arrow={this.props.arrow || false}
          placement={this.props.placement || 'bottom-start'}
          content={this.props.content}
          distance={this.props.distance || distance}
          {...this.props}
        >
          {this.props.children}
        </SPopover>
      </React.Fragment>
    );
  }
}

export default Popover;
