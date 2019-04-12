import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';
import { Themes } from '../themes';

export interface Props extends TippyProps {
  children: any;
  usePointer?: boolean;
  arrow?: boolean;
  theme?: any;
}

const STippy = styled(Tippy)`
  background: ${(props: Props) => props.theme.tooltip.background};
  border-radius: ${(props: Props) => props.theme.tooltip.borderRadius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

export class Tooltip extends React.Component<Props> {
  static defaultProps = {
    arrow: true,
    theme: Themes.defaultTheme,
  };
  contentIsString = () => {
    return typeof this.props.content === 'string';
  };
  public render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <STippy {...props}>{children}</STippy>
      </ThemeProvider>
    );
  }
}

export default Tooltip;
