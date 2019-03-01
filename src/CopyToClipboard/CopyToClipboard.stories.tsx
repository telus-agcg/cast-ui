import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

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
      copyContent='Some text that is usually copied to clipboard.'
      copyContainerClass='copy-container'
      background='disabledBackground'
      includeCopyButton={true}
      copyButtonContent='copy'
      copyButtonClass='copy-button'
    />

    // Alternatively, the CopyToClipboard function can be used
    // on some external element to copy enclosed text as follows:

    <button type="button" onClick={CopyToClipboard.copyToClipboard}>
      Copy Me
    </button>

    <button
      type="button"
      onClick={() =>
        CopyToClipboard.copyToClipboard('Some Custom Text')
      }>
      Navigate
    </button>

    <a
      href="#"
      onClick={() =>
        CopyToClipboard.copyToClipboard(
          'https://www.npmjs.com/package/@tkxs/cast-ui',
        )
      }>
      Copy Me
    </a>

  ~~~`)(() => (
    <CopyToClipboard
      copyContent={text(
        'Copy Text',
        `
  ### Notes

  This is a Copy-To-Clipboard component

  ### Usage
  ~~~js
    <CopyToClipboard
      copyContent='Some text that is usually copied to clipboard.'
      copyContainerClass='copy-container'
      background='lightBackground'
      includeCopyButton={true}
      copyButtonContent='copy'
      copyButtonClass='copy-button'
    />

  ~~~
          `,
      )}
      copyContainerClass={text('Copy Container Class', 'copy-container')}
      background={text('Background', 'lightBackground')}
      includeCopyButton={boolean('Include Copy Button', true)}
      copyButtonContent={text('Copy Button Text', 'copy')}
      copyButtonClass={text('Copy Button Class', 'copy-button')}
    />
  )),
);
