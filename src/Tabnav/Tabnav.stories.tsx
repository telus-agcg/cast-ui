import * as React from 'react';

import { Tabnav, Title, Badge } from '../';

export default {
  title: 'Components/Navigation/Tabnav',
  component: Tabnav,
  subcomponents: {
    Title,
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
        label: 'Plans',
        active: true,
        children: [
          { label: 'Overview', to: '/plans/overview' },
          { label: 'Contracts', to: '/plans/contracts' },
        ],
      },
      {
        label: 'Offers',
        active: false,
        children: [
          { label: 'Some Offers', to: '/offers/some', disabled: true },
          { label: 'Some Other Offers', to: '/offers/other' },
        ],
      },
      {
        label: 'Notes',
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
        label: 'Plans',
        active: false,
        children: [
          { label: 'Overview', to: '/plans/overview' },
          { label: 'Contracts', to: '/plans/contracts' },
        ],
      },
      {
        label: 'Offers',
        active: true,
        children: [
          { label: 'Some Offers', to: '/offers/some', disabled: true },
          { label: 'Some Other Offers', to: '/offers/other' },
        ],
      },
      {
        label: 'Notes',
        to: '/notes',
        className: 'notes',
      },
    ]}
    onTabClick={onTabClick}
    popoverProps={{ placement: 'bottom-start' }}
    tabsBarProps={{ className: 'tabs-bar' }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <Title size="20">Agrineed, Inc. (62875)</Title>
      <Badge>Retailer</Badge>
    </div>
  </Tabnav>
);
