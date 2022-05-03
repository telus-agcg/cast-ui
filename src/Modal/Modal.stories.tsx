import * as React from 'react';
import { Button } from '../Button';

import { Modal } from '../';

const description = `
This Modal is based on the [react-modal](https://www.npmjs.com/package/react-modal) component.
To open or close the modal, change the <code>isOpen</code> prop.
To set the width of the modal, change the <code>modalSize</code> props to either
- *sm* 300px
- *md* 500px (default)
- *lg* 800px
In addition of the string options under *footerContent*,
you can pass a component instead of any of those.
`;

const DemoButtons = props => {
  return (
    <div>
      <Button btnSize="md" btnStyle="primary" onClick={props.handleCloseModal}>
        OK
      </Button>
      <Button btnSize="md" btnStyle="primary" onClick={props.handleCloseModal}>
        Cancel
      </Button>
    </div>
  );
};

export default {
  title: 'Components/Data Display/Modal',
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
        component: description,
      },
    },
  },
};

const _Modal = ({ children, isOpen, modalTitle, ...args }) => {
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  const handleToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <Button onClick={handleToggleModal}>Open Modal</Button>
      <Modal
        id="myModal"
        footerContent={<DemoButtons handleCloseModal={handleToggleModal} />}
        isOpen={openModal}
        modalTitle={modalTitle}
        {...args}
        onTitleClose={handleToggleModal}
      >
        {children}
      </Modal>
    </>
  );
};

export const _Regular = _Modal.bind({});
_Regular.args = {
  isOpen: false,
  modalSize: 'md',
  modalTitle: 'Regular Modal',
  children: <p>Lorem</p>,
};

export const _Scrollable = _Modal.bind({});
_Scrollable.args = {
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
