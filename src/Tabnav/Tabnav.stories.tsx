import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { Tabnav } from '../';

storiesOf('Tabnav', module).add(
  'Tabnav',
  () => <Tabnav background={text('background', '')}>Sample content</Tabnav>,
  {
    info: {
      text: `
        ### Notes

        This is a Tabnav
        `,
    },
  },
);
