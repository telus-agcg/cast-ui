import * as React from 'react';
import styled from 'styled-components';
import { info } from 'react-icons-kit/fa/info';
import { IconButton } from '../';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select DraggableInfo color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize?: string;
  /**
   * Set Icon size
   *
   * @default '14'
   **/
  iconsize?: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
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
  <SDraggableInfo {...props}>
    <IconButton
      icon={info}
      iconsize={10}
      pixelbuttonsize={18}
      btnSize="sm"
      btnStyle="success"
      onClick={() => {}}
    />
    {props.children}
  </SDraggableInfo>
);
DraggableInfo.defaultProps = {
  color: 'lightGray',
  guttersize: 'md',
  iconsize: 10,
};
