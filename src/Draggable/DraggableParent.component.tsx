import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from '../';

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
  return (
    <SParentRightContent {...props} key="rightContent">
      {props.children}
    </SParentRightContent>
  );
};
RightContent.defaultProps = {
  color: 'lightGray',
  draggablestyle: 'primary',
  bordercolor: 'lightGray',
  guttersize: 'md' as 'md' | 'lg' | 'sm',
  parenthandlesize: 30,
};

class Parent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      parentActive: false,
    };
    this.setParentActive = this.setParentActive.bind(this);
  }
  static defaultProps = {
    color: 'lightGray',
    draggablestyle: 'primary',
    bordercolor: 'lightGray',
    guttersize: 'md' as 'md' | 'lg' | 'sm',
    parenthandlesize: 30,
  };
  setParentActive(parentActive: boolean) {
    this.setState({ parentActive });
  }

  RightContent: React.FunctionComponent<Props> = ({ ...props }) => {
    return (
      <SParentRightContent key="rightContent">
        {props.children}
      </SParentRightContent>
    );
  };
  render() {
    const { parentActive }: any = this.state;
    const { ...props } = this.props;
    return (
      <SDraggableParent parentActive={parentActive} {...props} key="parent">
        <DraggableHandle
          size={props.parenthandlesize}
          className="parentHandle"
          onMouseEnter={() => this.setParentActive(true)}
          onMouseLeave={() => this.setParentActive(false)}
        />
        {props.children}
      </SDraggableParent>
    );
  }
}

export const DraggableParent = { Parent, RightContent };
