import { Meta, StoryObj } from '@storybook/react';
import { TestSelect } from './TestSelect.component';
import { CustomSelect } from '../Select/Select.component';

const meta: Meta<typeof TestSelect> = {
  component: TestSelect,
};

export default meta;

type Story = StoryObj<typeof TestSelect>;

export const _TESTSELECT: Story = {
  args: {},
};
