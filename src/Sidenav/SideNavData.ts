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
    icon: iosSpeedometerOutline,
    disabled: false,
  },
  {
    label: 'Customers',
    to: {
      asPath: '/customers',
    },
    path: 'customers',
    icon: iosPeopleOutline,
    subNav: [
      {
        label: 'Distributors',
        path: '/distributors',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includesOneOf: ['read:distributor', 'read:distributor-general'],
              value: true,
            },
          ],
          value: false,
        },
        to: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:distributor',
              value: {
                asPath: '/distributors',
              },
            },
          ],
          value: {
            asPath: '/distributor-contexts',
          },
        },
        matchedUrls: ['/distributors', '/distributor-contexts'],
      },
      {
        label: 'Retailers',
        path: '/retailers',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:crops-retailer',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/retailers',
        },
      },
      {
        label: 'Pest Management',
        path: '/pest-management-customers',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:sentricon-target',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/pest-management-customers',
        },
      },
      {
        label: 'Farmers',
        path: '/linked-farmers',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:farmer-grp',
              value: true,
            },
          ],
          value: false,
        },
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
    icon: iosPricetagsOutline,
    subNav: [
      {
        label: 'Retailer Competitives',
        path: '/offers/retailer-competitives',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: 'read:competitive.retailer',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/retailer-competitives',
        },
      },
      {
        label: 'Distributor Competitives',
        path: '/offers/distributor-competitives',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: 'read:competitive.distributor',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/distributor-competitives',
        },
      },
      {
        label: 'Farmer Competitives',
        path: '/offers/farmer-competitives',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: 'read:competitive.farmer',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/farmer-competitives',
        },
      },
      {
        label: 'Plans & Agreements',
        path: '/offers/business-plans',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: 'read:business_plan',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/business-plans',
        },
      },
      {
        label: 'Claims',
        path: '/offers/claims',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: ['read:claim.phytogen', 'read:claim.cp'],
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/claims',
        },
      },
      {
        label: 'PQRs',
        path: '/offers/pqrs',
        show: {
          conditions: [
            {
              when: 'permissions',
              startsWith: 'read:claim.pqr',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/offers/pqrs',
        },
      },
    ],
    disabled: false,
  },
  {
    label: 'Products',
    path: '/products',
    icon: iosBoxOutline,
    exact: false,
    disabled: false,
    subNav: [
      {
        label: 'All Products',
        path: '/products',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:product',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/products',
        },
      },
      {
        label: 'Letter Generation',
        path: '/products/market-letters',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'write:mla-generator',
              value: true,
            },
          ],
          value: false,
        },
        to: {
          asPath: '/products/market-letters',
        },
      },
      {
        label: 'Seed Pricing',
        path: '/products/seed-pricing',
        exact: false,
        show: {
          conditions: [
            {
              when: 'permissions',
              includes: 'read:phytogen-seed-sku-pricing-file',
              value: true,
            },
          ],
          value: false,
        },
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
    icon: iosDownloadOutline,
    disabled: {
      // conditions: [
      //   {
      //     when: 'permissions',
      //     startsWith: 'read:report',
      //     value: false,
      //   },
      // ],
      value: true,
    },
  },
];

export default SideNavData;
