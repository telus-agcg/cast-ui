import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SubTitle } from './SubTitle.component';

storiesOf('Typography', module).add(
  'SubTitle',
  () => (
    <SubTitle>18px Light</SubTitle>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI SubTitle.
        `,
    },
  },
);
