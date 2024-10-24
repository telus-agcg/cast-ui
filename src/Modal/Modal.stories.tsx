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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        btnStyle="primary"
        outline={true}
        onClick={props.handleCloseModal}
      >
        Cancel
      </Button>
      <Button btnStyle="success" onClick={props.handleCloseModal}>
        Submit
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
    disableCloseIcon: {
      control: {
        type: 'boolean',
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

const _Modal = ({
  children,
  isOpen,
  modalTitle,
  disableCloseIcon,
  ...args
}) => {
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
        disableCloseIcon={disableCloseIcon}
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
  modalTitle: 'Modal Title',
  children: <p>Lorem Ipsum</p>,
  disableCloseIcon: false,
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
