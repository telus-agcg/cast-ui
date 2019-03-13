import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { Navbar, Nav } from '../';

storiesOf('Navbar', module).add(
  'Navbar',
  () => (
    <Navbar
      background={text('background', 'lightBackground')}
      height={text('height', '60px')}
    >
      <Nav left>Lets see what we have left</Nav>
      <Nav>Lets see what we have</Nav>
      <Nav right>Lets see what we have right</Nav>
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
