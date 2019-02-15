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
`;

export const DraggableFooter: React.FunctionComponent<Props> = props => (
  <SDraggableFooter {...props}>
    <DraggableIconButton btnSize="sm" btnStyle="primary" onClick={() => {}} />
  </SDraggableFooter>
);
DraggableFooter.defaultProps = {
  color: 'lightGray',
};
