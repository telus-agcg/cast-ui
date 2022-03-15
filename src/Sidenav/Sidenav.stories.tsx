import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

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

storiesOf('Sidenav', module).add(
  'Sidenav',
  () => (
    <div style={{ height: '600px', position: 'relative' }}>
      <SideNavbar
        isOpen={boolean('isOpen', true)}
        background={text('background', '')}
        height={text('height', '')}
        width={text('width', '')}
        borderLeft={text('borderLeft', '')}
        borderRight={text('borderRight', '')}
        isSecondaryNavbarOpen={boolean('isSecondaryNavbarOpen', true)}
        secondaryNavbarWidth={text('secondaryNavbarWidth', '')}
        secondaryNavbarHeight={text('secondaryNavbarHeight', '')}
        secondaryNavbarBackground={text('secondaryNavbarBackground', '#FFFFFF')}
        onToggle={action('Toggle!')}
        beforeToggle={action('Before Toggle!')}
        afterToggle={action('After Toggle!')}
        onSelect={action('Selected!')}
        onSecondaryToggle={action('Toggle Secondary')}
      >
        <SideNavToggle />
        <SideNav top>
          <SideNavItem path="/home" data-testid="sidenav-home">
            <SideNavItemIcon>
              <Icon icon={iosHomeOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Home</SideNavItemText>
          </SideNavItem>
          <SideNavItem
            path="/documents"
            activeSideNavItem={boolean('Documents activeSideNavItem', true)}
            data-testid="sidenav-documents"
          >
            <SideNavItemIcon>
              <Icon icon={iosPaperOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Documents</SideNavItemText>
            <SideNav secondary>
              <SideNavItem
                path="/documents/home-documents"
                onSelect={action('Selected without redundancy!')}
                data-testid="sidenav-home-documents"
              >
                <div style={{ padding: '12px 0 12px 24px' }}>
                  Home Documents
                </div>
              </SideNavItem>
              <SideNavItem
                path="/documents/office-documents"
                data-testid="sidenav-office-documents"
              >
                <div style={{ padding: '12px 0 12px 24px' }}>
                  Office Documents
                </div>
              </SideNavItem>
            </SideNav>
          </SideNavItem>
          <SideNavItem
            path="/web"
            activeSideNavItem={boolean('Web activeSideNavItem', false)}
            data-testid="sidenav-web"
          >
            <SideNavItemIcon>
              <Icon icon={iosWorldOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>The Web</SideNavItemText>
            <SideNav top secondary>
              <SideNavItem path="/web/www" data-testid="sidenav-www">
                <div style={{ padding: '12px 0 12px 24px' }}>
                  World Wide Web
                </div>
              </SideNavItem>
              <SideNavItem path="/web/dark-web" data-testid="sidenav-dark-web">
                <div style={{ padding: '12px 0 12px 24px' }}>The Dark Web</div>
              </SideNavItem>
            </SideNav>
          </SideNavItem>
          <SideNavItem
            path="/currencies"
            disabled
            data-testid="sidenav-currencies"
          >
            <SideNavItemIcon>
              <Icon icon={socialBitcoinOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Currencies</SideNavItemText>
          </SideNavItem>
        </SideNav>
        <SideNav center>
          <SideNavItem path="/technology" data-testid="sidenav-technology">
            <SideNavItemIcon>
              <Icon icon={socialAndroidOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Technology</SideNavItemText>
          </SideNavItem>
        </SideNav>
        <SideNav bottom>
          <SideNavItem path="/reports" data-testid="sidenav-reports">
            <SideNavItemIcon>
              <Icon icon={iosPaperOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Reports</SideNavItemText>
          </SideNavItem>
          <SideNavItem path="/logout" data-testid="sidenav-logout">
            <SideNavItemIcon>
              <Icon icon={iosHomeOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Logout</SideNavItemText>
          </SideNavItem>
        </SideNav>
      </SideNavbar>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a sidenav
        `,
    },
  },
);
