import { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker.component';

const description = `
This is a DatePicker is based on [react-datepicker](https://reactdatepicker.com/).
`;

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Interactions/Date Picker',
  component: DatePicker,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    selectsRange: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'boolean',
      options: ['right', 'left'],
    },
    datePickerStyle: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    datePickerSize: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    invalid: {
      control: 'boolean',
    },
    invalidText: {
      control: 'text',
    },
    invalidTextColor: {
      control: 'color',
    },
    monthsShown: {
      control: 'number',
    },
    className: {
      control: false,
    },
    withPortal: {
      control: 'boolean',
    },
    wrapperId: {
      control: false,
    },
    onFocusChange: {
      control: false,
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const _DatePicker: Story = {
  args: {
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    invalid: false,
    invalidText: 'A valid value is required',
    monthsShown: 1,
    placeholderText: 'Date',
    showIcon: true,
    withPortal: false,
    excludeDates: [new Date()],
  },
};

export const WithPortal: Story = {
  args: {
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    placeholderText: 'Select a date (Portal Mode)',
    showIcon: true,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses `usePortal={true}` to render the calendar in a React portal. This completely bypasses overflow constraints from parent containers and displays the calendar in a modal-like overlay. Ideal for use in modals, scrollable containers, or any situation where overflow clipping is an issue.',
      },
    },
  },
};

export const WithFixedPositioning: Story = {
  args: {
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    placeholderText: 'Select a date (Fixed Positioning)',
    showIcon: true,
    popperStrategy: 'fixed',
    popperPlacement: 'bottom-start',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses `popperStrategy="fixed"` to escape overflow containers while maintaining an inline appearance (no modal overlay). The calendar uses fixed positioning which allows it to break out of parent overflow boundaries. Use `popperPlacement` to control where the calendar appears relative to the input.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '200px',
          overflow: 'auto',
          border: '2px solid #ccc',
          padding: '20px',
          borderRadius: '4px',
        }}
      >
        <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
          This DatePicker is inside a container with overflow: auto. Without
          fixed positioning, the calendar would be clipped.
        </div>
        <Story />
        <div style={{ height: '400px', marginTop: '20px' }}>
          <p>Scroll content to demonstrate overflow container...</p>
        </div>
      </div>
    ),
  ],
};

export const InScrollableContainer: Story = {
  args: {
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    placeholderText: 'Select a date',
    showIcon: true,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the DatePicker with `usePortal={true}` inside a scrollable container. The portal approach ensures the calendar is always visible and not clipped by the container boundaries.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '300px',
          overflow: 'auto',
          border: '2px solid #ccc',
          padding: '20px',
          borderRadius: '4px',
        }}
      >
        <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
          This DatePicker uses portal mode to avoid being clipped by the
          scrollable container.
        </div>
        <Story />
        <div style={{ height: '600px', marginTop: '20px' }}>
          <p>Scroll down to see more content...</p>
          <p style={{ marginTop: '200px' }}>More content here...</p>
          <p style={{ marginTop: '200px' }}>Even more content...</p>
        </div>
      </div>
    ),
  ],
};
