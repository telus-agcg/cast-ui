import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';

import { Textarea } from './Textarea.component';
import { wInfo } from '../storybook-utils';

storiesOf('Textarea', module).add(
  'Textarea',
  wInfo(`

  ### Notes

  This is a Textarea

  ### Usage
  ~~~js
  <Textarea
    textareaSize='md'
    disabled={false}
    required='false'
    rows='8'
    cols='60'
    maxLength='1000'
    placeholder='This is a placeholder'
  }
  />
  ~~~`)(() => (
    <Textarea
      textareaSize={select('textareaSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      rows={number('rows', 8)}
      cols={number('cols', 60)}
      maxLength={number('maxLength', 1000)}
      placeholder={text('placeholder', 'Placeholder Text')}
    />
  )),
);
