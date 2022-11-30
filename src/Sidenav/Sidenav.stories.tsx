import SideNavbar from './SideNavbar.component';
import * as React from 'react';
import SideNavData from './SideNavData';

export default {
  title: 'Components/Navigation/Sidenav',
  component: SideNavbar,

  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },

    background: {
      control: {
        type: 'color',
      },
    },
    data: {
      control: false,
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    isSecondaryNavbarOpen: {
      control: {
        type: 'boolean',
      },
    },
    secondaryNavbarBackground: {
      control: {
        type: 'color',
      },
    },
    toggleSideNavbar: {
      action: {
        type: 'toggleSideNavbar',
      },
    },
    beforeToggle: {
      action: {
        type: 'beforeToggle',
      },
    },
    afterToggle: {
      action: {
        type: 'afterToggle',
      },
    },
    onSelect: {
      action: {
        type: 'onSelect',
      },
    },
    onSecondaryToggle: {
      action: {
        type: 'onSecondaryToggle',
      },
    },
    activeSideNavItem: {
      control: {
        type: 'boolean',
      },
    },
    activeSideNavItem2: {
      control: {
        type: 'boolean',
      },
    },
    borderLeft: {
      control: false,
    },
    borderRight: {
      control: false,
    },
    height: {
      control: false,
    },
    width: {
      control: false,
    },
    top: {
      control: false,
    },
    bottom: {
      control: false,
    },
    secondaryNavbarWidth: {
      control: false,
    },
    secondaryNavbarHeight: {
      control: false,
    },
    itemToggleOpenContent: {
      control: false,
    },
    itemToggleCloseContent: {
      control: false,
    },
    position: {
      control: {
        type: 'select',
        options: ['absolute', 'sticky', 'fixed'],
      },
    },
  },
};

export const Sidenav = ({
  onSelect,
  activeSideNavItem,
  activeSideNavItem2,
  isOpen,
  data,
  ...args
}) => (
  <div style={{ height: '600px', position: 'relative' }}>
    <SideNavbar isOpen={isOpen} data={data} />
  </div>
);

Sidenav.args = {
  top: 0,
  isOpen: true,
  isSecondaryNavbarOpen: true,
  secondaryNavbarBackground: '#ffffff',
  activeSideNavItem: true,
  activeSideNavItem2: false,
  data: SideNavData,
};
