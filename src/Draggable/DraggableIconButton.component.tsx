import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { Button } from '../';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /** Handle Button click events  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select DraggableIconButton color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Set button size in pixels
   *
   * @default '38'
   **/
  pixelbuttonsize?: number;
  /**
   * Select Button Size
   *
   * @default 'sm'
   **/
  btnSize: string;
  /**
   * Select Button Size
   *
   * @default 'primary'
   **/
  btnStyle: string;
  /**
   * Set Icon size
   *
   * @default '28'
   **/
  iconsize?: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableIconButton = styled(Button)`
  position: relative;
  border-radius: 50%;
  min-width: 20px;
  width: ${(props: any) => props.pixelbuttonsize}px;
  height: ${(props: any) => props.pixelbuttonsize}px;
  padding: 0;
`;

export const DraggableIconButton: React.FunctionComponent<Props> = props => (
  <SDraggableIconButton {...props}>
    <Icon icon={icAdd} size={props.iconsize} />
  </SDraggableIconButton>
);
DraggableIconButton.defaultProps = {
  color: 'lightGray',
  pixelbuttonsize: 32,
  btnSize: 'sm',
  btnStyle: 'primary',
  iconsize: 24,
};
