import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid.component';
import { Box } from './Box.component';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    templateColumns: {
      control: 'text',
      description: 'Grid template columns',
    },
    templateRows: {
      control: 'text',
      description: 'Grid template rows',
    },
    gap: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Gap between grid items (uses theme.space scale)',
    },
    columnGap: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Column gap',
    },
    rowGap: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description: 'Row gap',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    gap: 3,
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          1
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          2
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          3
        </Box>
        <Box p={3} bg="#6f42c1" color="white" borderRadius="md">
          4
        </Box>
        <Box p={3} bg="#fd7e14" color="white" borderRadius="md">
          5
        </Box>
        <Box p={3} bg="#20c997" color="white" borderRadius="md">
          6
        </Box>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    templateColumns: '1fr 1fr',
    gap: 4,
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={4} bg="#007bff" color="white" borderRadius="md">
          Left Column
        </Box>
        <Box p={4} bg="#28a745" color="white" borderRadius="md">
          Right Column
        </Box>
      </>
    ),
  },
};

export const AutoFitColumns: Story = {
  args: {
    templateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 3,
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          Auto 1
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          Auto 2
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          Auto 3
        </Box>
        <Box p={3} bg="#6f42c1" color="white" borderRadius="md">
          Auto 4
        </Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grid columns will automatically fit based on available space with minimum width of 150px.',
      },
    },
  },
};

export const ResponsiveColumns: Story = {
  args: {
    templateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
    gap: [2, 3, 4],
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
        <Box p={3} bg="#6f42c1" color="white" borderRadius="md">
          Item 4
        </Box>
        <Box p={3} bg="#fd7e14" color="white" borderRadius="md">
          Item 5
        </Box>
        <Box p={3} bg="#20c997" color="white" borderRadius="md">
          Item 6
        </Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grid will show 1 column on mobile, 2 columns on tablet, and 3 columns on desktop.',
      },
    },
  },
};

export const DifferentGaps: Story = {
  args: {
    templateColumns: 'repeat(3, 1fr)',
    columnGap: 4,
    rowGap: 2,
    p: 4,
    bg: '#f8f9fa',
    borderRadius: 'md',
    children: (
      <>
        <Box p={3} bg="#007bff" color="white" borderRadius="md">
          1
        </Box>
        <Box p={3} bg="#28a745" color="white" borderRadius="md">
          2
        </Box>
        <Box p={3} bg="#dc3545" color="white" borderRadius="md">
          3
        </Box>
        <Box p={3} bg="#6f42c1" color="white" borderRadius="md">
          4
        </Box>
        <Box p={3} bg="#fd7e14" color="white" borderRadius="md">
          5
        </Box>
        <Box p={3} bg="#20c997" color="white" borderRadius="md">
          6
        </Box>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Different gaps for columns and rows - larger column gap, smaller row gap.',
      },
    },
  },
};
