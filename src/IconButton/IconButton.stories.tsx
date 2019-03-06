import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';

import { IconButton } from './';

storiesOf('IconButton', module).add(
  'IconButton',
  () => (
    <div>
      <IconButton
        icon={icAdd}
        rounded={boolean('rounded', true)}
        outline={boolean('outline', false)}
        btnStyle={select(
          'btnStyle',
          ['success', 'default', 'primary', 'danger', 'warning'],
          'primary',
        )}
        btnSize={select('btnSize', ['sm', 'md', 'lg'], 'sm')}
        pixelbuttonsize={select('pixelbuttonsize', [20, 30, 40, 50, 60], 40)}
        iconsize={select('iconsize', [20, 30, 40, 50, 60], 20)}
        disabled={boolean('disabled', false)}
        onClick={action('Icon Button Clicked!')}
      />
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a IconButton
        `,
    },
  },
);
