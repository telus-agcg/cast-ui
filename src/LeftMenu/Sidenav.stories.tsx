import SideNavbar from './SideNavbar.component';
import * as React from 'react';

export default {
  title: 'Components/Navigation/LeftMenu',
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
    onToggle: {
      action: {
        type: 'onToggle',
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

export const LeftMenu = ({
  onSelect,
  activeSideNavItem,
  activeSideNavItem2,
  ...args
}) => (
  <div style={{ height: '600px', position: 'relative' }}>
    <SideNavbar />
  </div>
);

LeftMenu.args = {
  isSecondaryNavbarOpen: true,
  secondaryNavbarBackground: '#ffffff',
  activeSideNavItem: true,
  activeSideNavItem2: false,
};
