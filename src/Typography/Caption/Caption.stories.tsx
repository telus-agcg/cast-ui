import * as React from 'react';
import { Caption } from './Caption.component';

export default {
  title: 'Caption',
  component: Caption,
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

export const _Caption = args => <Caption {...args}>Example Caption</Caption>;

_Caption.args = {
  size: 10,
};

_Caption.parameters = {
  info: {
    text: `
      ### Notes

      Documentation and examples for Cast UI Caption.
      `,
  },
};
