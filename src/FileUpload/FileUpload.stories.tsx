import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { FileUpload } from '../';

storiesOf('FileUpload', module).add(
  'FileUpload',
  () => (
    <FileUpload onFilesAdded={console.log}>File Upload comming up!</FileUpload>
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
