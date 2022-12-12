import {
  iosPeopleOutline,
  iosPricetagsOutline,
  iosBoxOutline,
  iosDownloadOutline,
  iosSpeedometerOutline,
} from 'react-icons-kit/ionicons';

const SideNavData = [
  {
    label: 'Dashboard',
    icon: iosSpeedometerOutline,
    disabled: false,
  },
  {
    label: 'Customers',

    icon: iosPeopleOutline,
    subNav: [
      {
        label: 'Distributors',
      },
      {
        label: 'Retailers',
      },
      {
        label: 'Farmers',
      },
    ],
    disabled: false,
  },
  {
    label: 'Offers',

    icon: iosPricetagsOutline,
    subNav: [
      {
        label: 'Retailer',
      },
      {
        label: 'Distributor',
      },
      {
        label: 'Farmer',
      },
    ],
    disabled: false,
  },
  {
    label: 'Products',
    icon: iosBoxOutline,
    disabled: false,
    subNav: [
      {
        label: 'All Products',
      },
      {
        label: 'Letter Generation',
      },
      {
        label: 'Seed Pricing',
      },
    ],
  },
  {
    label: 'Report Download',
    icon: iosDownloadOutline,
    disabled: {
      value: true,
    },
  },
];

export default SideNavData;
