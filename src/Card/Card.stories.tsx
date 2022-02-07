import * as React from 'react';

import { Card } from '../';
import Title from '../Typography/Title';

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
