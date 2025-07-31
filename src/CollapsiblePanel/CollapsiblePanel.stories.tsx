import { Meta, StoryObj } from '@storybook/react-vite';
import CollapsiblePanel from './CollapsiblePanel.component';
import { Button } from '../Button/Button.component';
import { Caption, TextDisplay } from '@typography';

const meta: Meta<typeof CollapsiblePanel> = {
  title: 'Components/Data Display/Collapsible Panel',
  component: CollapsiblePanel,
  argTypes: {
    title: { control: 'text' },
    endContent: { control: false },
    children: { control: 'text' },
    defaultOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CollapsiblePanel>;

export const Default: Story = {
  args: {
    title: 'Collapsible Panel',
    children: <p>This is basic panel content.</p>,
    defaultOpen: true,
  },
};

export const WithEndContent: Story = {
  args: {
    title: 'Approvals for Payments',
    endContent: <Button>Edit Button</Button>,
    children: <p>This is basic panel content.</p>,
    defaultOpen: true,
    hideEndContentWhenCollapsed: false,
  },
};

const NodeTitle = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextDisplay>The name of something important</TextDisplay>
      <Caption>A detail</Caption>
    </div>
  );
};

export const WithNodeTitle: Story = {
  args: {
    title: <NodeTitle></NodeTitle>,
    endContent: <Button>Edit Button</Button>,
    children: <p>This is basic panel content.</p>,
    defaultOpen: true,
    hideEndContentWhenCollapsed: false,
  },
};

export const NestedPanels: Story = {
  args: {
    title: 'Top-Level Panel',
    endContent: <Button>Top Action</Button>,
    defaultOpen: true,
    children: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          section with nested collapsible panel below.
        </p>
        <CollapsiblePanel
          title="Nested Panel"
          endContent={<Button>Inner Action</Button>}
          defaultOpen={true}
        >
          <p>nested panel</p>
        </CollapsiblePanel>
      </div>
    ),
  },
};
