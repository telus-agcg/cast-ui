import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox.component';

const description = `
The Checkbox component improves the styling, layout and behavior of default checkbox input HTML element.

###### Disabled
Disabled checkbox are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

###### Display Style
By default, any number of checkboxes that are immediate sibling will be *vertically stacked* and appropriately spaced.
Alternatively, group checkboxes on the same horizontal row by settings the **displayStyle** prop to **inline**
`;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Interactions/Checkbox',
  component: Checkbox,
  argTypes: {
    cbSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayStyle: {
      options: ['inline', 'stacked'],
      control: { type: 'inline-radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    invalidText: {
      control: { type: 'text' },
    },
    invalidTextColor: {
      control: { type: 'color' },
    },
    onChange: {
      action: { type: 'onChange' },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
    },
    id: {
      control: false,
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const _Checkbox: Story = {
  args: {
    id: 'myInput1',
    cbSize: 'md',
    checked: true,
    disabled: false,
    displayStyle: 'inline',
    indeterminate: false,
    invalid: false,
    invalidText: 'A valid value is required',
    defaultChecked: true,
    children: 'One',
  },
};

export const Indeterminate: Story = {
  args: {
    cbSize: 'md',
    checked: true,
    disabled: false,
    displayStyle: 'inline',
    indeterminate: true,
    invalid: false,
    invalidText: 'A valid value is required',
    defaultChecked: true,
    children: 'One',
  },
};

// export const _listOfCheckboxes = args => (
//   <div>
//     <div>
//       <Checkbox id="myInput1" value="1" data-testid="checkbox-1" {...args}>
//         One
//       </Checkbox>
//     </div>
//     <div>
//       <Checkbox id="myInput2" value="2" data-testid="checkbox-2" {...args}>
//         Two
//       </Checkbox>
//     </div>
//     <div>
//       <Checkbox id="myInput3" value="3" data-testid="checkbox-3" {...args}>
//         Three
//       </Checkbox>
//     </div>
//     <div>
//       <Checkbox id="myInput4" value="4" data-testid="checkbox-4" {...args}>
//         Four
//       </Checkbox>
//     </div>
//     <div>
//       <Checkbox id="myInput5" value="5" data-testid="checkbox-5" {...args}>
//         Five
//       </Checkbox>
//     </div>
//   </div>
// );

// _listOfCheckboxes.args = {
//   cbSize: 'md',
//   checked: true,
//   disabled: false,
//   displayStyle: 'inline',
//   indeterminate: false,
//   invalid: false,
//   invalidText: 'A valid value is required',
//   defaultChecked: true,
// };
