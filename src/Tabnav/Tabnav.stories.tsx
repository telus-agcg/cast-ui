import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabnav, Header, Badge } from '../';

storiesOf('Tabnav', module).add(
  'Tabnav',
  () => (
    <Tabnav
      data-testid="some-tab-nav"
      tabs={[
        {
          label: 'Overview',
          'data-testid': 'overview',
          active: false,
          to: '/overview',
          className: 'overview',
        },
        {
          label: 'Business Plans',
          'data-testid': 'business-plans',
          active: false,
          children: [
            {
              label: 'Business Overview',
              to: '/business-plans/overview',
              'data-testid': 'business-overview',
            },
            {
              label: 'Contracts Overview',
              to: '/business-plans/contracts',
              'data-testid': 'contracts-overview',
            },
          ],
        },
        {
          label: 'Offers',
          'data-testid': 'offers',
          active: true,
          children: [
            { label: 'Claims', to: '/offers/claims', 'data-testid': 'claims' },
            { label: 'PQRs', to: '/offers/pqrs', 'data-testid': 'pqrs' },
            {
              label: 'Contracts',
              to: '/offers/contracts',
              'data-testid': 'contracts',
            },
            {
              label: 'Competitives',
              to: '/offers/competitives',
              'data-testid': 'competitives',
            },
            {
              label: 'Programs',
              to: '/offers/programs',
              'data-testid': 'programs',
            },
          ],
        },
        {
          label: 'Notes',
          'data-testid': 'notes',
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
