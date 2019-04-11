import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableProps } from './defaultProps';
import { Themes } from '../themes';

export type Props = Partial<DraggableProps> & {
  /**
   * Set Icon size
   *
   * @default '10'
   **/
  iconSize?: number;
};

const SDraggableInfo = styled.div`
  position: relative;
  color: ${(props: any) => props.theme.colors.disabledText};
  font-size: 12px;
  font-style: italic;
  padding: ${(props: Props) =>
    `calc(${
      props.theme.common[props.gutterSize!].padding.toString().split(' ')[0]
    } / 4) 0`};
`;

export const DraggableInfo: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SDraggableInfo {...props}>{props.children}</SDraggableInfo>
  </ThemeProvider>
);
DraggableInfo.defaultProps = {
  color: 'lightGray',
  gutterSize: 'md' as 'md' | 'lg' | 'sm',
  iconSize: 10,
  theme: Themes.defaultTheme,
};
