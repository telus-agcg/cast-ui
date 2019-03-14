import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Icon from 'react-icons-kit';
import { userSecret } from 'react-icons-kit/fa/userSecret';
import { SideNavbar, SideNav, SideNavItem } from '../';

storiesOf('Sidenav', module).add(
  'Sidenav',
  () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <SideNavbar
        background={text('background', 'lightBackground')}
        height={text('height', '')}
        width={text('width', '64px')}
        borderLeft={text('borderLeft', '')}
        borderRight={text('borderRight', '1px solid grey')}
      >
        <SideNav top>
          <SideNavItem>
            <img
              src="https://www.tkxs.com/hubfs/TKXS-brand/TKXS%20Official%20Logo%20(black).svg"
              alt="TKXS"
              style={{ width: '40px' }}
            />
          </SideNavItem>
          <SideNavItem active>
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
            <Icon icon={userSecret} size={24} />
          </SideNavItem>
          <SideNavItem active>
            <Icon icon={userSecret} size={24} />
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
