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
      borderTop={text('borderTop', '')}
      borderBottom={text('borderBottom', '1px solid grey')}
      tabs={[
        {
          label: 'Overview',
          active: false,
          to: '/overview',
          className: 'overview',
        },
        {
          label: 'Business Plans',
          active: false,
          children: [
            { label: 'Business Overview', to: '/business-plans/overview' },
            { label: 'Contracts Overview', to: '/business-plans/contracts' },
          ],
        },
        {
          label: 'Offers',
          active: true,
          children: [
            { label: 'Claims', to: '/offers/claims' },
            { label: 'PQRs', to: '/offers/pqrs' },
            { label: 'Contracts', to: '/offers/contracts' },
            { label: 'Competitives', to: '/offers/competitives' },
            { label: 'Programs', to: '/offers/programs' },
          ],
        },
      ]}
      onTabClick={action('Tab clicked!')}
      popoverProps={{ placement: 'bottom-start' }}
      tabsBarProps={{ className: 'tabs-bar' }}
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
