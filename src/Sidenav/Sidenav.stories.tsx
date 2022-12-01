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
  },
};

export const Sidenav = ({ onSelect, isOpen, data, ...args }) => (
  <div style={{ height: '600px', position: 'relative' }}>
    <SideNavbar isOpen={isOpen} data={data} />
  </div>
);

Sidenav.args = {
  allowHover: false,
  data: SideNavData,
  isOpen: true,
};
