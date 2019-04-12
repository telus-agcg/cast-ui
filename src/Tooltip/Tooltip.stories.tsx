import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from '../';
import { boolean, select } from '@storybook/addon-knobs';

storiesOf('Tooltip', module).add(
  'Controlled Tooltip',
  () => (
    <Tooltip
      content={<MyComponent />}
      isVisible={boolean('isVisible', false)}
      arrow={boolean('arrow', true)}
      size={select('size', ['small', 'regular', 'large'], 'regular')}
      placement={select(
        'placement',
        [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-end',
          'bottom-start',
          'left',
          'right',
        ],
        'top-start',
      )}
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
