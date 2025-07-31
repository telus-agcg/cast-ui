import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel.component';
import { PanelHeader } from './PanelHeader.component';
import { PanelBody } from './PanelBody.component';
import { Collapse } from '../Collapse/Collapse.component';

type PanelCustomProps = React.ComponentProps<typeof Panel> &
  React.ComponentProps<typeof PanelHeader> &
  React.ComponentProps<typeof PanelBody> &
  React.ComponentProps<typeof Collapse>;

const meta: Meta<PanelCustomProps> = {
  title: 'Components/Data Display/Panel',
  component: Panel,
  subcomponents: {
    Panel: Panel as React.ComponentType<unknown>,
    PanelHeader: PanelHeader as React.ComponentType<unknown>,
    PanelBody: PanelBody as React.ComponentType<unknown>,
    Collapse: Collapse as React.ComponentType<unknown>,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    panelStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: 'select',
    },
    noPadding: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
    toggleItem: {
      action: {
        type: 'clicked',
      },
    },
    children: {
      control: false,
    },
    iconPosition: {
      options: ['right', 'left'],
      control: 'inline-radio',
    },
  },
};

export default meta;

type Story = StoryObj<PanelCustomProps>;

const DefaultPanelBody = (args) => (
  <PanelBody {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae
    nostrum quo fuga iste reprehenderit ab fugit, soluta ea! Culpa, dignissimos
    dolores! Delectus fugiat numquam doloremque consequuntur tempora ipsam
    excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
    reiciendis culpa incidunt corporis dolorem eum ullam totam cum iusto
    voluptate, maxime modi porro aperiam eveniet tempore ea? Quidem, at harum!
  </PanelBody>
);

export const Regular: Story = {
  args: {
    name: 'Blood Group',
    title: 'A- type',
    panelStyle: 'primary',
  },
  render: (args) => <DefaultPanelBody {...args} />,
};

export const WithHeader: Story = {
  args: {
    title: 'B- type',
    panelStyle: 'primary',
  },
  render: (args: PanelCustomProps) => {
    return (
      <Panel {...args}>
        <PanelHeader {...args} />
        <DefaultPanelBody {...args}></DefaultPanelBody>
      </Panel>
    );
  },
};

export const WithCollapse: Story = {
  args: {
    name: 'Blood Group',
    title: 'O+ type',
    panelStyle: 'primary',
  },
  render: (args: PanelCustomProps) => {
    const [openPanel, setOpenPanel] = React.useState(false);
    const handleTogglePanel = () => setOpenPanel(!openPanel);
    return (
      <Panel {...args}>
        <PanelHeader
          {...args}
          isCollapsed={openPanel}
          toggleItem={handleTogglePanel}
          iconPosition="right"
        />
        <Collapse isOpen={openPanel}>
          <DefaultPanelBody {...args}></DefaultPanelBody>
        </Collapse>
      </Panel>
    );
  },
};
