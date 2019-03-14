import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Icon from 'react-icons-kit';
import { userSecret } from 'react-icons-kit/fa/userSecret';
import { iosHomeOutline } from 'react-icons-kit/ionicons/iosHomeOutline';
import { iosPaperOutline } from 'react-icons-kit/ionicons/iosPaperOutline';
import { iosWorldOutline } from 'react-icons-kit/ionicons/iosWorldOutline';
import { SideNavbar, SideNav, SideNavItem } from '../';

storiesOf('Sidenav', module).add(
  'Sidenav',
  () => (
    <div style={{ height: '600px', position: 'relative' }}>
      <SideNavbar
        isOpen={boolean('isOpen', false)}
        background={text('background', 'lightBackground')}
        height={text('height', '')}
        width={text('width', '')}
        borderLeft={text('borderLeft', '')}
        borderRight={text('borderRight', '')}
      >
        <SideNav top>
          <SideNavItem>
            <Icon icon={iosHomeOutline} size={24} />
          </SideNavItem>
          <SideNavItem active>
            <Icon icon={iosPaperOutline} size={24} />
          </SideNavItem>
          <SideNavItem>
            <Icon icon={iosWorldOutline} size={24} />
          </SideNavItem>
          <SideNavItem>
            <Icon icon={userSecret} size={24} />
          </SideNavItem>
        </SideNav>
        <SideNav center>
          <SideNavItem>
            <Icon icon={userSecret} size={24} />
          </SideNavItem>
          <SideNavItem>
            <Icon icon={userSecret} size={24} />
          </SideNavItem>
        </SideNav>
        <SideNav bottom>
          <SideNavItem>
            <Icon icon={iosPaperOutline} size={24} />
          </SideNavItem>
          <SideNavItem>
            <Icon icon={iosWorldOutline} size={24} />
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
