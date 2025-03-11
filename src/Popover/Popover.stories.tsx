import * as React from 'react';
import { Popover } from './Popover.component';
import { Meta } from '@storybook/react';
import { Button } from '../Button/Button.component';

const meta: Meta<typeof Popover> = {
  title: 'Components/Data Display/Popover',
  component: Popover,
};

export default meta;
const MyComponent = (_props: any) => (
  <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
    This can be a component
    <br />
    or text.
  </div>
);

export const _Popover = (args) => (
  <Popover content={<MyComponent />} {...args}>
    <span>
      <Button
        btnSize="md"
        btnStyle="primary"
        onClick={() => null}
        theme={args.theme}
      >
        This button has a controlled popover
      </Button>
    </span>
  </Popover>
);

_Popover.args = {
  isVisible: true,
  arrow: true,
  size: 'regular',
  placement: 'bottom',
};
