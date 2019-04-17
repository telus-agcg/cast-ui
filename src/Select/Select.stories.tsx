import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import { Select } from '../';
import { Input } from '../Input';

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
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
      <Input
        id="myInput"
        type={'text'}
        autoComplete={'on'}
        disabled={false}
        inputSize={'sm'}
        invalid={false}
        invalidText={'A valid value is required'}
        invalidTextColor={''}
        maxLength={1000}
        placeholder={'Please enter some text'}
        required={false}
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
