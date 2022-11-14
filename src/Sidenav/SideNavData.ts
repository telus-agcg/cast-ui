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
    reactIcon: iosSpeedometerOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: false,
  },
  {
    label: 'Customers',
    path: '/customers',
    reactIcon: iosPeopleOutline,
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
    reactIcon: iosPricetagsOutline,
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
    reactIcon: iosBoxOutline,
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
    reactIcon: iosDownloadOutline,
    iconOpen: '',
    iconClosed: '',
    disabled: true,
  },
];

export default SideNavData;
