import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from './Title.component';

storiesOf('Typography', module).add(
  'Title',
  () => (
    <Title>20px Medium</Title>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Title.
        `,
    },
  },
);
