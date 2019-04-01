import * as React from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';
// import { Themes } from '../themes';

export type Props = TippyProps & {
  children: any;
  usePointer?: boolean;
  arrow?: true;
  theme?: any;
};

const STippy = styled(Tippy)`
  background: ${(props: Props) => props.theme.typography.tooltip.background};
  border-radius: ${(props: Props) =>
    props.theme.typography.tooltip.borderRadius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

export class Tooltip extends React.Component<Props> {
  static defaultProps = {
    // theme: Themes.defaultTheme,
  };
  contentIsString = () => {
    return typeof this.props.content === 'string';
  };
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
