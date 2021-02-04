import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { CopyToClipboard } from '../';

import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { ic_check as icCheck } from 'react-icons-kit/md/ic_check';
const SecondaryCopyContent = () => <Icon size={16} icon={ICopy} />;
const SecondaryCopySuccessContent = () => <Icon size={16} icon={icCheck} />;

storiesOf('CopyToClipboard', module).add(
  'CopyToClipboard',
  () => (
    <div>
      <CopyToClipboard
        copyContent={text(
          'Copy Text',
          `
    <CopyToClipboard
      copyContent='Some text that is usually copied to clipboard.'
      copyContainerClass='copy-container'
      background='#F5F7F8'
      includeCopyButton={true}
      copyButtonContent='copy'
      copyButtonClass='copy-button'
    />
          `,
        )}
        copyContainerClass={text('Copy Container Class', 'copy-container')}
        background={text('Background', '#F5F7F8')}
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
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Copy-To-Clipboard component
        `,
    },
  },
);
