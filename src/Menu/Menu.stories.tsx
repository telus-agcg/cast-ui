import * as React from 'react';

import { Button, Menu } from '..';

const description = `
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

export const _Menu = args => (
  <Menu
    triggerComponent={<Button>Submit Menu</Button>}
    data-testid="submit"
    {...args}
  />
);

_Menu.args = {
  items: menuData,
};
