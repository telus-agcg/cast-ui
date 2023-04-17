import * as React from 'react';

import { Button, Link, Menu } from '..';

const description = `
A Menu is a specialized Popover wrapper that displays items to select when triggered via click, typically with a Link or Button (with displayType="menu").
`;

export default {
  title: 'Components/Interactions/Menu',
  component: Menu,
  argTypes: {
    onItemClick: { action: 'onItemClick' },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const menuData = [
  {
    label: 'Vanilla',
    id: 'vanilla',
    disabled: true,
  },
  { label: 'Chocolate', id: 'chocolate' },
];

export const _MenuFromLink = args => (
  <Menu
    triggerComponent={<Link>Show options</Link>}
    data-testid="submit"
    {...args}
  />
);

_MenuFromLink.args = {
  items: menuData,
};

export const _MenuFromButton = args => (
  <Menu
    triggerComponent={<Button displayType="menu">Submit Menu</Button>}
    data-testid="submit"
    {...args}
  />
);

_MenuFromButton.args = {
  items: menuData,
};
