import * as React from 'react';
import { Range } from 'react-input-range';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Slider } from './';

class Component extends React.Component {
  state = {
    value: {
      min: 80,
      max: 110,
    },
  };

  onChange = (range: Range) => {
    this.setState({
      value: {
        min: range.min,
        max: range.max,
      },
    });
  };

  render() {
    return (
      <Slider
        minValue={select('minValue', [20, 30, 40, 50, 60, 70], 50)}
        maxValue={select('maxValue', [120, 130, 140, 150, 160, 170], 150)}
        step={select('step', [1, 2, 3, 5, 8, 13, 21], 5)}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

storiesOf('Slider', module).add('Default Slider', () => <Component />);
