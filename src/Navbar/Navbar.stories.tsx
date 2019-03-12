import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { Navbar, Nav } from '../';

storiesOf('Navbar', module).add(
  'Navbar',
  () => (
    <Navbar
      backgroundColor={text('backgroundColor', 'lightGray')}
      height={text('height', '60px')}
    >
      <Nav left>Lets see what we have</Nav>
      <Nav center>Lets see what we have</Nav>
      <Nav right>Lets see what we have</Nav>
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
