import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Caption } from './Caption.component';
import { select } from '@storybook/addon-knobs/react';

storiesOf('Typography', module).add(
  'Caption',
  () => (
    <Caption size={select('Caption size', ['10', '20'], '10')}>
      Example Caption
    </Caption>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Caption.
        `,
    },
  },
);
