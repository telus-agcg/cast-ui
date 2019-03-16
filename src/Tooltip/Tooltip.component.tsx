import * as React from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';

export type Props = TippyProps & {
  children: any;
  usePointer?: boolean;
  arrow?: true;
  theme?: any;
};

const STippy = styled(Tippy)`
  background: ${(props: Props) => props.theme.typography.tooltip.background};
  border-radius: ${(props: Props) => props.theme.typography.tooltip.borderRadius};
`;

export class Tooltip extends React.Component<Props> {
  contentIsString = () => {
    return typeof this.props.content === 'string';
  }
  public render() {
    return (
      <STippy isVisible={true} content={this.props.content} {...this.props} arrow={true}>
        {this.props.children}
      </STippy>
    );
  }
}

export default Tooltip;
