import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../';

type Props = {
  /** Handle Button click events  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select DraggableIconButton color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
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
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableIconButton = styled(Button)`
  position: relative;
  border-radius: 50%;
`;

export const DraggableIconButton: React.FunctionComponent<Props> = props => (
  <SDraggableIconButton {...props}>
    <div>Footer Button</div>
  </SDraggableIconButton>
);
DraggableIconButton.defaultProps = {
  color: 'lightGray',
  btnSize: 'sm',
  btnStyle: 'primary',
};
