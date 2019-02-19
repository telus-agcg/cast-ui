import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from '../';
import DraggableContext, { useMergeWithParentProps } from './DraggableContext';

type Props = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Draggable style
   *
   * @default 'primary'
   **/
  draggablestyle?: string | 'primary';
  /**
   * Select DraggableParent color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Parent borders' color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  bordercolor?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize?: string;
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
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
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
const SParentMainContent = styled.div`
  width: 100%;
`;

const SParentRightContent = styled.div`
  margin: ${(props: any) => props.theme.common[props.guttersize].padding};
  margin-right: 0;
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
    <SDraggableParent {...newProps} key={props.color}>
      {props.showparenthandle && (
        <DraggableHandle
          size={newProps.parenthandlesize}
          className="parentHandle"
          onMouseEnter={() => setParentActive(true)}
          onMouseLeave={() => setParentActive(false)}
          onDragStart={(e: any) => console.log('drag startted', e)}
          draggable
        />
      )}
      {props.children}
    </SDraggableParent>
  );
};

export default { ParentContainer, ParentMainContent, ParentRightContent };
