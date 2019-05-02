import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('FileUpload', module).add(
  'FileUpload',
  () => <div>File Upload comming up!</div>,
  {
    info: {
      text: `
        ### Notes
        
        This is a FileUpload Component
        `,
    },
  },
);
