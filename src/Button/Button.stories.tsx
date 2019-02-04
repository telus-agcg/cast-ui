import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button.component';
import { wInfo } from '../storybook-utils';

storiesOf('Button', module).add(
  'Button',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`)(() => (
    <Button
      btnStyle={select(
        'btnStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'success',
      )}
      btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      onClick={action('Clicked!')}>
      Submit Button
    </Button>
  )),
);
