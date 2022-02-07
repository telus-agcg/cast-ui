import * as React from 'react';
import { Button } from '../Button';

import { Modal } from '../';

const DemoButtons = () => {
  return (
    <div>
      <Button btnSize="md" btnStyle="primary">
        OK
      </Button>
      <Button btnSize="md" btnStyle="primary">
        Cancel
      </Button>
    </div>
  );
};

export default {
  title: 'Components/Utility/Modal',
  component: Modal,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    modalSize: {
      options: ['sm', 'md', 'lg', 'full'],
      control: {
        type: 'select',
      },
    },
    modalTitle: {
      control: {
        type: 'text',
      },
    },
    onRequestClose: {
      action: {
        type: 'onRequestClose',
      },
    },
    onTitleClose: {
      action: {
        type: 'onTitleClose',
      },
    },
    children: {
      control: false,
    },
    id: {
      control: false,
    },
    footerContent: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This Modal is based on the [react-modal](https://www.npmjs.com/package/react-modal) component.',
      },
    },
  },
};

const _Modal = ({ children, isOpen, modalTitle, ...args }) => (
  <Modal
    id="myModal"
    footerContent={<DemoButtons />}
    isOpen={isOpen}
    modalTitle={modalTitle}
    {...args}
  >
    {children}
  </Modal>
);

export const _ModalBasic = _Modal.bind({});
_ModalBasic.args = {
  isOpen: false,
  modalSize: 'md',
  modalTitle: 'Basic Modal',
  children: <p>Lorem</p>,
};

export const _ModalScrollable = _Modal.bind({});
_ModalScrollable.args = {
  isOpen: false,
  modalSize: 'md',
  modalTitle: 'Scrollable Modal',
  children: Array(20)
    .fill('')
    .map((_, index) => (
      <div key={index}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem, fugit velit. Aliquam autem blanditiis, consequatur
        dolore eius, harum ipsum maxime nam nihil officiis optio, pariatur
        repellat soluta suscipit tempora ut?
      </div>
    )),
};
