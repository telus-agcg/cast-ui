import * as React from 'react';
import { Collapse } from '../';

export default {
  title: 'Components/Utility/Collapse',
  component: Collapse,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    transition: {
      control: {
        type: 'text',
      },
    },
    elementType: {
      control: false,
    },
    onInit: {
      control: false,
    },
    collapseHeight: {
      control: false,
    },
    className: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
    onChange: {
      action: false,
    },
  },
};

export const _Collapse = args => (
  <Collapse data-testid="lorem-collapse" {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Collapse>
);

_Collapse.args = {
  isOpen: true,
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
};
