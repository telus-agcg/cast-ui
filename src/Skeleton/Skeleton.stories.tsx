import { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton.component';

const description = `
The Skeleton component provides a placeholder preview of content before the data gets loaded to reduce load-time frustration.

#### Variants
The Skeleton component supports multiple variants to match different content types:
- **text** - For text content with support for multiple lines
- **circular** - Perfect for avatar placeholders
- **rectangular** - For images, cards, and other rectangular content
- **custom** - Flexible dimensions for unique use cases

#### Animations
Choose from different animation types to match your design needs:
- **pulse** - Gentle opacity fade in/out (default)
- **shimmer** - Left-to-right gradient sweep effect
- **none** - Static placeholder without animation

#### Sizing
The component provides flexible sizing options:
- Use **width** and **height** props for precise control
- Supports both pixel values (numbers) and CSS units (strings)
- Each variant has sensible defaults

#### Text Lines
For the text variant, use the **lines** prop to create multiple text line placeholders.
The last line is automatically shortened to 75% width for a more realistic appearance.

#### Theme Integration
The Skeleton component integrates with the Cast UI theme system and respects:
- Theme colors for background and shimmer effects
- Consistent border radius values
- Responsive design patterns
`;

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      options: ['text', 'circular', 'rectangular', 'custom'],
      control: 'select',
      description: 'The shape variant of the skeleton',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS units or pixels)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS units or pixels)',
    },
    animation: {
      options: ['pulse', 'shimmer', 'none'],
      control: 'select',
      description: 'Animation type for the skeleton',
    },
    lines: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of text lines (text variant only)',
    },
    borderRadius: {
      control: 'text',
      description: 'Custom border radius (CSS units or pixels)',
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
  },
};

export const TextSkeleton: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
  },
  parameters: {
    docs: {
      description: {
        story: 'Single line text skeleton with default styling.',
      },
    },
  },
};

export const MultipleTextLines: Story = {
  args: {
    variant: 'text',
    lines: 4,
    animation: 'pulse',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Multiple text lines with the last line automatically shortened for realism.',
      },
    },
  },
};

export const CircularSkeleton: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60,
    animation: 'pulse',
  },
  parameters: {
    docs: {
      description: {
        story: 'Circular skeleton perfect for avatar placeholders.',
      },
    },
  },
};

export const RectangularSkeleton: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: 200,
    animation: 'pulse',
  },
  parameters: {
    docs: {
      description: {
        story: 'Rectangular skeleton ideal for image or card placeholders.',
      },
    },
  },
};

export const CustomSkeleton: Story = {
  args: {
    variant: 'custom',
    width: 120,
    height: 20,
    borderRadius: 10,
    animation: 'pulse',
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom skeleton with specific dimensions and border radius.',
      },
    },
  },
};
