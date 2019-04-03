import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { InputGroup, Input } from '../';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('InputGroup', module).add(
  'InputGroup with Title',
  () => (
    <InputGroup
      label={text('label', 'This is my label')}
      vertical={boolean('vertical', false)}
      inputSize="md"
    >
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
