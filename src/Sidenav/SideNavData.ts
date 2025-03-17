import { sideNavIcons } from "@icons";
import { SideNavItem } from "./SideNavbar.component";

const SideNavData: SideNavItem[] = [
  {
    label: "Dashboard",
    customIcon: sideNavIcons.Speedometer,
    disabled: false,
  },
  {
    label: "Customers",
    customIcon: sideNavIcons.PeopleAlt,
    subNav: [
      {
        label: "Distributors",
      },
      {
        label: "Retailers",
      },
      {
        label: "Farmers",
      },
    ],
    disabled: false,
  },
  {
    label: "Offers",
    customIcon: sideNavIcons.Pricetags,
    subNav: [
      {
        label: "Retailer",
      },
      {
        label: "Distributor",
      },
      {
        label: "Farmer",
      },
    ],
    disabled: false,
  },
  {
    label: "Products",
    customIcon: sideNavIcons.Box3Line,
    disabled: false,
    subNav: [
      {
        label: "All Products",
      },
      {
        label: "Letter Generation",
      },
      {
        label: "Seed Pricing",
      },
    ],
  },
  {
    label: "Report Download",
    customIcon: sideNavIcons.Download,
    disabled: true,
  },
];

export default SideNavData;
