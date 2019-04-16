import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableProps } from '../defaultProps';
import { DraggableHandle } from '../DraggableHandle.component';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { Themes } from '../../themes';

export type Props = Partial<DraggableProps> & {
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
   * Size of the handle in the draggable item
   *
   * @default '30'
   **/
  itemHandleSize?: number;
  /**
   * Optionally show the handle in the draggable item
   *
   * @default 'true'
   **/
  showItemHandle?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: start;
  background: ${(props: Props) => props.theme.colors.white};
  border: 1px solid
    ${(props: Props) =>
      props.borderColor || props.theme.itemContainer.borderColor};
  border-radius: ${(props: Props) =>
    props.theme.common[props.gutterSize!].borderRadius};
  margin: ${(props: Props) =>
    `${
      props.theme.common[props.gutterSize!].padding.toString().split(' ')[0]
    } 0`};
  > * {
    display: flex;
    align-items: center;
  }
`;

const SItemLeftContent = styled.div`
  position: relative;
  border-right: 1px solid
    ${(props: Props) =>
      props.borderColor || props.theme.itemContainer.borderColor};
  .itemHandle {
    cursor: ${(props: any) => (props.itemDraggable ? 'grab' : 'not-allowed')};
    color: ${(props: Props) =>
      props.borderColor || props.theme.itemContainer.borderColor};
    padding: ${(props: Props) =>
      `calc(${
        props.theme.common[props.gutterSize!].padding.toString().split(' ')[0]
      } / 2)`};
  }
  &:hover {
    background-color: ${(props: Props) => props.theme.colors.lightBackground};
    .itemHandle {
      color: ${(props: any) =>
        props.itemDraggable
          ? props.theme.colors.blue
          : props.borderColor || props.theme.itemContainer.borderColor};
    }
  }
`;

export const ItemContainer: React.FunctionComponent<Props> = (props: any) => {
  const [itemActive, setItemActive] = React.useState(false);
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'gutterSize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'borderColor', defaultVal: 'lightGray' },
    { key: 'draggable', defaultVal: props.draggable },
    { key: 'theme', defaultVal: Themes.defaultTheme },
  ];
  const { theme, ...newProps }: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SItemContainer
        {...newProps}
        key="draggableItem"
        draggable={itemActive && newProps.draggable}
      >
        {newProps.showItemHandle && (
          <SItemLeftContent
            {...newProps}
            draggable={false}
            itemDraggable={itemActive && newProps.draggable}
          >
            <DraggableHandle
              size={newProps.itemHandleSize}
              className="itemHandle"
              onMouseEnter={() => setItemActive(true)}
              onMouseLeave={() => setItemActive(false)}
            />
          </SItemLeftContent>
        )}
        {props.children}
      </SItemContainer>
    </ThemeProvider>
  );
};

export default ItemContainer;
