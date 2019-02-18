import * as React from 'react';
import styled from 'styled-components';
import DraggableContext from './DraggableContext';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Draggable color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable style
   *
   * @default 'primary'
   **/
  draggablestyle?: string;
  /**
   * Select Draggable borders' color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  bordercolor?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggable = styled.div`
  position: relative;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common.md.fontSize};
`;

export const Draggable: React.FunctionComponent<Props> = props => {
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
};
