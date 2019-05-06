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
      <File
        file={{}}
        actionable={boolean('actionable(File 1)', false)}
        uploaded={boolean('uploaded(File 1)', false)}
        onDelete={action('File deleted!')}
        onCancel={action('File upload cancelled!')}
      />
      <File file={{}} uploaded={true} onDelete={action('File deleted!')} />
      <File file={{}} onCancel={action('File upload cancelled!')} />
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
