import * as React from 'react';

import { Button, ButtonGroup } from '../';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    role: {
      options: ['group', 'toolbar'],
      control: {
        type: 'inline-radio',
      },
    },
    mode: {
      options: ['checkbox', 'radio'],
      control: {
        type: 'inline-radio',
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const _ButtonGroup = args => (
  <ButtonGroup {...args}>
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
);

_ButtonGroup.args = {
  role: 'group',
  mode: 'checkbox',
};

_ButtonGroup.story = {
  parameters: {
    info: {
      text: `
        ### Notes
        This is a ButtonGroup.  Selected values will end up in the
        ButtonGroup's state.SelectedValues property.
        `,
    },
  },
};
