import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SubHeading } from './SubHeading.component';

storiesOf('Typography', module).add(
  'SubHeading',
  () => <SubHeading>Example SubHeading</SubHeading>,
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI SubHeading.
        `,
    },
  },
);
