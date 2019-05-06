import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FileUpload, File } from '../';

const sampleFile = {
  name: 'Sample file.yml',
  size: 9032385,
  type: 'application/x-yaml',
};
const TestAttachmentsComponent = () => {
  const [files, setFiles] = React.useState([]);

  return (
    <div>
      <FileUpload onFilesAdded={(files: any) => setFiles(files)} />
      {files.map((file: any, i: any) => (
        <File file={file} key={i} />
      ))}
    </div>
  );
};
storiesOf('FileUpload', module).add(
  'FileUpload',
  () => (
    <div>
      <FileUpload
        onFilesAdded={console.log}
        // onFilesAdded={action('Files added!')}
        disabled={boolean('disabled', false)}
      />
      <File
        file={sampleFile}
        actionable={boolean('actionable(File 1)', false)}
        uploaded={boolean('uploaded(File 1)', false)}
        onDelete={action('File deleted!')}
        onCancel={action('File upload cancelled!')}
      />
      <br />
      <TestAttachmentsComponent />
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
