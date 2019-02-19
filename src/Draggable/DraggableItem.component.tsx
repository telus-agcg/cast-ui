import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from './';
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
  draggablestyle?: string;
  /**
   * Select DraggableItem color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Item borders' color. Must be a color defined in theme colors
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
   * Size of the handle in the draggable item
   *
   * @default '30'
   **/
  itemhandlesize?: number;
  /**
   * Optionally show the handle in the draggable item
   *
   * @default 'true'
   **/
  showitemhandle?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: start;
  background: ${(props: Props) => props.theme.colors.white};
  border: 1px solid ${(props: Props) => props.theme.colors[props.bordercolor!]};
  border-radius: ${(props: Props) =>
    props.theme.common[props.guttersize!].borderRadius};
  margin: ${(props: Props) =>
    `${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } 0`};
  > * {
    display: flex;
    align-items: center;
  }
`;

const SItemLeftContent = styled.div`
  position: relative;
  border-right: 1px solid
    ${(props: Props) => props.theme.colors[props.bordercolor!]};
  .itemHandle {
    cursor: pointer;
    color: ${(props: Props) => props.theme.colors[props.bordercolor!]};
    padding: ${(props: Props) =>
      `calc(${
        props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
      } / 2)`};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props: Props) => props.theme.colors.panelBackground};
    .itemHandle {
      color: ${(props: Props) => props.theme.colors.blue};
    }
  }
`;

const SItemMainContent = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
`;

const SItemRightContent = styled.div`
  position: relative;
  border-left: 1px solid
    ${(props: Props) => props.theme.colors[props.bordercolor!]};
  color: ${(props: Props) =>
    props.theme.styles[props.draggablestyle!].reverseText};
  background-color: ${(props: Props) =>
    props.theme.styles[props.draggablestyle!].flood};
  cursor: pointer;
  padding: ${(props: Props) =>
    `calc(${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } / 2)`};
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

export const ItemRightContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
  ];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <SItemRightContent {...newProps} key={props.color}>
      {props.children}
    </SItemRightContent>
  );
};

export const ItemContainer: React.FunctionComponent<Props> = (props: any) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
  ];
  const newProps: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });
  return (
    <SDraggableItem {...newProps} key="draggableItem">
      {props.showitemhandle && (
        <SItemLeftContent {...newProps}>
          <DraggableHandle size={props.itemhandlesize} className="itemHandle" />
        </SItemLeftContent>
      )}
      {props.children}
    </SDraggableItem>
  );
};

export default { ItemContainer, ItemMainContent, ItemRightContent };
