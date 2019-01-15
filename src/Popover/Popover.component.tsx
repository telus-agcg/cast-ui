import * as React from 'react';
import styled from 'styled-components';
import * as ReactPopover from 'react-popover';

type Props = ReactPopover.PopoverProps &
  Partial<{
    children: any;
    theme: any;
  }>;

const SPopover = styled(ReactPopover)`
  .Popover-body {
    padding: 4rem;
    display: inline-flex;
    flex-direction: column;
    background: hsl(0, 0%, 27%);
    color: white;
    border-radius: 0.3rem;
  }
  .Popover-tipShape {
    fill: hsl(0, 0%, 27%);
  }
  .Target {
    -webkit-user-select: none;
    position: relative;
    display: inline-block;
    color: hsla(0, 0%, 0%, 0.45);
    color: white;
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
        {...this.props}
      >
        {this.props.children}
      </SPopover>
    );
  }
}

export default Popover;
