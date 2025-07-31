import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ListGroup } from './ListGroup.component';
import { ListGroupItem } from './ListGroupItem.component';

type ListGroupCustomProps = React.ComponentProps<typeof ListGroup> &
  React.ComponentProps<typeof ListGroupItem>;

const meta: Meta<ListGroupCustomProps> = {
  title: 'Components/Data Display/List Group',
  component: ListGroup,
  subcomponents: {
    ListGroupItem: ListGroupItem as React.ComponentType<unknown>,
  },
};

export default meta;

type Story = StoryObj<ListGroupCustomProps>;

export const _ListGroup: Story = {
  args: {
    collapsible: true,
    listGroupTheme: 'light',
    border: true,
    isCollapsed: false,
  },
  render: ({ listGroupTheme, collapsible, border }) => (
    <div>
      <ListGroup listGroupTheme={listGroupTheme}>
        <ListGroupItem data-testid="list-item-1">List Item</ListGroupItem>
        <ListGroupItem data-testid="list-item-2">List Item</ListGroupItem>
        <ListGroupItem data-testid="list-item-3">List Item</ListGroupItem>
      </ListGroup>
      <ListGroup
        collapsible={collapsible}
        name="Collapsible List Group"
        listGroupTheme={listGroupTheme}
        border={border}
      >
        <ListGroupItem data-testid="collapsible-list-item-1">
          List Item
        </ListGroupItem>
        <ListGroupItem data-testid="collapsible-list-item-2">
          List Item
        </ListGroupItem>
        <ListGroupItem data-testid="collapsible-list-item-3">
          List Item
        </ListGroupItem>
        <ListGroupItem data-testid="collapsible-list-item-4">
          List Item
        </ListGroupItem>
        <ListGroup
          collapsible={false}
          isCollapsed={true}
          name="Nested Collapsible List Group"
          listGroupTheme={'light'}
        >
          <ListGroupItem data-testid="collapsible-nested-list-item-1">
            List Item
          </ListGroupItem>
          <ListGroupItem data-testid="collapsible-nested-list-item-2">
            List Item
          </ListGroupItem>
          <ListGroupItem data-testid="collapsible-nested-list-item-3">
            List Item
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  ),
};
