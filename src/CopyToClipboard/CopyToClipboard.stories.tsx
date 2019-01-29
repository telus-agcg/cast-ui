import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { CopyToClipboard } from './CopyToClipboard.component';
import { wInfo } from '../storybook-utils';

storiesOf('CopyToClipboard', module).add(
  'CopyToClipboard',
  wInfo(`

  ### Notes

  This is a Copy-To-Clipboard component

  ### Usage
  ~~~js
    <CopyToClipboard
      background="disabledBackground"
    />
  ~~~`)(() => (
    <CopyToClipboard
      background={select(
        'background',
        ['disabledBackground', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
    />
  )),
);
