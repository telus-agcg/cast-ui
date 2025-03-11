import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert.component';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    alertStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
    },
    lightMode: {
      control: { type: 'boolean' },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    alertStyle: 'primary',
    lightMode: false,
    children: 'Reminder: Sales meeting at Rm 223 in 10 minutes',
  },
};
