import * as React from 'react';

import { Button, Menu } from '../';

const description = `
Cast UI custom buttons come with support for multiple sizes, states and semantic styles ideal for use for action in forms, dialogs and more.

#### Styles
Cast UI includes several predefined button styles, each serving its own semantic purpose,customization is fully supported through the use of custom themes.
The predefined styles, accepted by **btnStyle** attribute include
- primary
- success
- warning
- danger
- default

#### Outline Buttons
In the event you need a button but not the background colors they bring, you can set the **outline** attribute to **true** and the button will only have an outline on the border. No background colors.
However, on active/hover states, the buttons will use their expected background colors.

#### Sizes
The Button can also be sized to fit the needs of the view whether larger or smaller buttons are the requirement.
The size options, accepted by **btnSize** attribute include
- sm - small
- md - medium (default)
- lg - large

#### Active State
The Button will appear pressed, with a darker background and darker border, when active.
The active state can also be triggered with the **selected** prop by setting it to **true**.

#### Disabled State
To make the Button look inactive add the standard HTML button **disabled** attribute to the component. The attribute is boolean in nature, therefore it will accept **true** or **false** as values as well.
      `;

export default {
  title: 'Components/Interactions/Button',
  component: Button,
  argTypes: {
    outline: {
      control: {
        type: 'boolean',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
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
    displayType: {
      options: ['button', 'menu'],
      control: { type: 'radio' },
    },
    onClick: { action: 'onClick' },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
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

export const _Button = args => (
  <Button id={'testId'} data-testid="submit" {...args}>
    Submit Button
  </Button>
);

_Button.args = {
  outline: false,
  selected: false,
  btnStyle: 'primary',
  btnSize: 'md',
  disabled: false,
};

export const _ButtonWithMenu = args => (
  <Menu
    items={[{ label: 'Car' }, { label: 'Truck', disabled: true }]}
    triggerComponent={
      <Button data-testid="create-new" {...args}>
        Create New
      </Button>
    }
  />
);

_ButtonWithMenu.args = {
  outline: false,
  selected: false,
  btnStyle: 'primary',
  btnSize: 'md',
  disabled: false,
  displayType: 'menu',
};
