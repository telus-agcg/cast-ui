import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import { DatePicker } from '../';

storiesOf('DatePicker', module).add(
  'DatePicker',
  () => [
    <DatePicker
      key="0"
      showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
      inputIconPosition={select(
        'inputIconPosition',
        ['before', 'after'],
        'after',
      )}
    />,
    <br key="br0" />,
    <DatePicker
      key="1"
      showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
      inputIconPosition={select(
        'inputIconPosition',
        ['before', 'after'],
        'after',
      )}
      small
    />,
    <br key="br1" />,
    <DatePicker
      key="2"
      showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
      inputIconPosition={select(
        'inputIconPosition',
        ['before', 'after'],
        'after',
      )}
      regular
    />,
    <br key="br2" />,
    <DatePicker
      key="3"
      showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
      inputIconPosition={select(
        'inputIconPosition',
        ['before', 'after'],
        'after',
      )}
      block
    />,
  ],
  {
    info: {
      text: `
        ### Notes

        This is a DatePicker, based on [react-day-picker](http://react-day-picker.js.org/).
        `,
    },
  },
);
