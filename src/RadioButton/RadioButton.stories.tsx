import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton.component';

const description = `
The Radio Button component improves the styling, layout and behavior of default radio input HTML element.

###### Disabled
Disabled radio buttons are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

###### Display Style
By default, any number of radio buttons that are immediate sibling will be *vertically stacked* and appropriately spaced.
Alternatively, group radio buttons on the same horizontal row by settings the **displayStyle** prop to **inline**
`;

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Interactions/Radio Button',
  component: RadioButton,

  parameters: {
    docs: {
      description,
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const _RadioButton: Story = {
  args: {
    disabled: false,
    rbSize: 'md',
    checked: true,
    displayStyle: 'inline',
  },
  render: (args) => {
    return (
      <div>
        <RadioButton
          id="myInput1"
          data-testid="input1-radio-button"
          name="radio-buttons"
          {...args}
          value={'one'}
        >
          One
        </RadioButton>
        <RadioButton
          id="myInput2"
          data-testid="input2-radio-button"
          name="radio-buttons"
          {...args}
          value={'two'}
        >
          Two
        </RadioButton>
      </div>
    );
  },
};
