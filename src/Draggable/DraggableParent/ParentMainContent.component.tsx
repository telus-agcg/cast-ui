import * as React from 'react';
import styled from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';

type Props = Partial<DraggableProps>;

const SParentMainContent = styled.div`
  width: 100%;
`;

export const ParentMainContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [{ key: 'guttersize', defaultVal: 'md' }];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <SParentMainContent {...newProps} key={props.color}>
      {props.children}
    </SParentMainContent>
  );
};

export default ParentMainContent;
