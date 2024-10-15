import * as React from 'react';

import { Textarea } from '../';

export default {
  title: 'Components/Interactions/Textarea',
  component: Textarea,
  argTypes: {
    cols: {
      control: {
        type: 'number',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      control: false,
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    invalidText: {
      control: {
        type: 'text',
      },
    },
    invalidTextColor: {
      control: {
        type: 'color',
      },
    },
    maxLength: {
      control: {
        type: 'number',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    rows: {
      control: {
        type: 'number',
      },
    },
    textareaSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
    },
    reSize: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const _Textarea = args => (
  <Textarea id="myTextarea" data-testid="textarea" {...args} />
);

_Textarea.args = {
  cols: 60,
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  invalidTextColor: 'red',
  maxLength: 1000,
  placeholder: 'Placeholder Text',
  required: false,
  rows: 8,
  textareaSize: 'md',
  reSize: false,
};
