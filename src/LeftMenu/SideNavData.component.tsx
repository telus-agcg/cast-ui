import React from 'react';
import {
  iosSpeedometerOutline,
  iosPeopleOutline,
  iosPricetagsOutline,
  iosBoxOutline,
  iosDownloadOutline,
} from 'react-icons-kit/ionicons';

const SideNavData = [
  {
    label: 'Dashboard',
    path: '/',
    icon: iosSpeedometerOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: false,
  },
  {
    label: 'Customers',
    path: '/customers',
    icon: iosPeopleOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: false,
    subNav: [
      {
        label: 'Distributors',
        path: '/customers/distributors',
        icon: 'CustomersIcon',
      },
      {
        label: 'Retailers',
        path: '/customers/retailers',
        icon: 'CustomersIcon',
      },

      {
        label: 'Farmers',
        path: '/customers/farmers',
        icon: 'CustomersIcon',
      },
    ],
  },
  {
    label: 'Offers',
    path: '/offers',
    icon: iosPricetagsOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: false,
    subNav: [
      {
        label: 'Retailer Competitives',
        path: '/offers/retailer-competitives',
        icon: '',
      },

      {
        label: 'Distributor Competitives',
        path: '/offers/distributor-competitives',
        icon: '',
      },
    ],
  },
  {
    label: 'Products',
    exact: false,
    path: '/products',
    icon: iosBoxOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: false,
    subNav: [
      {
        label: 'All Products',
        icon: '',
        path: '/products',
      },

      {
        label: 'Seed Pricing',
        icon: '',
        path: '/products/seed-pricing',
      },
    ],
  },
  {
    label: 'Report Download',
    path: '/reports',
    icon: iosDownloadOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: true,
  },
];

export default SideNavData;
