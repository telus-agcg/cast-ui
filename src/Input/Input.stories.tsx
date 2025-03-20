import { SearchIcon } from '@icons';
import { Input } from './Input.component';
import { Meta, StoryObj } from '@storybook/react';

const description = `
###### With Icon
The Input component accepts 2 additional props, **icon** and **iconPosition** that allow the Input to prepend or append a *JSX.Element*, *React.Component*, *React.FunctionComponent* or a *string*.
In this example, the **icon** is the *Icon* component from [react-icons-kit](https://react-icons-kit.now.sh/)

###### With Text
The Input component accepts 2 additional props, **addonText** and **addonTextPosition** that allow the Input to prepend or append a *string* or *character set* such as currency codes.
By using the *addonText* prop, the Input component text alignment is shifted to right otherwise it remains left or default.
In this example, the **addonText** is the dollar sign ($).
`;
const meta: Meta<typeof Input> = {
  title: 'Components/Interactions/Input',
  component: Input,
  argTypes: {
    id: {
      control: 'text',
    },
    isClearable: {
      control: 'boolean',
    },
    type: {
      options: ['text', 'number', 'email', 'password'],
      control: 'select',
    },
    autoComplete: {
      options: ['on', 'off'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
    inputSize: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    invalid: {
      control: 'boolean',
    },
    invalidText: {
      control: 'text',
    },
    invalidTextColor: {
      control: 'color',
    },
    maxLength: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    onChange: {
      action: {
        type: 'onChange',
      },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: 'select',
    },
    addonTextPosition: {
      options: ['right', 'left'],
      control: 'select',
    },
    addonText: {
      control: 'text',
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Regular: Story = {
  args: {
    id: 'basic_input',
    type: 'text',
    autoComplete: 'on',
    disabled: false,
    invalid: false,
    inputSize: 'md',
    invalidText: 'A valid value is required',
    maxLength: 1000,
    placeholder: 'Please enter some text',
    required: false,
  },
};

export const WithIcon: Story = {
  args: {
    id: 'input_with_icon',
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
    icon: <SearchIcon />,
  },
};

export const WithAddonText: Story = {
  args: {
    id: 'input_with_addon_text',
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
  },
};

export const InputWithAllOptions: Story = {
  args: {
    id: 'input_with_all_options',
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
    icon: <SearchIcon />,
    isClearable: true,
  },
};

export const WithIconButton: Story = {
  args: {
    id: 'input_with_icon_button',
    type: 'text',
    autoComplete: 'on',
    disabled: false,
    invalid: false,
    invalidText: 'A valid value is required',
    maxLength: 1000,
    inputSize: 'md',
    placeholder: 'Please enter some text',
    required: false,
    // iconPosition: 'right',
    // icon: (
    //   <IconButton
    //     icon={icSearch}
    //     rounded={false}
    //     btnSize="md"
    //     onClick={e => alert('Searching....')}
    //   />
    // ),
  },
};
