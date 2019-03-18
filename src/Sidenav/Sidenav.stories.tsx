import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

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
} from '../';

storiesOf('Sidenav', module).add(
  'Sidenav',
  () => (
    <div style={{ height: '600px', position: 'relative' }}>
      <SideNavbar
        isOpen={boolean('isOpen', true)}
        background={text('background', 'lightBackground')}
        height={text('height', '')}
        width={text('width', '')}
        borderLeft={text('borderLeft', '')}
        borderRight={text('borderRight', '')}
        isSecondaryNavbarOpen={boolean('isSecondaryNavbarOpen', true)}
        secondaryNavbarWidth={text('secondaryNavbarWidth', '')}
        secondaryNavbarHeight={text('secondaryNavbarHeight', '')}
        secondaryNavbarBackground={text('secondaryNavbarBackground', 'white')}
      >
        <SideNav top>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={iosHomeOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Home</SideNavItemText>
          </SideNavItem>
          <SideNavItem activeSideNavItem>
            <SideNavItemIcon>
              <Icon icon={iosPaperOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Documents</SideNavItemText>
            <SideNav top secondary>
              <SideNavItem>
                <div style={{ padding: '12px 0 12px 12px' }}>
                  Home Documents
                </div>
              </SideNavItem>
              <SideNavItem>
                <div style={{ padding: '12px 0 12px 12px' }}>
                  Office Documents
                </div>
              </SideNavItem>
            </SideNav>
          </SideNavItem>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={iosWorldOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>The Web</SideNavItemText>
            <SideNav top secondary>
              <SideNavItem>
                <div style={{ padding: '12px 0 12px 12px' }}>
                  World Wide Web
                </div>
              </SideNavItem>
              <SideNavItem>
                <div style={{ padding: '12px 0 12px 12px' }}>The Dark Web</div>
              </SideNavItem>
            </SideNav>
          </SideNavItem>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={socialBitcoinOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Currencies</SideNavItemText>
          </SideNavItem>
        </SideNav>
        <SideNav center>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={socialAndroidOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Technology</SideNavItemText>
          </SideNavItem>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={socialBitcoinOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Currencies</SideNavItemText>
          </SideNavItem>
        </SideNav>
        <SideNav bottom>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={iosPaperOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Documents</SideNavItemText>
          </SideNavItem>
          <SideNavItem>
            <SideNavItemIcon>
              <Icon icon={iosHomeOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Home</SideNavItemText>
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
