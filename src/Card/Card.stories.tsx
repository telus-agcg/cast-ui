import * as React from 'react';

import { Card } from '../';
import Title from '../Typography/Title';

const description = `
Cards include various options for customizing their backgrounds, borders, and color.

###### Style
Use the **cardStyle** prop to set the style of the card
Options include
- default (default)
- primary
- success
- warning
- danger

###### Background
Use the **bgColor** prop to set the background of the card in CSS color format.

###### Borders
Use the **highlightBorder** prop to select the border
that will bear the prominent size and color of the style.
Options include
- top (default)
- right
- left
- bottom
- all
When using **all** all the borders will be the same size as defined in your theme.
`;

export default {
  title: 'Components/Data Display/Card',
  component: Card,
  argTypes: {
    cardStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
    },
    highlightBorder: {
      options: ['top', 'left', 'right', 'bottom', 'all'],
      control: { type: 'select' },
    },
    bgColor: {
      control: { type: 'color' },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const _Card = args => (
  <Card {...args}>
    <Title>Card Header</Title>
    <div>
      <b>Nullam mattis egestas tortor</b>
      <p>Aliquam porttitor aliquet fringilla.</p>
      <b>Nullam mattis egestas tortor</b>
      <p>
        Duis pellentesque, risus id faucibus porttitor,
        <br />
        dolor arcu tristique ligula, id tincidunt odio nisl id tellus. dolor
        arcu tristique ligula, id tincidunt odio nisl id tellus.
      </p>
    </div>
  </Card>
);

_Card.args = {
  bgColor: '#ffffff',
  cardStyle: 'primary',
  highlightBorder: 'top',
};
