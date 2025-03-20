import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle.component';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Interactions/Toggle',
  component: Toggle,
  argTypes: {
    toggleSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
    id: {
      control: false,
    },
    defaultChecked: {
      control: false,
    },
    label: {
      control: false,
    },
    value: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const _Toggle: Story = {
  args: {
    toggleSize: 'md',
    checked: true,
    disabled: false,
  },
  render: ({ checked, ...args }) => {
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
      setToggle(Boolean(checked));
    }, [checked]);

    const handleToggle = () => setToggle(!toggle);

    return (
      <div>
        <Toggle
          id="toggleId"
          {...args}
          data-testid="toggle"
          checked={toggle}
          onChange={handleToggle}
          value="1"
        >
          One
        </Toggle>
      </div>
    );
  },
};
