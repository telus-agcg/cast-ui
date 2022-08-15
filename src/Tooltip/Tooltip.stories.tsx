import * as React from 'react';
import Icon from 'react-icons-kit';
import { ic_info as InfoIcon } from 'react-icons-kit/md';

import { Tooltip } from '../';

export default {
  title: 'Components/Data Display/Tooltip',
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
  parameters: {
    docs: {
      description: {
        component:
          'This Tooltip is based on [tippy.js](https://atomiks.github.io/tippyjs/).',
      },
    },
  },
};

export const _Tooltip = args => (
  <>
    {'Click the icon to see the tooltip'}
    <Tooltip content={<MyComponent />} {...args} trigger="click">
      <span>
        <Icon
          size="20"
          icon={InfoIcon}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
      </span>
    </Tooltip>
  </>
);

_Tooltip.args = {
  arrow: true,
  size: 'regular',
  placement: 'bottom',
};

const MyComponent = (props: any) => (
  <div>This is a component to be rendered in the tooltip</div>
);
