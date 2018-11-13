import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button.component';
import { wInfo } from '../storybook-utils';

storiesOf('Button', module).add(
  'basic Button',
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
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={action('Clicked!')}
    />
  )),
);
