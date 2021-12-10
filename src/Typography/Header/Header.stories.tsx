import * as React from 'react';
import { Header } from './Header.component';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: [10, 20],
      },
    },
  },
};

export const _Header = args => <Header {...args}>Example Header</Header>;

_Header.args = {
  size: 10,
};

_Header.parameters = {
  info: {
    text: `
      ### Notes

      Documentation and examples for Cast UI Headline.
      `,
  },
};
