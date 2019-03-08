import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { InputGroup } from './InputGroup.component';
import { Input } from '../Input/Input.component';
import { text } from '@storybook/addon-knobs';

storiesOf('InputGroup', module).add(
  'InputGroup with Title',
  () => (
    <InputGroup label={text('label', 'This is my label')} inputSize="md">
      <Input
        id="myInput"
        inputSize="md"
        type="text"
        disabled={false}
        required={false}
        autoComplete="on"
        maxLength={1000}
      />
    </InputGroup>
  ),
  {
    info: {
      text: `
        ### Notes
        This is a InputGroup
      `,
    },
  },
);
