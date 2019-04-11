import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SectionHeader } from './SectionHeader.component';

storiesOf('Typography', module).add(
  'SectionHeader',
  () => <SectionHeader>Example SectionHeader</SectionHeader>,
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Section Header.
        `,
    },
  },
);
