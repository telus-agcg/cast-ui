import * as React from 'react';

import { Textarea } from '../';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    textareaSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
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
    cols: {
      control: {
        type: 'number',
      },
    },
    id: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export const _Textarea = args => (
  <Textarea id="myTextarea" data-testid="textarea" {...args} />
);

_Textarea.args = {
  textareaSize: 'md',
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  invalidTextColor: 'red',
  maxLength: 1000,
  placeholder: 'Placeholder Text',
  required: false,
  rows: 8,
  cols: 60,
};
