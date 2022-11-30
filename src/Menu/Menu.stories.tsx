import * as React from 'react';

import { Menu } from '..';

const description = `
`;

export default {
  title: 'Components/Interactions/Menu',
  component: Menu,
  argTypes: {
    onClick: { action: 'onClick' },
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
  { label: 'Business Overview', to: '/business-plans/overview' },
  { label: 'Contracts Overview', to: '/business-plans/contracts' },
];

export const _Menu = (args) => (
  <Menu data-testid="submit" {...args}>
    Submit Menu
  </Menu>
);

_Menu.args = {
  items: menuData,
};
