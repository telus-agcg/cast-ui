import * as React from 'react';
import styled from 'styled-components';
import { DraggableIconButton } from './';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize: string;
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
      props.theme.common[props.guttersize].padding.toString().split(' ')[1]
    } 0`};
`;

export const DraggableFooter: React.FunctionComponent<Props> = props => (
  <SDraggableFooter {...props}>
    <DraggableIconButton btnSize="sm" btnStyle="primary" onClick={() => {}} />
  </SDraggableFooter>
);
DraggableFooter.defaultProps = {
  color: 'lightGray',
  guttersize: 'md',
};
