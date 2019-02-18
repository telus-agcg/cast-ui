import * as React from 'react';
import styled from 'styled-components';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { IconButton } from '../';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Draggable style
   *
   * @default 'primary'
   **/
  draggablestyle?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize?: string;
  /**
   * Select DraggableFooter color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableFooter = styled.div`
  position: relative;
  padding: ${(props: Props) =>
    `${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } 0`};
`;

export const DraggableFooter: React.FunctionComponent<Props> = props => (
  <SDraggableFooter {...props}>
    <IconButton
      icon={icAdd}
      btnSize="sm"
      btnStyle={props.draggablestyle!}
      onClick={() => {}}
    />
    {props.children}
  </SDraggableFooter>
);
DraggableFooter.defaultProps = {
  color: 'lightGray',
  guttersize: 'md',
  draggablestyle: 'primary',
};
