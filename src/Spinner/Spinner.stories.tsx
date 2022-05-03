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
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        type: 'select',
        options: [20, 30, 40, 50, 60, 70],
      },
    },
    borderWidth: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    animationSpeed: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    borderColor: {
      control: false,
    },
    transitionType: {
      control: false,
    },
  },
};

export const _Spinner = args => <Spinner {...args} />;

_Spinner.args = {
  size: 50,
  borderWidth: 3,
  animationSpeed: 1,
};
