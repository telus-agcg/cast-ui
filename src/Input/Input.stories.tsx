import * as React from 'react';
import Icon from 'react-icons-kit';
import { ic_search as icSearch } from 'react-icons-kit/md';

import { Input, IconButton } from '../';

const description = `
###### With Icon
The Input component accepts 2 additional props, **icon** and **iconPosition** that allow the Input to prepend or append a *JSX.Element*, *React.Component*, *React.FunctionComponent* or a *string*.
In this example, the **icon** is the *Icon* component from [react-icons-kit](https://react-icons-kit.now.sh/)

###### With Text
The Input component accepts 2 additional props, **addonText** and **addonTextPosition** that allow the Input to prepend or append a *string* or *character set* such as currency codes.
By using the *addonText* prop, the Input component text alignment is shifted to right otherwise it remains left or default.
In this example, the **addonText** is the dollar sign ($).
`;

export default {
  title: 'Components/Interactions/Input',
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
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const _Input = args => <Input data-testid={args.dataTestId} {...args} />;

export const _Regular = _Input.bind({});
_Regular.args = {
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

export const _WithIcon = _Input.bind({});
_WithIcon.args = {
  id: 'input_with_icon',
  dataTestId: 'input-with-icon',
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

export const _WithAddonText = _Input.bind({});
_WithAddonText.args = {
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

export const _WithIconButton = _Input.bind({});
_WithIconButton.args = {
  id: 'input_with_icon_button',
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
  icon: (
    <IconButton
      icon={icSearch}
      rounded={false}
      btnSize="md"
      onClick={e => alert('Searching....')}
    />
  ),
};
