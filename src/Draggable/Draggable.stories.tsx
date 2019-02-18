import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Draggable, DraggableParent, DraggableItem } from './';
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
      <DraggableParent>
        <DraggableItem>
          Qualification: Geography - AK: Aleutian East - AZ, NC, WA{' '}
        </DraggableItem>
      </DraggableParent>
    </Draggable>
  )),
);
