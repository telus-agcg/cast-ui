import * as React from 'react';

import Icon from 'react-icons-kit';
import { userSecret } from 'react-icons-kit/fa/userSecret';
import { Navbar, Nav } from '../';

export default {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  subcomponents: {
    Nav,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const _Navbar = ({ height, ...args }) => (
  <Navbar {...args}>
    <Nav left>
      <img
        src="https://www.tkxs.com/hubfs/TKXS-brand/TKXS%20Official%20Logo%20(black).svg"
        alt="TKXS"
        style={{ width: '100px' }}
      />
      <h2 style={{ padding: '0 16px' }}>Cast UI</h2>
    </Nav>
    <Nav center>
      <h3 style={{ padding: '0 12px' }}>Center Item</h3>
      <h3 style={{ padding: '0 12px' }}>Center Item</h3>
    </Nav>
    <Nav right>
      <h3 style={{ padding: '0 0 0 16px' }}>Right Item</h3>
      <h3 style={{ padding: '0 0 0 16px', cursor: 'pointer' }}>
        <Icon icon={userSecret} size={32} />
      </h3>
    </Nav>
  </Navbar>
);

_Navbar.args = {};
