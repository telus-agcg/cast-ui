import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { info } from 'react-icons-kit/fa/info';

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
`;

export const DraggableInfo: React.FunctionComponent<Props> = props => (
  <SDraggableInfo {...props}>
    <Icon icon={info} size={props.iconsize} />
    <span>To create a new group, drag one qualification on top of another</span>
  </SDraggableInfo>
);
DraggableInfo.defaultProps = {
  color: 'lightGray',
  iconsize: 14,
};
