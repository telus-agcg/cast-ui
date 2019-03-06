import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button.component';

storiesOf('Button', module).add(
  'Button',
  () => (
    <Button
      outline={boolean('outline', false)}
      selected={boolean('selected', false)}
      btnStyle={select(
        'btnStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'default',
      )}
      btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      onClick={action('Clicked!')}
    >
      Submit Button
    </Button>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a button
        `,
    },
  },
);
