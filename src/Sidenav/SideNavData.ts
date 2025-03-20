import { sideNavIcons } from '@icons';
import { SideNavItem } from './SideNavbar.component';

const SideNavData: SideNavItem[] = [
  {
    label: 'Dashboard',
    customIcon: sideNavIcons.SpeedIcon,
    disabled: false,
  },
  {
    label: 'Customers',
    customIcon: sideNavIcons.PeopleAltIcon,
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
    customIcon: sideNavIcons.PricetagsIcon,
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
    customIcon: sideNavIcons.Box3LineIcon,
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
    customIcon: sideNavIcons.DownloadIcon,
    disabled: true,
  },
];

export default SideNavData;
