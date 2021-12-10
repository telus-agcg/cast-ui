import * as React from 'react';
import { Display } from './Display.component';

export default {
  title: 'Components/Typography/Display',
  component: Display,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: [10, 20],
      },
    },
  },
};

export const _Display = args => <Display {...args}>Example Display</Display>;

_Display.args = {
  size: 10,
};

_Display.parameters = {
  info: {
    text: `
      ### Notes

      Documentation and examples for Cast UI Display.
      `,
  },
};
