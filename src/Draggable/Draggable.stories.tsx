import * as React from 'react';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_down as IKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { info } from 'react-icons-kit/fa/info';

import {
  Draggable,
  DraggableParent,
  DraggableItem,
  DraggableInfo,
  DraggableFooter,
  IconButton,
} from '../';

export default {
  title: 'Components/Utility/Draggable',
  component: Draggable,
  subcomponents: {
    DraggableParent,
    DraggableItem,
    DraggableInfo,
    DraggableFooter,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    draggableStyle: {
      control: {
        options: [
          'success',
          'default',
          'primary',
          'secondary',
          'danger',
          'warning',
        ],
        type: 'select',
      },
    },
    borderColor: {
      control: {
        options: [
          'lightGray',
          'gray',
          'blue',
          'white',
          'red',
          'yellow',
          '#000',
        ],
        type: 'select',
      },
    },
    gutterSize: {
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'inline-radio',
      },
    },
    className: {
      control: false,
    },
    color: {
      control: {
        type: 'color',
      },
    },
    showParentHandle: {
      control: {
        type: 'boolean',
      },
    },
    parentHandleSize: {
      control: {
        options: [20, 30, 40, 50, 60],
        type: 'select',
      },
    },
    parentActive: {
      control: {
        type: 'boolean',
      },
    },
    draggable: {
      control: {
        type: 'boolean',
      },
    },
    onDragStart: {
      action: {
        type: 'onDragStart',
      },
    },
    onDragOver: {
      action: {
        type: 'onDragOver',
      },
    },
    onDrop: {
      action: {
        type: 'onDrop',
      },
    },
    onClick: {
      action: {
        type: 'onClick',
      },
    },
    showItemHandle: {
      control: {
        type: 'boolean',
      },
    },
    itemHandleSize: {
      control: {
        options: [20, 30, 40, 50, 60],
        type: 'select',
      },
    },
    draggableItem1: {
      control: {
        type: 'boolean',
      },
    },
    onDragStartItem1: {
      action: {
        type: 'onDragStartItem1',
      },
    },
    onDragOverItem1: {
      action: {
        type: 'onDragOverItem1',
      },
    },
    onDropItem1: {
      action: {
        type: 'onDropItem1',
      },
    },
  },
};

export const _Draggable = ({
  showParentHandle,
  parentActive,
  parentHandleSize,
  draggable,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
  showItemHandle,
  itemHandleSize,
  draggableItem1,
  onDragStartItem1,
  onDragOverItem1,
  onDropItem1,
  ...rest
}) => (
  <Draggable {...rest}>
    <DraggableInfo>
      <IconButton
        rounded
        icon={info}
        iconSize={10}
        pixelButtonSize={18}
        btnSize="sm"
        btnStyle="success"
        onClick={onClick}
      />
      To create a new group, drag one qualification on top of another
    </DraggableInfo>
    <DraggableParent.ParentContainer
      parentActive={parentActive}
      parentHandleSize={parentHandleSize}
      showParentHandle={showParentHandle}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <DraggableParent.ParentMainContent>
        <DraggableItem.ItemContainer
          showItemHandle={showItemHandle}
          itemHandleSize={itemHandleSize}
          draggable={draggableItem1}
          onDragStart={onDragStartItem1}
          onDragOver={onDragOverItem1}
          onDrop={onDropItem1}
        >
          <DraggableItem.ItemMainContent>
            <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
          </DraggableItem.ItemMainContent>
          <DraggableItem.ItemRightContent>
            <Icon icon={IKAD} size={24} />
          </DraggableItem.ItemRightContent>
        </DraggableItem.ItemContainer>
        <DraggableItem.ItemContainer
          showItemHandle={showItemHandle}
          itemHandleSize={itemHandleSize}
        >
          <DraggableItem.ItemMainContent>
            <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
          </DraggableItem.ItemMainContent>
          <DraggableItem.ItemRightContent>
            <Icon icon={IKAD} size={24} />
          </DraggableItem.ItemRightContent>
        </DraggableItem.ItemContainer>
        <DraggableItem.ItemContainer
          showItemHandle={showItemHandle}
          itemHandleSize={itemHandleSize}
        >
          <DraggableItem.ItemMainContent>
            <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
          </DraggableItem.ItemMainContent>
          <DraggableItem.ItemRightContent>
            <Icon icon={IKAD} size={24} />
          </DraggableItem.ItemRightContent>
        </DraggableItem.ItemContainer>
      </DraggableParent.ParentMainContent>
      <DraggableParent.ParentRightContent>
        <IconButton
          rounded
          icon={icAdd}
          iconSize={20}
          pixelButtonSize={32}
          btnSize="sm"
          btnStyle="primary"
          onClick={onClick}
        />
      </DraggableParent.ParentRightContent>
    </DraggableParent.ParentContainer>
    <DraggableFooter>
      <IconButton
        rounded
        icon={icAdd}
        iconSize={20}
        pixelButtonSize={32}
        btnSize="sm"
        btnStyle="primary"
        onClick={onClick}
      />
    </DraggableFooter>
  </Draggable>
);

_Draggable.args = {
  draggableStyle: 'primary',
  borderColor: 'lightGray',
  gutterSize: 'md',
  showParentHandle: true,
  parentHandleSize: 30,
  parentActive: false,
  draggable: true,
  itemHandleSize: 30,
  showItemHandle: true,
  draggableItem1: true,
};
