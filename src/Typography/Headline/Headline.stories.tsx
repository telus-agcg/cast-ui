import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Headline } from './Headline.component';

storiesOf('Typography', module).add(
  'Headline',
  () => <Headline>Example Headline</Headline>,
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Headline.
        `,
    },
  },
);
