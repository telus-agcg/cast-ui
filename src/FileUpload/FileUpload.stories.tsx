import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs/react';
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
        info={text('info', 'File size not more than 15MB')}
      />
      <File
        file={sampleFile}
        fileDetails={text(
          'fileDetails(File 1)',
          'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM',
        )}
        actionable={boolean('actionable(File 1)', true)}
        uploaded={boolean('uploaded(File 1)', false)}
        onSelect={action('File 1 selected!')}
        onCancel={action('File 1 upload cancelled!')}
        onDelete={action('File 1 deleted!')}
        progressBarProps={{ percentage: number('percentage(File 1)', 70) }}
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
