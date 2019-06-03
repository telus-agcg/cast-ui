import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabnav, Header, Badge } from '../';

storiesOf('Tabnav', module).add(
  'Tabnav',
  () => (
    <Tabnav
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
            { label: 'Claims', to: '/offers/claims', disabled: true },
            { label: 'PQRs', to: '/offers/pqrs' },
            { label: 'Contracts', to: '/offers/contracts' },
            { label: 'Competitives', to: '/offers/competitives' },
            { label: 'Programs', to: '/offers/programs' },
          ],
        },
        {
          label: 'Notes',
          active: true,
          to: '/notes',
          className: 'notes',
        },
      ]}
      onTabClick={action('Tab clicked!')}
      popoverProps={{ placement: 'bottom-start' }}
      tabsBarProps={{ className: 'tabs-bar' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Header>Agrineed, Inc. (62875)</Header>
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
