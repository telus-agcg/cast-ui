import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import { RadioButton } from '../';
// import { action } from '@storybook/addon-actions';

class Component extends React.Component<any, any> {
  state = {
    value: 1,
  };

  onChange = (value: any) => (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    this.setState({
      value,
    });
  };

  render() {
    return (
      <div onClick={this.onChange(this.state.value === 1 ? 2 : 1)}>
        <RadioButton
          id="myInput1"
          name="input1"
          disabled={boolean('disabled', false)}
          rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
          value="1"
          checked={this.state.value === 1}
          displayStyle={select('displayStyle', ['inline', 'stacked'], 'inline')}
        >
          One
        </RadioButton>
        <br />
        <br />
        <br />
        <RadioButton
          id="myInput2"
          name="input2"
          disabled={boolean('disabled', false)}
          rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
          value="2"
          checked={this.state.value === 2}
          displayStyle={select('displayStyle', ['inline', 'stacked'], 'inline')}
        >
          One
        </RadioButton>
      </div>
    );
  }
}

storiesOf('RadioButton', module).add('RadioButton', () => <Component />, {
  info: {
    text: `
        ### Notes

				The Radio Button component improves the styling, layout and behavior of default radio input HTML element.

        ##### Disabled
        Disabled radio buttons are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

        ##### Display Style
				By default, any number of radio buttons that are immediate sibling will be *vertically stacked* and appropriately spaced.
				
				Alternatively, group radio buttons on the same horizontal row by settings the **displayStyle** prop to **inline**

        `,
  },
});
