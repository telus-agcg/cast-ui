import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex.component';
import { Box } from './Box.component';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction',
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content',
    },
    align: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: 'Align items',
    },
    gap: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Gap between items (uses theme.space scale)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 3,
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          Item 1
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          Item 2
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          Item 3
        </Box>
      </>
    ),
  },
};

export const FlexProps: Story = {
  args: {
    justify: 'space-between',
    align: 'center',
    width: '400px',
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          Left
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          Center
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          Right
        </Box>
      </>
    ),
  },
};

export const ResponsiveDirection: Story = {
  args: {
    direction: ['column', 'row'],
    gap: [2, 4],
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          Item 1
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          Item 2
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          Item 3
        </Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This Flex container will be column direction on mobile and row direction on tablet+.',
      },
    },
  },
};
