import * as React from 'react';
import { ListGroup, ListGroupItem } from '../';

export default {
  title: 'List Group',
  component: ListGroup,
  subcomponents: {
    ListGroupItem,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    listGroupTheme: {
      options: ['light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    collapsible: {
      control: {
        type: 'boolean',
      },
    },
    border: {
      control: {
        type: 'boolean',
      },
    },
    chevronAlignment: {
      options: ['right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    isCollapsed: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: false,
    },
    name: {
      control: false,
    },
    onToggle: {
      action: {
        type: 'onToggle',
      },
    },
    listGroupTheme2: {
      options: ['light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export const _ListGroup = ({
  collapsible,
  listGroupTheme,
  border,
  chevronAlignment,
  collapsible2,
  listGroupTheme2,
  isCollapsed,
}) => (
  <div>
    <ListGroup listGroupTheme={listGroupTheme}>
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroupItem>List Item</ListGroupItem>
    </ListGroup>
    <ListGroup
      collapsible={collapsible}
      name="Collapsible List Group"
      listGroupTheme={listGroupTheme}
      border={border}
      chevronAlignment={chevronAlignment}
    >
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroupItem>List Item</ListGroupItem>
      <ListGroup
        collapsible={collapsible2}
        isCollapsed={isCollapsed}
        name="Nested Collapsible List Group"
        listGroupTheme={listGroupTheme2}
      >
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
        <ListGroupItem>List Item</ListGroupItem>
      </ListGroup>
    </ListGroup>
  </div>
);

_ListGroup.args = {
  collapsible: true,
  listGroupTheme: 'light',
  border: true,
  chevronAlignment: 'right',
  collapsible2: true,
  listGroupTheme2: 'light',
  isCollapsed: false,
};

_ListGroup.story = {
  parameters: {
    info: {
      text: `
#### Notes

##### Collapsible List Group
A List Group can be made collapsible by including the **collapsible**, **isCollapsed**, and **name** props. 



        `,
    },
  },
};
