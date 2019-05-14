import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header.component';
import { select } from '@storybook/addon-knobs/react';

storiesOf('Typography', module).add(
  'Header',
  () => (
    <Header size={select('Header size', [10, 20], 10)}>Example Header</Header>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Headline.
        `,
    },
  },
);
