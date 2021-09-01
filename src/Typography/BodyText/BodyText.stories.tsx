import * as React from 'react';
import { BodyText } from './BodyText.component';

export default {
  title: 'Typography',
  component: BodyText,
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

export const Digits = args => <BodyText {...args}>Example BodyText</BodyText>;

Digits.args = {
  size: 10,
};

Digits.story = {
  parameters: {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI BodyText.
        `,
    },
  },
};
