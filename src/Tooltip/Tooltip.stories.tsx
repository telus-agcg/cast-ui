import { ToolTip } from './Tooltip.component';
import { Meta, StoryObj } from '@storybook/react';
import { Info } from '@icons';

const meta: Meta<typeof ToolTip> = {
  title: 'Components/Data Display/Tooltip',
  component: ToolTip,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-end',
          'bottom-start',
          'left',
          'right',
        ],
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToolTip>;

export const _ToolTip: Story = {
  args: {
    arrow: true,
    placement: 'bottom',
  },
  render: (args) => {
    return (
      <div>
        {'Click the icon to see the tooltip'}
        <ToolTip content={'this is a string'} {...args} trigger="click">
          <span>
            <Info
              height={20}
              width={20}
              style={{ marginLeft: '5px', cursor: 'pointer' }}
            />
          </span>
        </ToolTip>
      </div>
    );
  },
};

const MyComponent = (_props: any) => (
  <p>This is a component to be rendered in the tooltip</p>
);
