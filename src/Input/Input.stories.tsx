import * as React from 'react';
import Icon from 'react-icons-kit';
import { ic_search as icSearch } from 'react-icons-kit/md';

import { Input, IconButton } from '../';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'number', 'email', 'password'],
      control: {
        type: 'select',
      },
    },
    autoComplete: {
      options: ['on', 'off'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    inputSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
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
      type: {
        control: 'number',
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
    value: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      action: {
        type: 'onChange',
      },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: {
        type: 'select',
      },
    },
    addonTextPosition: {
      options: ['right', 'left'],
      control: {
        type: 'select',
      },
    },
    addonText: {
      control: {
        type: 'text',
      },
    },
    isClearable: {
      control: {
        type: 'boolean',
      },
    },
    highlightFilled: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      control: false,
    },
    icon: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

const _Input = args => <Input data-testid={args.dataTestId} {...args} />;

export const _InputBasic = _Input.bind({});
_InputBasic.args = {
  id: 'basic_input',
  dataTestId: 'basic-input',
  type: 'text',
  autoComplete: 'on',
  disabled: false,
  invalid: false,
  inputSize: 'md',
  invalidText: 'A valid value is required',
  maxLength: 1000,
  placeholder: 'Please enter some text',
  required: false,
};

export const _InputWithIconButton = _Input.bind({});
_InputWithIconButton.args = {
  id: 'input_with_icon_button',
  dataTestId: 'input-with-icon-button1',
  type: 'text',
  autoComplete: 'on',
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  maxLength: 1000,
  inputSize: 'md',
  placeholder: 'Please enter some text',
  required: false,
  iconPosition: 'right',
  icon: (
    <IconButton
      icon={icSearch}
      rounded={false}
      btnSize="md"
      onClick={e => alert('Searching....')}
    />
  ),
};

export const _InputWithIconButton2 = _Input.bind({});
_InputWithIconButton2.args = {
  id: 'input_with_icon_button2',
  dataTestId: 'input-with-icon-button',
  type: 'text',
  autoComplete: 'on',
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  maxLength: 1000,
  inputSize: 'md',
  placeholder: 'Please enter some text',
  required: false,
  iconPosition: 'right',
  icon: <Icon size={20} icon={icSearch} />,
};

export const _InputWithAddonText = _Input.bind({});
_InputWithAddonText.args = {
  id: 'input_with_addon_text',
  dataTestId: 'input-with-addon-text',
  type: 'text',
  autoComplete: 'on',
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  maxLength: 1000,
  inputSize: 'md',
  placeholder: 'Please enter some text',
  required: false,
  addonText: '$',
  addonTextPosition: 'right',
};

export const _InputWithAllOptions = _Input.bind({});
_InputWithAllOptions.args = {
  id: 'input_with_all_options',
  dataTestId: 'input-with-all-options',
  type: 'text',
  autoComplete: 'on',
  disabled: false,
  invalid: false,
  invalidText: 'A valid value is required',
  maxLength: 1000,
  inputSize: 'md',
  placeholder: 'Please enter some text',
  required: false,
  addonText: '$',
  addonTextPosition: 'right',
  iconPosition: 'right',
  icon: <Icon size={20} icon={icSearch} />,
  isClearable: true,
  highlightFilled: true,
};
