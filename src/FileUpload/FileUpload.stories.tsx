import * as React from 'react';
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
        <File
          key={i}
          file={file}
          uploaded={true}
          fileDetails={'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM'}
        />
      ))}
    </div>
  );
};

export default {
  title: 'Components/Inputs',
  component: FileUpload,
  subcomponents: {
    File,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    info: {
      control: {
        type: 'text',
      },
    },
    onFilesAdded: {
      action: {
        type: 'onFilesAdded',
      },
    },
    fileDetails: {
      control: {
        type: 'text',
      },
    },
    actionable: {
      control: {
        type: 'boolean',
      },
    },
    uploaded: {
      control: {
        type: 'boolean',
      },
    },
    onSelect: {
      action: {
        type: 'onSelect',
      },
    },
    onCancel: {
      action: {
        type: 'onCancel',
      },
    },
    onDelete: {
      action: {
        type: 'onDelete',
      },
    },
    progressBarProps: {
      control: false,
    },
    percentage: {
      control: {
        type: 'number',
      },
    },
  },
};

export const _FileUpload = ({
  disabled,
  info,
  onFilesAdded,
  percentage,
  ...args
}) => (
  <div>
    <FileUpload onFilesAdded={onFilesAdded} disabled={disabled} info={info} />
    <File file={sampleFile} {...args} progressBarProps={{ percentage }} />
    <br />
    <br />
    <b>
      <p>Attachments Component Example</p>
    </b>
    <TestAttachmentsComponent />
  </div>
);

_FileUpload.args = {
  disabled: false,
  info: 'File size not more than 15MB',
  actionable: true,
  uploaded: false,
  percentage: 70,
  fileDetails: 'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM',
};

_FileUpload.parameters = {
  info: {
    text: `
      ### Notes
      
      This is a FileUpload Component. The AJAX library used in parent application 
      should be responsible for contoling the upload progress(percent) of a file's
      ProgressBar
      `,
  },
};
