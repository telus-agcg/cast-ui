import * as React from 'react';

import { MenuButton } from '../';

const description = `
`;

export default {
  title: 'Components/Interactions/MenuButton',
  component: MenuButton,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const menuData = [{ label: 'Car' }, { label: 'Truck', disabled: true }];

export const _MenuButton = args => (
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
