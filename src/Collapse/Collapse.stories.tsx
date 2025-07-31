import { Meta, StoryObj } from '@storybook/react-vite';
import { Collapse } from './Collapse.component';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Data Display/Collapse',
  component: Collapse,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const _Collapse: Story = {
  args: {
    isOpen: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    ),
  },
};
