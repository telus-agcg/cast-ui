import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from '../';
import { DraggableParentProps } from './props';
import DraggableContext, { useMergeWithParentProps } from '../DraggableContext';

type Props = Partial<DraggableParentProps> & {
  /** Listen to drag start event  */
  onDragStart?(e: React.MouseEvent<HTMLElement>): void;
  /** Listen to drag over event  */
  onDragOver?(e: React.MouseEvent<HTMLElement>): void;
  /** Listen to drop event  */
  onDrop?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Listen to drag start events
   *
   * @default true
   * */
  draggable?: boolean;
  /**
   * Size of the handle in the draggable parent
   *
   * @default '30'
   **/
  parenthandlesize?: number;
  /**
   * Optionally show the handle in the draggable parent
   *
   * @default 'true'
   **/
  showparenthandle?: boolean;
  /**
   * Active background for draggable parent container
   *
   * @default 'false'
   **/
  parentActive?: boolean;
};

const SDraggableParent = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
  margin: ${(props: Props) =>
    `${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } 0`};
  border: 1px dashed ${(props: Props) => props.theme.colors[props.bordercolor!]};
  border-radius: ${(props: Props) =>
    props.theme.common[props.guttersize!].borderRadius};
  background-color: ${(props: Props) =>
    props.parentActive
      ? props.theme.colors.panelBackground
      : props.theme.colors.white};
  .parentHandle {
    cursor: pointer;
    color: ${(props: Props) => props.theme.colors[props.bordercolor!]};
    padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
    margin-left: ${(props: Props) =>
      `-${
        props.theme.common[props.guttersize!].padding.toString().split(' ')[1]
      }`};
    &:hover {
      color: ${(props: Props) => props.theme.colors.blue};
    }
  }
`;

export const ParentContainer: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const [parentActive, setParentActive] = React.useState(false);
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
    { key: 'parenthandlesize', defaultVal: 30 },
    { key: 'parentActive', defaultVal: parentActive },
  ];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });
  return (
    <SDraggableParent
      {...newProps}
      key="draggableParent"
      draggable={parentActive && props.draggable}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}>
      {props.showparenthandle && (
        <DraggableHandle
          size={newProps.parenthandlesize}
          className="parentHandle"
          onMouseEnter={() => setParentActive(true)}
          onMouseLeave={() => setParentActive(false)}
        />
      )}
      {props.children}
    </SDraggableParent>
  );
};

export default ParentContainer;
