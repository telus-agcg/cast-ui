import * as React from 'react';
import styled from 'styled-components';
import * as ReactPopover from 'react-popover';

type Props = ReactPopover.PopoverProps &
  Partial<{
    children: any;
    usePointer: boolean;
    theme: any;
  }>;

const SPopover = styled(ReactPopover)`
  .Popover-body {
    padding: 4rem;
    display: inline-flex;
    flex-direction: column;
    background: ${(props: Props) => props.theme.popover.background};
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    color: ${(props: Props) => props.theme.typography.color};
    border: 1px solid #ccc;
    box-shadow: 0px 2px 15px #ddd;
  }
  .Popover-tipShape {
    fill: ${(props: Props) => props.theme.popover.background};
    stroke: #ccc;
    stroke-width: 1px;
  }
  .Target {
    -webkit-user-select: none;
    position: relative;
    display: inline-block;
    white-space: pre-wrap;
    text-align: center;
    text-transform: uppercase;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  .Target-Move {
    padding: 1rem;
    cursor: move;
    border-bottom: 1px solid white;
    background: hsl(173, 69%, 48%);
  }
  .Target-Toggle {
    display: block;
    padding: 1rem;
    cursor: pointer;
    background: hsl(346, 62%, 55%);
  }
  .Target.is-open .Target-Toggle {
    background: hsl(346, 80%, 50%);
  }
`;

class Popover extends React.Component<Props> {
  public render() {
    return (
      <SPopover
        isOpen={true}
        body={this.props.body}
        className="popover"
        enterExitTransitionDurationMs={0}
        tipSize={this.props.usePointer ? 7 : 0.1}
        {...this.props}
      >
        {this.props.children}
      </SPopover>
    );
  }
}

export default Popover;
