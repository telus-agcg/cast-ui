import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from './defaultProps';
import DraggableContext from './draggableContext';
import { Themes } from '../themes';

export type Props = Partial<DraggableProps>;

const SDraggable = styled.div`
  position: relative;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common.md.fontSize};
`;

export const Draggable: React.FunctionComponent<Props> = (props: any) => {
  return (
    <DraggableContext.Provider value={{ parentProps: props }}>
      <SDraggable {...props}>{props.children}</SDraggable>
    </DraggableContext.Provider>
  );
};
Draggable.defaultProps = {
  color: 'lightGray',
  draggablestyle: 'primary',
  bordercolor: 'lightGray',
  guttersize: 'md' as 'md' | 'lg' | 'sm',
  theme: Themes.defaultTheme,
};
