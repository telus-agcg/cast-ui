import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Button, ButtonGroup } from '../';

storiesOf('ButtonGroup', module).add(
  'ButtonGroup',
  () => (
    <ButtonGroup
      role={select('role', ['group', 'toolbar'], 'group')}
      mode={select('mode', ['checkbox', 'radio'], 'checkbox')}
    >
      <Button
        btnStyle="primary"
        btnSize="md"
        value="1"
        onClick={() => console.log('Button 1')}
      >
        One
      </Button>
      <Button
        btnStyle="primary"
        btnSize="md"
        value="2"
        onClick={() => console.log('Button 2')}
      >
        Two
      </Button>
      <Button
        btnStyle="primary"
        btnSize="md"
        value="3"
        onClick={() => console.log('Button 3')}
      >
        Three
      </Button>
    </ButtonGroup>
  ),
  {
    info: {
      text: `
        ### Notes
        This is a ButtonGroup.  Selected values will end up in the
        ButtonGroup's state.SelectedValues property.
        `,
    },
  },
);
