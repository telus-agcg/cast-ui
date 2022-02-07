import * as React from 'react';

import { Popover, Button } from '../';

const MyComponent = (props: any) => (
  <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
    This can be a component
    <br />
    or text.
  </div>
);

export default {
  title: 'Components/Data Display/Popover',
  component: Popover,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    isVisible: {
      control: {
        type: 'boolean',
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'regular', 'large'],
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
    children: {
      control: false,
    },
  },
};

export const _Popover = args => (
  <Popover content={<MyComponent />} {...args}>
    <span>
      <Button btnSize="md" btnStyle="primary" onClick={() => null}>
        This button has a controlled popover
      </Button>
    </span>
  </Popover>
);

_Popover.args = {
  isVisible: true,
  arrow: true,
  size: 'regular',
  placement: 'bottom',
};

_Popover.parameters = {
  info: {
    text: `
      ### Notes

      This is a Popover, based on [tippy.js](https://atomiks.github.io/tippyjs/).
      `,
  },
};
