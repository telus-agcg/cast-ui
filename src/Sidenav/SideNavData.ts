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
    to: {
      asPath: '/',
    },
    customIcon: iosSpeedometerOutline,
    disabled: false,
  },
  {
    label: 'Customers',
    to: {
      asPath: '/customers',
    },
    path: 'customers',
    customIcon: iosPeopleOutline,
    subNav: [
      {
        label: 'Distributors',
        path: '/distributors',
        exact: false,
        to: {
          asPath: '/distributors',
        },
      },
      {
        label: 'Retailers',
        path: '/retailers',
        exact: false,
        to: {
          asPath: '/retailers',
        },
      },
      {
        label: 'Farmers',
        path: '/linked-farmers',
        exact: false,
        to: {
          asPath: '/linked-farmers',
        },
      },
    ],
    disabled: false,
  },
  {
    label: 'Offers',
    path: '/offers',
    to: {
      asPath: '/offers',
    },
    customIcon: iosPricetagsOutline,
    subNav: [
      {
        label: 'Retailer',
        path: '/offers/retailer-competitives',
        to: {
          asPath: '/offers/retailer-competitives',
        },
      },
      {
        label: 'Distributor',
        path: '/offers/distributor-competitives',
        to: {
          asPath: '/offers/distributor-competitives',
        },
      },
      {
        label: 'Farmer',
        path: '/offers/farmer-competitives',
        to: {
          asPath: '/offers/farmer-competitives',
        },
      },
    ],
    disabled: false,
  },
  {
    label: 'Products',
    path: '/products',
    customIcon: iosBoxOutline,
    exact: false,
    disabled: false,
    subNav: [
      {
        label: 'All Products',
        path: '/products',
        exact: false,
        to: {
          asPath: '/products',
        },
      },
      {
        label: 'Letter Generation',
        path: '/products/market-letters',
        exact: false,
        to: {
          asPath: '/products/market-letters',
        },
      },
      {
        label: 'Seed Pricing',
        path: '/products/seed-pricing',
        exact: false,
        to: {
          asPath: '/products/seed-pricing',
        },
      },
    ],
  },
  {
    label: 'Report Download',
    exact: false,
    path: '/reports',
    customIcon: iosDownloadOutline,
    disabled: {
      value: true,
    },
  },
];

export default SideNavData;
