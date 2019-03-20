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
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  &[x-placement^=bottom] .tippy-arrow{
    border-bottom: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^=right] .tippy-arrow{
    border-right: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^=left] .tippy-arrow{
    border-left: 8px solid ${(props: Props) => props.theme.colors.white};
  }

  &[x-placement^=top] .tippy-arrow{
    border-top: 8px solid ${(props: Props) => props.theme.colors.white};
  }
`;

export class Tooltip extends React.Component<Props> {
  contentIsString = () => {
    return typeof this.props.content === 'string';
  }
  public render() {
    return (
      <STippy
        isVisible={true}
        content={this.props.content}
        arrow={true}
        {...this.props}
        >
        {this.props.children}
      </STippy>
    );
  }
}

export default Tooltip;
