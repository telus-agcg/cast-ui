import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';

export type Props = Partial<DraggableProps>;

const SParentRightContent = styled.div`
  margin: ${(props: any) => props.theme.common[props.guttersize].padding};
  margin-right: 0;
`;

export const ParentRightContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
  ];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <SParentRightContent {...newProps} key={props.color}>
      {props.children}
    </SParentRightContent>
  );
};

export default ParentRightContent;
