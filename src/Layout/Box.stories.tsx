import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box.component';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    m: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Margin (uses theme.space scale)',
    },
    p: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Padding (uses theme.space scale)',
    },
    bg: {
      control: 'color',
      description: 'Background color',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    width: {
      control: 'text',
      description: 'Width (supports responsive arrays)',
    },
    height: {
      control: 'text',
      description: 'Height (supports responsive arrays)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box component',
    p: 4,
    bg: '#f0f0f0',
    borderRadius: 'md',
  },
};

export const WithSpacing: Story = {
  args: {
    children: 'Box with margin and padding',
    m: 3,
    p: 5,
    bg: '#e6f3ff',
    border: '1px solid #0066cc',
  },
};

export const ResponsiveWidth: Story = {
  args: {
    children: 'Responsive width: 100% → 50% → 25%',
    width: ['100%', '50%', '25%'],
    p: 4,
    bg: '#ffe6e6',
    textAlign: 'center',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This Box will be 100% width on mobile, 50% on tablet, and 25% on desktop.',
      },
    },
  },
};
