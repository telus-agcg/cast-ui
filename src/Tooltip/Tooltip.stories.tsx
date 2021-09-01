import * as React from 'react';

import { Tooltip } from '../';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-end',
          'bottom-start',
          'left',
          'right',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'regular', 'large'],
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const ControlledTooltip = args => (
  <Tooltip content={<MyComponent />} {...args} trigger="click">
    <button>This button has a controlled tooltip</button>
  </Tooltip>
);

ControlledTooltip.args = {
  arrow: true,
  size: 'regular',
  placement: 'bottom',
};

ControlledTooltip.story = {
  parameters: {
    info: {
      text: `
      ### Notes

      This is a Tooltip, based on [tippy.js](https://atomiks.github.io/tippyjs/).
    `,
    },
  },
};

const MyComponent = (props: any) => (
  <div>This is a component to be rendered in the tooltip</div>
);
