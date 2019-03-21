import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SectionHeader } from './SectionHeader.component';

storiesOf('Typography', module).add(
  'SectionHeader',
  () => (
    <SectionHeader>Roboto 16 Medium, line: 1 px, #8D9599</SectionHeader>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Section Header.
        `,
    },
  },
);
