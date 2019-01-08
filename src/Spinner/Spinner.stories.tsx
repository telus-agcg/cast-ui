import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Spinner } from './Spinner.component';
import { wInfo } from '../storybook-utils';

storiesOf('Spinner', module).add(
  'Spinner',
  wInfo(`

  ### Notes

  This is a spinner

  ### Usage
  ~~~js
  <Spinner
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`)(() => (
    <Spinner
      btnStyle={select(
        'btnStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'success',
      )}
      btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      onClick={action('Clicked!')}>
      Submit
    </Spinner>
  )),
);
