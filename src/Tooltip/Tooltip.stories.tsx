import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from '../';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Tooltip', module).add(
  'Controlled Tooltip',
  () => (
    <Tooltip
      content={<MyComponent />}
      isVisible={boolean('isOpen', false)}
      trigger="manual"
    >
      <button>This button has a controlled tooltip</button>
    </Tooltip>
  ),
  {
    info: {
      text: `
      ### Notes

      This is a Tooltip, based on [tippy.js](https://atomiks.github.io/tippyjs/).
    `,
    },
  },
);

const MyComponent = (props: any) => (
  <div>This is a component to be rendered in the tooltip</div>
);
