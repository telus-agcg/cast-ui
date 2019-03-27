import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { defaultTheme } from '../../themes/default';

export type Props = Partial<DraggableProps>;

const SItemMainContent = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
`;

export const ItemMainContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'theme', defaultVal: { ...defaultTheme } },
  ];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <SItemMainContent {...newProps} key={props.color}>
      {props.children}
    </SItemMainContent>
  );
};

export default ItemMainContent;
