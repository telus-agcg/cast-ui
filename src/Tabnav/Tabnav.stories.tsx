import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Tabnav, Headline, Badge } from '../';

storiesOf('Tabnav', module).add(
  'Tabnav',
  () => (
    <Tabnav
      background={text('background', '')}
      height={text('height', '')}
      borderTop={text('borderTop', '')}
      borderBottom={text('borderBottom', '1px solid grey')}
      tabs={[
        { label: 'Overview', to: '/overview' },
        {
          label: 'Business Plans',
          active: true,
          children: [
            { label: 'Business Overview', to: '/overview' },
            { label: 'Contracts Overview', to: '/overview' },
          ],
        },
      ]}
      onTabClick={action('Tab clicked!')}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
