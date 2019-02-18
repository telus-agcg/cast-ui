import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
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
import { wInfo } from '../storybook-utils';

storiesOf('Draggable', module).add(
  'Draggable',
  wInfo(`

  ### Notes

  This is a Draggable

  ### Usage
  ~~~js
    <Draggable
      color="lightGray"
      bordercolor="lightGray"
      guttersize="md"
      parenthandlesize={30}
      itemhandlesize={30}
    />
  ~~~`)(() => (
    <Draggable
      draggablestyle={select(
        'draggablestyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'primary',
      )}
      bordercolor={select(
        'bordercolor',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      guttersize={select('guttersize', ['sm', 'md', 'lg'], 'md')}
      parenthandlesize={select('parenthandlesize', [20, 30, 40, 50, 60], 30)}
      itemhandlesize={select('itemhandlesize', [20, 30, 40, 50, 60], 30)}>
      <DraggableInfo>
        <IconButton
          rounded
          icon={info}
          iconsize={10}
          pixelbuttonsize={18}
          btnSize="sm"
          btnStyle="success"
          onClick={() => {}}
        />
        To create a new group, drag one qualification on top of another
      </DraggableInfo>
      <DraggableParent.Parent>
        <DraggableItem>
          Qualification: Geography - AK: Aleutian East - AZ, NC, WA
        </DraggableItem>
        <DraggableParent.RightContent>
          <IconButton
            rounded
            icon={icAdd}
            iconsize={20}
            pixelbuttonsize={32}
            btnSize="sm"
            btnStyle="primary"
            onClick={() => {}}
          />
        </DraggableParent.RightContent>
      </DraggableParent.Parent>
      <DraggableParent.Parent>
        <DraggableItem>
          Qualification: Geography - AK: Aleutian East - AZ, NC, WA
        </DraggableItem>
        <DraggableParent.RightContent>
          <IconButton
            rounded
            icon={icAdd}
            iconsize={20}
            pixelbuttonsize={32}
            btnSize="sm"
            btnStyle="primary"
            onClick={() => {}}
          />
        </DraggableParent.RightContent>
      </DraggableParent.Parent>
      <DraggableFooter>
        <IconButton
          rounded
          icon={icAdd}
          iconsize={20}
          pixelbuttonsize={32}
          btnSize="sm"
          btnStyle="primary"
          onClick={() => {}}
        />
      </DraggableFooter>
    </Draggable>
  )),
);
