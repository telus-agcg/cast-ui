import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import { Checkbox } from './Checkbox.component';
import { wInfo } from '../storybook-utils';

storiesOf('Checkbox', module).add(
  'Checkbox',
  wInfo(`

  ### Notes

  This is a Checkbox control

  ### Usage
  ~~~js
  <Checkbox
    id='myInput1'
    disabled={false}
    cbSize='md'
    cbStyle='primary'
    value={1}
    >
    One
  </Checkbox>
  ~~~`)(() => (
    <>
      <Checkbox
        id="myInput1"
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        cbSize={select('cbSize', ['sm', 'md', 'lg'], 'md')}
        cbStyle={select(
          'cbStyle',
          ['success', 'default', 'primary', 'danger', 'warning'],
          'primary',
        )}
        value="1"
      >
        One
      </Checkbox>
    </>
  )),
);
