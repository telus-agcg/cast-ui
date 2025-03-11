import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.component';
import { Title } from '@typography';

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

const meta: Meta<typeof Card> = {
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
    description,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const _Card: Story = {
  args: {
    cardStyle: 'primary',
    children: (
      <>
        <Title>Card Header</Title>
        <p>Aliquam porttitor aliquet fringilla.</p>
        <p>
          Duis pellentesque, risus id faucibus porttitor,
          <br />
          dolor arcu tristique ligula, id tincidunt odio nisl id tellus. dolor
          arcu tristique ligula, id tincidunt odio nisl id tellus.
        </p>
      </>
    ),
  },
};
