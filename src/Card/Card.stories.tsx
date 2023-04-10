import * as React from 'react';

import { Card } from '../';
import Title from '../Typography/Title';

const description = `
###### Style
Use the **cardStyle** prop to set the style of the card
Options include
- default (default)
- primary
- success
- warning
- danger
`;

export default {
  title: 'Components/Data Display/Card',
  component: Card,
  argTypes: {
    cardStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
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
  cardStyle: 'primary',
};
