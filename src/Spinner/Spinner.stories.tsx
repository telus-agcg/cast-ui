import * as React from 'react';

import { Spinner } from '../';

export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
        options: [20, 30, 40, 50, 60, 70],
      },
    },
    animationSpeed: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    transitionType: {
      control: false,
    },
  },
};

export const _Spinner = args => <Spinner {...args} />;

_Spinner.args = {
  size: 50,
  animationSpeed: 1,
};
