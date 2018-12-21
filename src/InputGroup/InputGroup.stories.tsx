import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../storybook-utils';

import { InputGroup } from './InputGroup.component';
import { Input } from '../Input/Input.component';
import { text } from '@storybook/addon-knobs';

storiesOf('InputGroup', module).add(
  'InputGroup with Title',
  wInfo(`
  ### Notes
  This is a InputGroup
  ### Usage
  ~~~js
  <InputGroup
    label={'This is my label'}
  />
  ~~~`)(() => (
    <InputGroup label={text('label', 'This is my label')}>
      <Input
        inputSize="md"
        type="text"
        disabled={false}
        required={false}
        autoComplete="on"
        maxLength={1000}
      />
    </InputGroup>
  )),
);
