import * as React from 'react';
import { Range } from 'react-input-range';

import { Slider } from './';

export default {
  title: 'Components/Data Entry/Slider',
  component: Slider,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    minValue: {
      control: {
        type: 'select',
        options: [20, 30, 40, 50, 60, 70],
      },
    },
    maxValue: {
      control: {
        type: 'select',
        options: [120, 130, 140, 150, 160, 170],
      },
    },
    step: {
      control: {
        type: 'select',
        options: [1, 2, 3, 5, 8, 13, 21],
      },
    },
  },
};

export const _Slider = args => {
  const [state, setState] = React.useState({
    value: {
      min: 80,
      max: 110,
    },
  });

  const onChange = (range: Range) => {
    setState({
      value: {
        min: range.min,
        max: range.max,
      },
    });
  };

  return <Slider {...args} onChange={onChange} value={state.value} />;
};

_Slider.args = {
  minValue: 50,
  maxValue: 150,
  step: 5,
};
