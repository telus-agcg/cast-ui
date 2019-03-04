import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import { CopyToClipboard } from '../';

import { wInfo } from '../storybook-utils';
import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { ic_check as icCheck } from 'react-icons-kit/md/ic_check';
const SecondaryCopyContent = () => <Icon size={16} icon={ICopy} />;
const SecondaryCopySuccessContent = () => <Icon size={16} icon={icCheck} />;

storiesOf('CopyToClipboard', module).add(
  'CopyToClipboard',
  wInfo(`

  ### Notes

  This is a Copy-To-Clipboard component

  ### Usage
  ~~~js
    <CopyToClipboard
      copyContent='Some text hat is usually copied to clipboard.'
      copyContainerClass='copy-container'
      background='disabledBackgroutnd'
      includeCopyButton={true}
      copyButtonContent='copy'
      copyButtonClass='copy-button'
    />

    // Alternatively, the CopyToClipboard function can be used
    // on some external element to copy enclosed text as follows:

    <button type="button" onClick={CopyToClipboard.copy}>
      Copy Me
    </button>

    <button
      type="button"
      onClick={() =>
        CopyToClipboard.copy('Some Custom Text')
      }>
      Navigate
    </button>

    <a
      href="#"
      onClick={() =>
        CopyToClipboard.copy(
          'https://www.npmjs.com/package/@tkxs/cast-ui',
        )
      }>
      Copy Me
    </a>

  ~~~`)(() => (
    <div>
      <CopyToClipboard
        copyContent={text(
          'Copy Text',
          `
    <CopyToClipboard
      copyContent='Some text that is usually copied to clipboard.'
      copyContainerClass='copy-container'
      background='lightBackground'
      includeCopyButton={true}
      copyButtonContent='copy'
      copyButtonClass='copy-button'
    />
          `,
        )}
        copyContainerClass={text('Copy Container Class', 'copy-container')}
        background={text('Background', 'lightBackground')}
        includeCopyButton={boolean('Include Copy Button', true)}
        copyButtonContent={text('Copy Button Text', 'copy')}
        copyButtonClass={text('Copy Button Class', 'copy-button')}
        fullWidth={boolean('Occupy full width of parent', true)}
      />
      <br />
      <CopyToClipboard
        copyContent={text('Second Copy Content', 'CBA6697-67895')}
        copyButtonContent={<SecondaryCopyContent />}
        copyButtonSuccessContent={<SecondaryCopySuccessContent />}
        fullWidth={boolean('Second Copy Occupy full width of parent', false)}
      />
    </div>
  )),
);
