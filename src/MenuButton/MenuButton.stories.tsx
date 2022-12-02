import * as React from 'react';

import { MenuButton } from '../';

const description = `
`;

export default {
  title: 'Components/Interactions/MenuButton',
  component: MenuButton,
  argTypes: {
    btnStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
    },
    btnSize: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
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

const menuData = [{ label: 'Car' }, { label: 'Truck', disabled: true }];

export const _MenuButton = (args) => (
  <MenuButton data-testid="create-new" {...args}>
    Create New
  </MenuButton>
);

_MenuButton.args = {
  btnStyle: 'primary',
  btnSize: 'md',
  disabled: false,
  items: menuData,
};
