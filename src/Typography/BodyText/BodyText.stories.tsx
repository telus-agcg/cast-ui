import * as React from 'react';
import { BodyText } from './BodyText.component';

export default {
  title: 'Components/Typography',
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

export const _BodyText = args => (
  <BodyText {...args}>Example BodyText</BodyText>
);

_BodyText.args = {
  size: 10,
};
