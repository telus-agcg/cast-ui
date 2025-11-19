import { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from './SplitButton.component';

const description = `
A SplitButton combines a primary action button with a dropdown menu for secondary actions, similar to Gmail's "Send" button or Google Drive's "Share" button.

The component features two distinct clickable zones:
- **Primary Button**: Executes the main action when clicked
- **Dropdown Arrow**: Opens a menu with secondary action options

#### Features
- Supports all button style variants (primary, secondary, success, warning, danger)
- Available in three sizes (sm, md, lg)
- Supports outline mode
- Can be disabled
- Fully themeable

#### Usage
The SplitButton is ideal for scenarios where you have a primary action that users perform frequently, along with related secondary actions that are used less often.
`;

const meta: Meta<typeof SplitButton> = {
  title: 'Components/Interactions/SplitButton',
  component: SplitButton,
  argTypes: {
    onPrimaryClick: { action: 'onPrimaryClick' },
    onMenuItemClick: { action: 'onMenuItemClick' },
    btnStyle: {
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      control: 'select',
    },
    btnSize: {
      options: ['sm', 'md', 'lg'],
      control: 'radio',
    },
    disabled: {
      control: 'boolean',
    },
    outline: {
      control: 'boolean',
    },
    theme: {
      table: {
        disable: true,
      },
    },
    menuItems: {
      control: false,
    },
    appendTo: {
      control: false,
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

type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    children: 'Press Me!',
    btnStyle: 'primary',
    btnSize: 'md',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Secondary Actions',
        id: 'secondary',
      },
    ],
    onPrimaryClick: () => {
      alert('you pressed me');
    },
    onMenuItemClick: (item) => {
      alert('This is the secondary action');
    },
  },
};

export const WithMultipleMenuItems: Story = {
  args: {
    children: 'Send',
    btnStyle: 'primary',
    btnSize: 'md',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Schedule send',
        id: 'schedule',
      },
      {
        label: 'Send later',
        id: 'later',
      },
      {
        label: 'Save as draft',
        id: 'draft',
      },
    ],
    onPrimaryClick: () => {
      alert('Message sent!');
    },
    onMenuItemClick: (item) => {
      alert(`Selected: ${item.label}`);
    },
  },
};

export const Success: Story = {
  args: {
    children: 'Approve',
    btnStyle: 'success',
    btnSize: 'md',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Approve with comments',
        id: 'approve-comments',
      },
      {
        label: 'Approve and notify',
        id: 'approve-notify',
      },
    ],
    onPrimaryClick: () => {
      alert('Approved!');
    },
    onMenuItemClick: (item) => {
      alert(`Selected: ${item.label}`);
    },
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    btnStyle: 'danger',
    btnSize: 'md',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Delete permanently',
        id: 'delete-permanent',
      },
      {
        label: 'Move to trash',
        id: 'trash',
      },
    ],
    onPrimaryClick: () => {
      alert('Deleted!');
    },
    onMenuItemClick: (item) => {
      alert(`Selected: ${item.label}`);
    },
  },
};

export const Small: Story = {
  args: {
    children: 'Share',
    btnStyle: 'primary',
    btnSize: 'sm',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Share with link',
        id: 'link',
      },
      {
        label: 'Share via email',
        id: 'email',
      },
    ],
    onPrimaryClick: () => {
      alert('Shared!');
    },
    onMenuItemClick: (item) => {
      alert(`Selected: ${item.label}`);
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Submit',
    btnStyle: 'primary',
    btnSize: 'lg',
    disabled: false,
    outline: false,
    menuItems: [
      {
        label: 'Submit and continue',
        id: 'continue',
      },
      {
        label: 'Submit and close',
        id: 'close',
      },
    ],
    onPrimaryClick: () => {
      alert('Submitted!');
    },
    onMenuItemClick: (item) => {
      alert(`Selected: ${item.label}`);
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Download',
    btnStyle: 'primary',
    btnSize: 'md',
    disabled: false,
    outline: true,
    menuItems: [
      {
        label: 'Download as PDF',
        id: 'pdf',
      },
      {
        label: 'Download as CSV',
        id: 'csv',
      },
      {
        label: 'Download as Excel',
        id: 'excel',
      },
    ],
    onPrimaryClick: () => {
      alert('Downloading...');
    },
    onMenuItemClick: (item) => {
      alert(`Downloading as: ${item.label}`);
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Action',
    btnStyle: 'primary',
    btnSize: 'md',
    disabled: true,
    outline: false,
    menuItems: [
      {
        label: 'Option 1',
        id: 'option1',
      },
      {
        label: 'Option 2',
        id: 'option2',
      },
    ],
    onPrimaryClick: () => {
      alert('This should not appear');
    },
    onMenuItemClick: (item) => {
      alert('This should not appear');
    },
  },
};
