import * as React from 'react';
import { SideNavbar } from './SideNavbar.component';
import SideNavData from './SideNavData';
import { Meta, StoryObj } from '@storybook/react';
import { Themes } from '@themes';

const SIDENAV_LABELS = SideNavData.map((sn) => sn.label);

const meta: Meta<typeof SideNavbar> = {
  title: 'Components/Navigation/Sidenav',
  component: SideNavbar,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    allowHover: {
      control: 'boolean',
    },
    data: {
      control: false,
    },
    isOpen: {
      control: 'boolean',
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
      control: 'select',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SideNavbar>;

export const Regular: Story = {
  args: {
    allowHover: false,
    data: SideNavData,
    isOpen: true,
    theme: Themes.canopyTheme,
  },
  render: ({ isOpen, data, allowHover, currentActiveMenuItem, theme }) => {
    return (
      <div style={{ height: '600px', position: 'relative' }}>
        <SideNavbar
          isOpen={isOpen}
          data={data}
          allowHover={allowHover}
          currentActiveMenuItem={SideNavData.find(
            (sn) => sn.label === currentActiveMenuItem?.label,
          )}
          theme={theme}
        />
      </div>
    );
  },
};
