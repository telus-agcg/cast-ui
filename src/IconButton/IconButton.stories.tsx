import * as React from 'react';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';

import { IconButton } from '../';

export default {
  title: 'Components/Interactions',
  component: IconButton,
  argTypes: {
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
    btnStyle: {
      control: {
        type: 'select',
        options: ['success', 'primary', 'danger', 'warning'],
      },
    },
    pixelButtonSize: {
      options: [20, 30, 40, 50, 60],
      control: {
        type: 'select',
      },
    },
    iconSize: {
      options: [20, 30, 40, 50, 60],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: {
        type: 'onClick',
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    btnSize: {
      control: false,
    },
    color: {
      control: false,
    },
    icon: {
      control: false,
    },
    backgroundColor: {
      control: false,
    },
    selected: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export const _IconButton = args => (
  <div>
    <IconButton data-testid="icon-button" icon={icAdd} {...args} />
  </div>
);

_IconButton.args = {
  rounded: true,
  outline: false,
  btnStyle: 'primary',
  pixelButtonSize: 40,
  iconSize: 20,
  disabled: false,
};
