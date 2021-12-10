import * as React from 'react';

import { Badge } from '../';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    badgeSize: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    badgeStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: 'select',
    },
    lightMode: {
      control: 'boolean',
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const _Badge = args => <Badge {...args}>123</Badge>;

_Badge.args = {
  badgeSize: 'md',
  badgeStyle: 'primary',
  lightMode: false,
};

_Badge.parameters = {
  info: {
    text: `
      ### Notes

      This is a badge
      `,
  },
};
