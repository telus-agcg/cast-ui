import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { ListGroup, ListGroupItem } from '../';

storiesOf('List Group', module).add(
  'List Group',
  () => (
    <div>
      <ListGroup
        listGroupTheme={select('List Group Theme', ['light', 'dark'], 'light')}
      >
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
      </ListGroup>
      <ListGroup
        collapsible={boolean('collapsible1', true)}
        name="Collapsible List Group"
        listGroupTheme={select('List Group Theme', ['light', 'dark'], 'light')}
        border={boolean('border1', true)}
        chevronAlignment={select(
          'Chevron Alignment',
          ['right', 'left'],
          'right',
        )}
      >
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroup
          collapsible={boolean('collapsible2', true)}
          isCollapsed={boolean('isCollapsed2', false)}
          name="Nested Collapsible List Group"
          listGroupTheme={select(
            'List Group Theme',
            ['light', 'dark'],
            'light',
          )}
        >
          <ListGroupItem>List Item</ListGroupItem>
          <ListGroupItem>List Item</ListGroupItem>
          <ListGroupItem>List Item</ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  ),
  {
    info: {
      text: `
#### Notes

##### Collapsible List Group
A List Group can be made collapsible by including the **collapsible**, **isCollapsed**, and **name** props. 



        `,
    },
  },
);
