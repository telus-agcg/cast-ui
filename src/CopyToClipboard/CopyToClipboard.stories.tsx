import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';

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
      copyText='Some text that is usually copied to clipboard.'
      background='disabledBackground'
      includeButton={true}
    />
  ~~~`)(() => (
    <CopyToClipboard
      copyText={text(
        'Copy text',
        'Some text that is usually copied to clipboard.',
      )}
      background={select(
        'background',
        ['disabledBackground', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      includeButton={boolean('Include Copy Button', true)}
    />
  )),
);
