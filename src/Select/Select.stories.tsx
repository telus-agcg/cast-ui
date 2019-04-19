import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import { Select } from '../';

storiesOf('Select', module).add(
  'Select',
  () => (
    <div>
      <Select
        id="mySelect"
        disabled={boolean('disabled', false)}
        selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
        invalid={boolean('invalid', false)}
        invalidText={text('invalidText', 'A valid value is required')}
        invalidTextColor={text('invalidTextColor', '')}
        borderColor={text('borderColor', 'red')}
        borderRadius={text('borderRadius', '4px')}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Select, based on the react-select component
        `,
    },
  },
);
