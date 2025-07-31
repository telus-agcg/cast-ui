import { Meta, StoryObj } from '@storybook/react-vite';
import { HeadlessPopover } from './HeadlessPopover.component';
import { Button } from '../Button/Button.component';
import styled from 'styled-components';

const meta: Meta<typeof HeadlessPopover> = {
  title: 'Components/Interactions/Headless',
  component: HeadlessPopover,
};

export default meta;

type Story = StoryObj<typeof HeadlessPopover>;

export const _HeadlessPopover: Story = {
  args: {
    children: <Button>This button has a popover. Click me!</Button>,
    content: 'Hello! I am in a popover!',
  },
};
