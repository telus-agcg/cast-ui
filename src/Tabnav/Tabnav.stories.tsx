import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { Tabnav, Headline, Badge } from '../';

storiesOf('Tabnav', module).add(
  'Tabnav',
  () => (
    <Tabnav background={text('background', '')}>
      <div style={{ display: 'contents' }}>
        <Headline>Agrineed, Inc. (62875)</Headline>
        <Badge>Retailer</Badge>
      </div>
    </Tabnav>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Tabnav
        `,
    },
  },
);
