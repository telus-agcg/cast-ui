import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from './Title.component';
import { select } from '@storybook/addon-knobs/react';

storiesOf('Typography', module).add(
  'Title',
  () => (
    <Title size={select('Header size', ['10', '20'], '10')}>20px Medium</Title>
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
