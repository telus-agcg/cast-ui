import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BodyText } from './BodyText.component';
import { select } from '@storybook/addon-knobs';

storiesOf('Typography', module).add(
  'Digits',
  () => (
    <BodyText size={select('Caption size', [10, 20], 10)}>
      Example BodyText
    </BodyText>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI BodyText.
        `,
    },
  },
);
