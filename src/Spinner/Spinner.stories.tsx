import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner.component';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    size: {
      control: 'select',
      options: [20, 30, 40, 50, 60, 70],
    },
    animationSpeed: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
    },
    transitionType: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const _Spinner: Story = {
  args: {
    size: 50,
    animationSpeed: 1,
  },
};
