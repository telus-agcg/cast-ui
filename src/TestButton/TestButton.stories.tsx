import type { Meta, StoryObj } from '@storybook/react';

import { TestButton } from './TestButton.component';

const meta: Meta<typeof TestButton> = {
  component: TestButton,
};

export default meta;

type Story = StoryObj<typeof TestButton>;

export const Default: Story = {
  args: {
    num: 1,
  },
};

export const Emoji: Story = {
  args: {
    num: 1,
  },
};
