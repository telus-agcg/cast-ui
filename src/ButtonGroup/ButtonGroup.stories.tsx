import * as React from 'react';

import { Button, ButtonGroup } from '../';

export default {
  title: 'Components/Interactions/Button',
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

export const _ButtonGroup = (args) => (
  <ButtonGroup {...args}>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="1"
      data-testid="button-1"
      onClick={() => console.log('Button 1')}
    >
      One
    </Button>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="2"
      data-testid="button-2"
      onClick={() => console.log('Button 2')}
    >
      Two
    </Button>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="3"
      data-testid="button-3"
      onClick={() => console.log('Button 3')}
    >
      Three
    </Button>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="4"
      data-testid="button-4"
      onClick={() => console.log('Button 4')}
    >
      Three
    </Button>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="5"
      data-testid="button-5"
      onClick={() => console.log('Button 5')}
    >
      Three
    </Button>
    <Button
      btnStyle="primary"
      btnSize="md"
      value="6"
      data-testid="button-6"
      onClick={() => console.log('Button 6')}
    >
      Three
    </Button>
  </ButtonGroup>
);

_ButtonGroup.args = {
  role: 'group',
  mode: 'checkbox',
};
