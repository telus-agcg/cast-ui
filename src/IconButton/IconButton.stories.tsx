import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';

import { IconButton } from '../';

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
          ['success', 'primary', 'danger', 'warning'],
          'primary',
        )}
        pixelButtonSize={select('pixelButtonSize', [20, 30, 40, 50, 60], 40)}
        iconSize={select('iconSize', [20, 30, 40, 50, 60], 20)}
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
