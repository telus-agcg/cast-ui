import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { Toast } from '../Toast';
import { ToastSizeEnum, ToastStyleEnum } from './Toast.component';

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
        active={boolean('active', true)}
        size={select('toastSize', [ToastSizeEnum.SMALL, ToastSizeEnum.LARGE], ToastSizeEnum.LARGE)}
        toastStyle={select('toastStyle', [
          ToastStyleEnum.PRIMARY,
          ToastStyleEnum.SECONDARY,
          ToastStyleEnum.SUCCESS,
          ToastStyleEnum.WARNING,
          ToastStyleEnum.DANGER,
        ], ToastStyleEnum.PRIMARY)}
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
