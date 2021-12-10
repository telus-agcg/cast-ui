import * as React from 'react';
import { Toast } from '../Toast';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: [
          'fixed top left',
          'fixed top right',
          'fixed bottom left',
          'fixed bottom right',
          'absolute top left',
          'absolute top right',
          'absolute bottom left',
          'absolute bottom right',
        ],
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
    lightmode: {
      control: {
        type: 'boolean',
      },
    },
    toastStyle: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    className: {
      control: false,
    },
    duration: {
      control: false,
    },
    content: {
      control: false,
    },
    children: {
      control: false,
    },
    alertProps: {
      control: false,
    },
  },
};

export const _Toast = args => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100px',
      border: '1px solid rgba(0,0,0,0.1)',
    }}
  >
    <Toast {...args}>TOASTER</Toast>
  </div>
);

_Toast.args = {
  position: 'fixed top left',
  active: true,
  lightmode: true,
  toastStyle: 'primary',
};
