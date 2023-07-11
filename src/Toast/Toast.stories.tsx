import * as React from 'react';
import { Toast } from '../Toast';
import { Button } from '../Button';

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
    lightMode: {
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

export const _Toast = ({ isOpen, ...args }) => {
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    setShowToast(isOpen);
  }, [isOpen]);

  const handleToggleModal = () => setShowToast(!showToast);

  return (
    <>
      <Button onClick={handleToggleModal}>Click to see Notification</Button>
      <Toast {...args} active={showToast}>
        You have a new notification
      </Toast>
    </>
  );
};

_Toast.args = {
  position: 'fixed top right',
  active: true,
  lightmode: true,
  toastStyle: 'primary',
};
