import * as React from 'react';
import { TextDisplay } from './TextDisplay.component';

export default {
  title: 'Components/Typography/TextDisplay',
  component: TextDisplay,
  argTypes: {
    fontSize: {
      control: 'text',
    },
    fontWeight: {
      control: 'text',
    },
  },
};

export const _TextDisplay = args => <TextDisplay {...args}>Text</TextDisplay>;
