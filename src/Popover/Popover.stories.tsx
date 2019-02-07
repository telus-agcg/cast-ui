import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button/Button.component';
import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';
import { boolean, select } from '@storybook/addon-knobs';

const MyComponent = (props: any) => (
  <div>
    This can be a component
    <br />
    or text.
  </div>
);

storiesOf('Popover', module).add(
  'ControlledPopover',
  wInfo(`

  ### Notes

  This is a Popover, based on [tippy.js](https://atomiks.github.io/tippyjs/).
  `)(() => (
    <Popover
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
        'bottom-end',
      )}
      trigger="manual"
    >
      <Button btnSize="md" btnStyle="primary" onClick={() => null}>
        This button has a controlled popover
      </Button>
    </Popover>
  )),
);
