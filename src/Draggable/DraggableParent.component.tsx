import * as React from 'react';
import styled from 'styled-components';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { DraggableHandle, DraggableIconButton } from './';

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

const SParentRightAction = styled.div`
  margin: ${(props: any) => props.theme.common[props.guttersize].padding};
  margin-right: 0;
`;

export const DraggableParent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const [parentActive, setParentActive] = React.useState(false);
  return (
    <SDraggableParent parentActive={parentActive} {...props}>
      <DraggableHandle
        size={props.parenthandlesize}
        className="parentHandle"
        onMouseEnter={() => setParentActive(true)}
        onMouseLeave={() => setParentActive(false)}
      />
      {props.children}
      <SParentRightAction {...props}>
        <DraggableIconButton
          icon={icAdd}
          btnSize="sm"
          btnStyle={props.draggablestyle!}
          onClick={() => {}}
        />
      </SParentRightAction>
    </SDraggableParent>
  );
};
DraggableParent.defaultProps = {
  color: 'lightGray',
  draggablestyle: 'primary',
  bordercolor: 'lightGray',
  guttersize: 'md' as 'md' | 'lg' | 'sm',
  parenthandlesize: 30,
};
