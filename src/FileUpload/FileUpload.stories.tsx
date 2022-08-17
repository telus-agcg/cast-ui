import * as React from 'react';
import { FileUpload, File } from '../';

const sampleFile = {
  name: 'Sample file.yml',
  size: 9032385,
  type: 'application/x-yaml',
};
const TestAttachmentsComponent = () => {};

const description = `
This is a FileUpload Component. 
The AJAX library used in parent application 
should be responsible for controlling the upload progress(percent) of a file's ProgressBar`;

export default {
  title: 'Components/Interactions',
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
    canDelete: {
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
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const _FileUpload = ({ disabled, info, percentage, ...fileProps }) => {
  const [files, setFiles] = React.useState([sampleFile]);

  return (
    <div>
      <FileUpload
        disabled={disabled}
        info={info}
        onFilesAdded={(files: any) => setFiles(files)}
      />
      {files.map((file: any, i: any) => (
        <File
          {...fileProps}
          progressBarProps={{ percentage }}
          key={i}
          file={file}
          fileDetails={'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM'}
        />
      ))}
    </div>
  );
};

_FileUpload.args = {
  disabled: false,
  info: 'File size not more than 15MB',
  canDelete: true,
  uploaded: false,
  percentage: 70,
  fileDetails: 'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM',
};
