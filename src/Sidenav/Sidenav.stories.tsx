import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';
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
        background={text('background', 'lightBackground')}
        height={text('height', '')}
        width={text('width', '')}
        borderLeft={text('borderLeft', '')}
        borderRight={text('borderRight', '')}
        isSecondaryNavbarOpen={boolean('isSecondaryNavbarOpen', true)}
        secondaryNavbarWidth={text('secondaryNavbarWidth', '')}
        secondaryNavbarHeight={text('secondaryNavbarHeight', '')}
        secondaryNavbarBackground={text('secondaryNavbarBackground', 'white')}
        onToggle={action('Toggle!')}
        beforeToggle={action('Before Toggle!')}
        afterToggle={action('After Toggle!')}
        onSelect={action('Selected!')}
        itemToggleOpenContent={<Icon icon={IKAR} size={24} />}
        itemToggleCloseContent={<Icon icon={IKAL} size={24} />}
      >
        <SideNavToggle
          openContent={<Icon icon={IKAR} size={24} />}
          closeContent={<Icon icon={IKAL} size={24} />}
        />
        <SideNav top>
          <SideNavItem path="/home">
            <SideNavItemIcon>
              <Icon icon={iosHomeOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Home</SideNavItemText>
          </SideNavItem>
          <SideNavItem
            path="/documents"
            activeSideNavItem={boolean('Documents activeSideNavItem', true)}
          >
            <SideNavItemIcon>
              <Icon icon={iosPaperOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>Documents</SideNavItemText>
            <SideNav secondary>
              <SideNavItem path="/documents/home-documents">
                <div style={{ padding: '12px 0 12px 24px' }}>
                  Home Documents
                </div>
              </SideNavItem>
              <SideNavItem path="/documents/office-documents">
                <div style={{ padding: '12px 0 12px 24px' }}>
                  Office Documents
                </div>
              </SideNavItem>
            </SideNav>
          </SideNavItem>
          <SideNavItem
            path="/web"
            activeSideNavItem={boolean('Web activeSideNavItem', false)}
          >
            <SideNavItemIcon>
              <Icon icon={iosWorldOutline} size={24} />
            </SideNavItemIcon>
            <SideNavItemText>The Web</SideNavItemText>
            <SideNav top secondary>
              <SideNavItem path="/web/www">
                <div style={{ padding: '12px 0 12px 24px' }}>
                  World Wide Web
                </div>
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
