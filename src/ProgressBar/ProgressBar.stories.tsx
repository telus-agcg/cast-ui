import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar, ProgressBarProps } from './ProgressBar.component';
import { Themes } from '@themes';

const meta: Meta<typeof ProgressBar> = {
title: "Components/Data Display/Progress Bar",
  component: ProgressBar,
  argTypes: {
    height: {
      control: 'text',
    },
    background: {
      control: 'color',
    },
    progressBackground: {
      control: 'color',
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    percentage: 50,
  },
};

export const CustomHeightAndColors: Story = {
  args: {
    percentage: 75,
    height: '20px',
  },
};

export const FullProgress: Story = {
  args: {
    percentage: 100,
  },
};

export const EmptyProgress: Story = {
  args: {
    percentage: 0,
  },
};
