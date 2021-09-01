import * as React from 'react';

import { CopyToClipboard } from '../';

import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { ic_check as icCheck } from 'react-icons-kit/md/ic_check';
const SecondaryCopyContent = () => <Icon size={16} icon={ICopy} />;
const SecondaryCopySuccessContent = () => <Icon size={16} icon={icCheck} />;

export default {
  title: 'CopyToClipboard',
  component: CopyToClipboard,
  argTypes: {
    copyContent: {
      control: {
        type: 'text',
      },
    },
    background: {
      control: {
        type: 'color',
      },
    },
    copyContainerClass: {
      control: false,
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    includeCopyButton: {
      control: {
        type: 'boolean',
      },
    },
    copyButtonContent: {
      control: {
        type: 'text',
      },
    },
    copyButtonSuccessContent: {
      control: false,
    },
    copyButtonClass: {
      control: false,
    },
    className: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
    copyContent2: {
      type: 'text',
    },
  },
};

export const _CopyToClipboard = ({ copyContent2, fullWidth, ...args }) => (
  <div>
    <CopyToClipboard {...args} fullWidth={fullWidth} />
    <br />
    <CopyToClipboard
      copyContent={copyContent2}
      copyButtonContent={<SecondaryCopyContent />}
      copyButtonSuccessContent={<SecondaryCopySuccessContent />}
      fullWidth={fullWidth}
    />
  </div>
);

_CopyToClipboard.args = {
  copyContent: `
<CopyToClipboard
copyContent='Some text that is usually copied to clipboard.'
copyContainerClass='copy-container'
background='#F5F7F8'
includeCopyButton={true}
copyButtonContent='copy'
copyButtonClass='copy-button'
/>
    `,
  copyContainerClass: 'copy-container',
  background: '#F5F7F8',
  includeCopyButton: true,
  copyButtonContent: 'copy',
  copyButtonClass: 'copy-button',
  fullWidth: true,
  copyContent2: 'CBA6697-67895',
};

_CopyToClipboard.story = {
  parameters: {
    info: {
      text: `
        ### Notes

        This is a Copy-To-Clipboard component
        `,
    },
  },
};
