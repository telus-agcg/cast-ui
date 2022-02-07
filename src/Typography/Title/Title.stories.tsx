import * as React from 'react';
import { Title } from './Title.component';

export default {
  title: 'Components/Typography/Title',
  component: Title,
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

export const _Title = args => <Title {...args}>20px Medium</Title>;

_Title.args = {
  size: 10,
};
