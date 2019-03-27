import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from './defaultProps';
import { defaultTheme } from '../themes/default';

export type Props = Partial<DraggableProps>;

const SDraggableFooter = styled.div`
  position: relative;
  padding: ${(props: Props) =>
    `${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } 0`};
`;

export const DraggableFooter: React.FunctionComponent<Props> = props => (
  <SDraggableFooter {...props}>{props.children}</SDraggableFooter>
);
DraggableFooter.defaultProps = {
  color: 'lightGray',
  guttersize: 'md',
  draggablestyle: 'primary',
  theme: { ...defaultTheme },
};
