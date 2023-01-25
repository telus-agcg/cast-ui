import SideNavbar from './SideNavbar.component';
import * as React from 'react';
import SideNavData from './SideNavData';
const SIDENAV_LABELS = SideNavData.map((sn) => sn.label);
export default {
  title: 'Components/Navigation/Sidenav',
  component: SideNavbar,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    allowHover: {
      control: {
        type: 'boolean',
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
    onSelect: {
      action: {
        type: 'onSelect',
      },
    },
    toggleSideNavbar: {
      action: {
        type: 'toggleSideNavbar',
      },
    },
    currentActiveMenuItem: {
      options: SIDENAV_LABELS,
      control: { type: 'select' },
    },
  },
};

export const Sidenav = ({
  onSelect,
  isOpen,
  allowHover,
  data,
  currentActiveMenuItem,
  ...args
}) => (
  <div style={{ height: '600px', position: 'relative' }}>
    <SideNavbar
      isOpen={isOpen}
      data={data}
      allowHover={allowHover}
      currentActiveMenuItem={SideNavData.find(
        (sn) => sn.label === currentActiveMenuItem,
      )}
    />
  </div>
);

Sidenav.args = {
  allowHover: false,
  data: SideNavData,
  isOpen: true,
};
