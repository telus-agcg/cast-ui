import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { Toast } from '../Toast';

storiesOf('Toast', module)
  .add('Custom Toast', () => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100px',
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <Toast
        position={select(
          'position',
          [
            'fixed top left',
            'fixed top right',
            'fixed bottom left',
            'fixed bottom right',
            'absolute top left',
            'absolute top right',
            'absolute bottom left',
            'absolute bottom right',
          ],
          'fixed top left',
        )}
      >
        TOASTER
      </Toast>
    </div>
  ))
  .add('Default Toast', () => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100px',
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <Toast>TOASTER</Toast>
    </div>
  ));
