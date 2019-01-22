import * as React from 'react';
// import styled from 'styled-components';
// import * as ReactPopover from 'react-popover';
import Tippy, { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

type Props = TippyProps &
  Partial<{
    children: any;
    usePointer: boolean;
    theme: any;
  }>;

// const SPopover = styled(ReactPopover)`
//   .Popover-body {
//     padding: 4rem;
//     display: inline-flex;
//     flex-direction: column;
//     background: ${(props: Props) => props.theme.popover.background};
//     font-family: ${(props: Props) => props.theme.typography.fontFamily};
//     color: ${(props: Props) => props.theme.typography.color};
//     border: 1px solid #ccc;
//     box-shadow: 0px 2px 15px #ddd;
//   }
//   .Popover-tipShape {
//     fill: ${(props: Props) => props.theme.popover.background};
//     stroke: #ccc;
//     stroke-width: 1px;
//   }
//   .Target {
//     -webkit-user-select: none;
//     position: relative;
//     display: inline-block;
//     white-space: pre-wrap;
//     text-align: center;
//     text-transform: uppercase;
//     border-radius: 0.2rem;
//     overflow: hidden;
//   }
//   .Target-Move {
//     padding: 1rem;
//     cursor: move;
//     border-bottom: 1px solid white;
//     background: hsl(173, 69%, 48%);
//   }
//   .Target-Toggle {
//     display: block;
//     padding: 1rem;
//     cursor: pointer;
//     background: hsl(346, 62%, 55%);
//   }
//   .Target.is-open .Target-Toggle {
//     background: hsl(346, 80%, 50%);
//   }
// `;

class Tooltip extends React.Component<Props> {
  contentIsString = () => {
    return typeof this.props.content === 'string';
  }
  public render() {
    return (
      <Tippy isVisible={true} content={this.props.content} {...this.props}>
        {this.props.children}
      </Tippy>
    );
  }
}

export default Tooltip;
