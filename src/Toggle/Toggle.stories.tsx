import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Toggle from './Toggle.component';
import { wInfo } from '../storybook-utils';

storiesOf('Toggle', module).add(
  'Toggle',
  wInfo(`

  ### Notes

  This is a Toggle control

  ### Usage
  ~~~js
  <Toggle
    id='myInput1'
    toggleSize='md'
    defaultChecked={true}
    disabled={false}
    onChange={fn()}
    value='1'
    >
    One
  </Checkbox>
  ~~~`)(() => (
    <div>
      <Toggle
        id="toggleId"
        toggleSize={select('toggleSize', ['sm', 'md', 'lg'], 'md')}
        checked={boolean('checked', true)}
        disabled={boolean('disabled', false)}
        onChange={action('onChange 1')}
        value="1"
      >
        One
      </Toggle>
    </div>
  )),
);
