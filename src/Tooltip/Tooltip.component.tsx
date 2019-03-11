import * as React from 'react';
// import styled from 'styled-components';
// import * as ReactPopover from 'react-popover';
import Tippy, { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

export type Props = TippyProps &
  Partial<{
    children: any;
    usePointer?: boolean;
    theme: any;
  }>;

export class Tooltip extends React.Component<Props> {
  contentIsString = () => {
    return typeof this.props.content === 'string';
  };
  public render() {
    return (
      <Tippy isVisible={true} content={this.props.content} {...this.props}>
        {this.props.children}
      </Tippy>
    );
  }
}

export default Tooltip;
