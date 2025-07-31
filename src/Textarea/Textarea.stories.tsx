import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea.component';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Interactions/Textarea',
  component: Textarea,
  argTypes: {
    cols: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    id: {
      control: false,
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
    rows: {
      control: 'number',
    },
    textareaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
    },
    isReSizable: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const _TextArea: Story = {
  args: {
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
    isReSizable: false,
  },
  render: (args) => {
    return <Textarea data-testid="textarea" {...args} id="myTextarea" />;
  },
};
