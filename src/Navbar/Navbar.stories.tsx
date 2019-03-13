import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Icon from 'react-icons-kit';
// import { ic_keyboard_arrow_down as IKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { ic_insert_emoticon as icIE } from 'react-icons-kit/md/ic_insert_emoticon';
import { Navbar, Nav } from '../';

storiesOf('Navbar', module).add(
  'Navbar',
  () => (
    <Navbar
      background={text('background', 'lightBackground')}
      height={text('height', '80px')}
      borderTop={text('borderTop', '')}
      borderBottom={text('borderBottom', '1px solid grey')}
    >
      <Nav left>
        <img
          src="https://www.tkxs.com/hubfs/TKXS-brand/TKXS%20Official%20Logo%20(black).svg"
          alt="TKXS"
          style={{ width: '100px' }}
        />
        <h2 style={{ padding: '0 16px' }}>Cast UI</h2>
      </Nav>
      <Nav center>
        <h3 style={{ padding: '0 16px' }}>Center Item</h3>
        <h3 style={{ padding: '0 16px' }}>Center Item</h3>
      </Nav>
      <Nav right>
        <h3 style={{ padding: '0 0 0 16px' }}>Right Item</h3>
        <h3 style={{ padding: '0 0 0 16px', cursor: 'pointer' }}>
          user
          <Icon icon={icIE} size={24} />
        </h3>
      </Nav>
    </Navbar>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a spinner
        `,
    },
  },
);
