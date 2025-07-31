import { Tooltip } from './Tooltip.component';
import { Meta, StoryObj } from '@storybook/react-vite';
import { InfoIcon } from '@icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: 'select',
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
    arrow: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const _ToolTip: Story = {
  args: {
    arrow: true,
    placement: 'bottom',
  },
  render: (args) => {
    return (
      <div>
        {'Click the icon to see the tooltip'}
        <Tooltip content={'this is a string'} {...args} trigger="click">
          <span>
            <InfoIcon
              height={20}
              width={20}
              style={{ marginLeft: '5px', cursor: 'pointer' }}
            />
          </span>
        </Tooltip>
      </div>
    );
  },
};

const MyComponent = (_props: any) => (
  <p>This is a component to be rendered in the tooltip</p>
);
