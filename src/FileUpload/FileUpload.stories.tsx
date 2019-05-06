import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FileUpload, File } from '../';

storiesOf('FileUpload', module).add(
  'FileUpload',
  () => (
    <div>
      <FileUpload
        onFilesAdded={action('Files added!')}
        disabled={boolean('disabled', false)}
      />
      <File file={{}} />
      <File file={{}} />
      <File file={{}} />
    </div>
  ),
  {
    info: {
      text: `
        ### Notes
        
        This is a FileUpload Component
        `,
    },
  },
);
