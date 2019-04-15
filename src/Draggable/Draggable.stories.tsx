import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

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

storiesOf('Draggable', module).add(
  'Draggable',
  () => (
    <Draggable
      draggableStyle={select(
        'draggableStyle',
        ['success', 'default', 'primary', 'secondary', 'danger', 'warning'],
        'primary',
      )}
      borderColor={select(
        'borderColor',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow', '#000'],
        'lightGray',
      )}
      gutterSize={select('gutterSize', ['sm', 'md', 'lg'], 'md')}
    >
      <DraggableInfo>
        <IconButton
          rounded
          icon={info}
          iconSize={10}
          pixelButtonSize={18}
          btnSize="sm"
          btnStyle="success"
          onClick={() => {}}
        />
        To create a new group, drag one qualification on top of another
      </DraggableInfo>
      <DraggableParent.ParentContainer
        parentActive={boolean('parentActive', false)}
        parentHandleSize={select('parentHandleSize', [20, 30, 40, 50, 60], 30)}
        showParentHandle={boolean('showParentHandle', true)}
        draggable={boolean('Parent draggable', true)}
        onDragStart={action('Drag Parent Container started!')}
        onDragOver={action('Dragging over Parent Container!')}
        onDrop={action('Parent Droped!')}
      >
        <DraggableParent.ParentMainContent>
          <DraggableItem.ItemContainer
            showItemHandle={boolean('showItemHandle', true)}
            itemHandleSize={select('itemHandleSize', [20, 30, 40, 50, 60], 30)}
            draggable={boolean('Item 1 draggable', true)}
            onDragStart={action('Drag Item Container started!')}
            onDragOver={action('Dragging over an Item Container!')}
            onDrop={action('Item Droped!')}
          >
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
          <DraggableItem.ItemContainer
            showItemHandle={boolean('showItemHandle', true)}
            itemHandleSize={select('itemHandleSize', [20, 30, 40, 50, 60], 30)}
          >
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
          <DraggableItem.ItemContainer
            showItemHandle={boolean('showItemHandle', true)}
            itemHandleSize={select('itemHandleSize', [20, 30, 40, 50, 60], 30)}
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
            onClick={() => {}}
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
          onClick={() => {}}
        />
      </DraggableFooter>
    </Draggable>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Draggable
        `,
    },
  },
);
