import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload.component';
import { File } from './File.component';
import { ProgressBar } from '../ProgressBar/ProgressBar.component';

type FileUploadCustomArgs = React.ComponentProps<typeof FileUpload> &
  React.ComponentProps<typeof File> &
  React.ComponentProps<typeof ProgressBar>;

const sampleFile = {
  name: 'Sample file.yml',
  size: 9032385,
  type: 'application/x-yaml',
};

const description = `
This is a FileUpload Component. 
The AJAX library used in parent application 
should be responsible for controlling the upload progress(percent) of a file's ProgressBar`;

const meta: Meta<FileUploadCustomArgs> = {
  title: 'Components/Interactions',
  component: FileUpload,
  subcomponents: { File: File as React.ComponentType<unknown> },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
    },
    info: {
      control: 'text',
    },
    onFilesAdded: {
      action: {
        type: 'onFilesAdded',
      },
    },
    fileDetails: {
      control: 'text',
    },
    canDelete: {
      control: 'boolean',
    },
    uploaded: {
      control: 'boolean',
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
      control: 'number',
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<FileUploadCustomArgs>;

export const _FileUpload: Story = {
  args: {
    disabled: false,
    info: 'File size not more than 15MB',
    canDelete: true,
    uploaded: false,
    percentage: 70,
    fileDetails: 'Added by Benedict Cumberbatch on 3/15/2019 08:30 AM',
  },
  render: ({ disabled, info, percentage, ...fileProps }) => {
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
  },
};
