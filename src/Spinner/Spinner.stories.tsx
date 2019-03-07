import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';

import { Spinner } from './Spinner.component';

storiesOf('Spinner', module).add(
  'Spinner',
  () => (
    <Spinner
      backgroundColor={text('backgroundColor', 'lightGray')}
      borderColor={text('borderColor', 'blue')}
      size={select('size', [20, 30, 40, 50, 60, 70], 50)}
      borderWidth={select('borderWidth', [1, 2, 3, 4, 5], 3)}
      animationSpeed={select('animationSpeed', [1, 2, 3, 4, 5], 1)}
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is a spinner
        `,
    },
  },
);
