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
      copyContainerClass='copy-container'
      background='disabledBackground'
      includeCopyButton={true}
      copyButtonText='copy'
      copyButtonClass='copy-button'
    />
  ~~~`)(() => (
    <CopyToClipboard
      copyText={text(
        'Copy Text',
        'Some text that is usually copied to clipboard.',
      )}
      copyContainerClass={text('Copy Container Class', 'copy-container')}
      background={select(
        'Background',
        ['disabledBackground', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      includeCopyButton={boolean('Include Copy Button', true)}
      copyButtonText={text('Copy Button Text', 'copy')}
      copyButtonClass={text('Copy Button Class', 'copy-button')}
    />
  )),
);
