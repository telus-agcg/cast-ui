import * as React from 'react';
import styled from 'styled-components';
import { DraggableItemProps } from './props';
import DraggableContext, { useMergeWithParentProps } from '../DraggableContext';

type Props = Partial<DraggableItemProps>;

const SItemMainContent = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
`;

export const ItemMainContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [{ key: 'guttersize', defaultVal: 'md' }];
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
