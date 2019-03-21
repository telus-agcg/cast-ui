import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SubHeading } from './SubHeading.component';

storiesOf('Typography', module).add(
  'SubHeading',
  () => (
    <SubHeading>16px Roboto Medium</SubHeading>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI SubHeading.
        `,
    },
  },
);
