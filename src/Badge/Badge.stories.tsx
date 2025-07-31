import { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge.component';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    badgeSize: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    badgeStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: 'select',
    },
    lightMode: {
      control: 'boolean',
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    badgeSize: 'md',
    badgeStyle: 'primary',
    lightMode: false,
    children: 123,
  },
};
