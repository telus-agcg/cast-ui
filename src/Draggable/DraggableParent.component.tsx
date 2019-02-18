import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from '../';
import { useParentProps } from './store';

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
   * Size of the handle in the draggable parent container
   *
   * @default '30'
   **/
  parenthandlesize?: number;
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
  align-items: center;
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

const SParentRightContent = styled.div`
  margin: ${(props: any) => props.theme.common[props.guttersize].padding};
  margin-right: 0;
`;

const RightContent: React.FunctionComponent<Props> = ({ ...props }) => {
  const parentProps = useParentProps(null);
  const [newProps, setNewProps] = React.useState(props);
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
  ];
  propsToMerge.map((p: any) => {
    newProps[p.key] = props[p.key] || p.defaultVal;
  });

  function mergeProps() {
    const mergedProps = { ...parentProps, ...props };
    propsToMerge.map((p: any) => {
      mergedProps[p.key] = props[p.key] || p.defaultVal;
    });
    return mergedProps;
  }
  React.useEffect(() => {
    if (
      parentProps !== null &&
      JSON.stringify(props) !== JSON.stringify(parentProps)
    ) {
      const mergedProps = mergeProps();
      if (JSON.stringify(newProps) !== JSON.stringify(mergedProps)) {
        setTimeout(() => {
          console.log(
            'new props in child comparison ',
            mergedProps,
            newProps,
            JSON.stringify(newProps) === JSON.stringify(mergedProps),
          );
        }, 2000);
        setNewProps(mergedProps);
      }
    }
    setTimeout(() => {
      console.log(
        ' we have new we get the effects',
        props,
        mergeProps(),
        newProps,
        parentProps,
      );
    }, 2000);
  }, [props, parentProps]);
  return (
    <SParentRightContent {...newProps} key={props.color}>
      {props.children}
    </SParentRightContent>
  );
};

const Parent: React.FunctionComponent<Props> = ({ ...props }) => {
  const [parentActive, setParentActive] = React.useState(false);
  const parentProps = useParentProps(null);
  return (
    <SDraggableParent
      parentActive={parentActive}
      {...parentProps}
      {...props}
      key={props.color}>
      <DraggableHandle
        size={props.parenthandlesize}
        className="parentHandle"
        onMouseEnter={() => setParentActive(true)}
        onMouseLeave={() => setParentActive(false)}
      />
      {props.children}
    </SDraggableParent>
  );
};
Parent.defaultProps = {
  color: 'lightGray',
  draggablestyle: 'primary',
  bordercolor: 'lightGray',
  guttersize: 'md' as 'md' | 'lg' | 'sm',
  parenthandlesize: 30,
};

export const DraggableParent = { Parent, RightContent };
