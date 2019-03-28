import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from './defaultProps';
import { Themes } from '../themes';

export type Props = Partial<DraggableProps> & {
  /**
   * Set Icon size
   *
   * @default '10'
   **/
  iconsize?: number;
};

const SDraggableInfo = styled.div`
  position: relative;
  color: ${(props: any) => props.theme.colors.disabledText};
  font-size: 12px;
  font-style: italic;
  padding: ${(props: Props) =>
    `calc(${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } / 4) 0`};
`;

export const DraggableInfo: React.FunctionComponent<Props> = props => (
  <SDraggableInfo {...props}>{props.children}</SDraggableInfo>
);
DraggableInfo.defaultProps = {
  color: 'lightGray',
  guttersize: 'md' as 'md' | 'lg' | 'sm',
  iconsize: 10,
  theme: Themes.defaultTheme,
};
