import * as React from 'react';
import Icon from 'react-icons-kit';
import { socialBitcoinOutline } from 'react-icons-kit/ionicons/socialBitcoinOutline';
import { socialAndroidOutline } from 'react-icons-kit/ionicons/socialAndroidOutline';
import { iosHomeOutline } from 'react-icons-kit/ionicons/iosHomeOutline';
import { iosPaperOutline } from 'react-icons-kit/ionicons/iosPaperOutline';
import { iosWorldOutline } from 'react-icons-kit/ionicons/iosWorldOutline';
import {
  SideNavbar,
  SideNav,
  SideNavItem,
  SideNavItemIcon,
  SideNavItemText,
  SideNavToggle,
} from '../';

export default {
  title: 'Components/Navigation/Sidenav',
  component: SideNavbar,
  subcomponents: {
    SideNav,
    SideNavItem,
    SideNavItemIcon,
    SideNavItemText,
    SideNavToggle,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
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

export const Sidenav = ({
  onSelect,
  activeSideNavItem,
  activeSideNavItem2,
  ...args
}) => (
  <div style={{ height: '600px', position: 'relative' }}>
    <SideNavbar {...args}>
      <SideNavToggle />
      <SideNav top>
        <SideNavItem path="/home">
          <SideNavItemIcon>
            <Icon icon={iosHomeOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Home</SideNavItemText>
        </SideNavItem>
        <SideNavItem path="/documents" activeSideNavItem={activeSideNavItem}>
          <SideNavItemIcon>
            <Icon icon={iosPaperOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Documents</SideNavItemText>
          <SideNav secondary>
            <SideNavItem path="/documents/home-documents" onSelect={onSelect}>
              <div style={{ padding: '12px 0 12px 24px' }}>Home Documents</div>
            </SideNavItem>
            <SideNavItem path="/documents/office-documents">
              <div style={{ padding: '12px 0 12px 24px' }}>
                Office Documents
              </div>
            </SideNavItem>
          </SideNav>
        </SideNavItem>
        <SideNavItem path="/web" activeSideNavItem={activeSideNavItem2}>
          <SideNavItemIcon>
            <Icon icon={iosWorldOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>The Web</SideNavItemText>
          <SideNav top secondary>
            <SideNavItem path="/web/www">
              <div style={{ padding: '12px 0 12px 24px' }}>World Wide Web</div>
            </SideNavItem>
            <SideNavItem path="/web/dark-web">
              <div style={{ padding: '12px 0 12px 24px' }}>The Dark Web</div>
            </SideNavItem>
          </SideNav>
        </SideNavItem>
        <SideNavItem path="/currencies" disabled>
          <SideNavItemIcon>
            <Icon icon={socialBitcoinOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Currencies</SideNavItemText>
        </SideNavItem>
      </SideNav>
      <SideNav center>
        <SideNavItem path="/technology">
          <SideNavItemIcon>
            <Icon icon={socialAndroidOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Technology</SideNavItemText>
        </SideNavItem>
        <SideNavItem path="/currencies" disabled>
          <SideNavItemIcon>
            <Icon icon={socialBitcoinOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Currencies</SideNavItemText>
        </SideNavItem>
      </SideNav>
      <SideNav bottom>
        <SideNavItem path="/documents">
          <SideNavItemIcon>
            <Icon icon={iosPaperOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Documents</SideNavItemText>
        </SideNavItem>
        <SideNavItem path="/home">
          <SideNavItemIcon>
            <Icon icon={iosHomeOutline} size={24} />
          </SideNavItemIcon>
          <SideNavItemText>Home</SideNavItemText>
        </SideNavItem>
      </SideNav>
    </SideNavbar>
  </div>
);

Sidenav.args = {
  isOpen: true,
  isSecondaryNavbarOpen: true,
  secondaryNavbarBackground: '#ffffff',
  activeSideNavItem: true,
  activeSideNavItem2: false,
};
