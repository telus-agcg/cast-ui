import { Meta, StoryObj } from '@storybook/react';
import { Display } from './Display.component';

const meta: Meta<typeof Display> = {
  title: 'Components/Typography/Display',
  component: Display,
};

export default meta;

type Story = StoryObj<typeof Display>;

export const _Display: Story = {
  args: { size: 10, children: 'This is a Display' },
};
