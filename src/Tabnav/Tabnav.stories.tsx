import * as React from 'react';

import { Tabnav, Header, Badge } from '../';

export default {
  title: 'Components/Navigation/Tabnav',
  component: Tabnav,
  subcomponents: {
    Header,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    onTabClick: {
      action: {
        type: 'onTabClick',
      },
    },
    background: {
      control: {
        type: 'control',
      },
    },
    borderTop: {
      control: false,
    },
    borderBottom: {
      control: false,
    },
    tabs: {
      control: false,
    },
    popoverProps: {
      control: false,
    },
    tabsBarProps: {
      control: false,
    },
  },
};

export const _Tabnav = ({ onTabClick }) => (
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
    onTabClick={onTabClick}
    popoverProps={{ placement: 'bottom-start' }}
    tabsBarProps={{ className: 'tabs-bar' }}
  />
);

export const _TabnavWithHeader = ({ onTabClick }) => (
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
    onTabClick={onTabClick}
    popoverProps={{ placement: 'bottom-start' }}
    tabsBarProps={{ className: 'tabs-bar' }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <Header>Agrineed, Inc. (62875)</Header>
      <Badge>Retailer</Badge>
    </div>
  </Tabnav>
);
