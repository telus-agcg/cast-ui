import { Meta, StoryObj } from '@storybook/react';
import { TestSelect } from './TestSelect.component';

const meta: Meta<typeof TestSelect> = {
  component: TestSelect,
};

export default meta;

type Story = StoryObj<typeof TestSelect>;

export const _TESTSELECT: Story = {
  args: {},
};
