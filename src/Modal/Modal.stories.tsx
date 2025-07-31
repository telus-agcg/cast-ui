import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal.component';
import { Button } from '../Button/Button.component';

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

const meta: Meta<typeof Modal> = {
  title: 'Components/Data Display/Modal',
  component: Modal,
  parameters: {
    description,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      control: 'boolean',
    },
    modalSize: {
      options: ['sm', 'md', 'lg', 'full'],
      control: 'select',
    },
    modalTitle: {
      control: 'text',
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
      control: 'boolean',
    },
  },
};

export default meta;

const DemoButtons = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        btnStyle="primary"
        outline={true}
        onClick={props.handleCloseModal}
        theme={props.theme}
      >
        Cancel
      </Button>
      <Button
        btnStyle="success"
        onClick={props.handleCloseModal}
        theme={props.theme}
      >
        Submit
      </Button>
    </div>
  );
};

type Story = StoryObj<typeof Modal>;

export const _Modal: Story = {
  args: {
    isOpen: true,
    modalSize: 'md',
    modalTitle: 'Modal Title',
    children: <p>lorem ipsum</p>,
    disableCloseIcon: false,
  },
  render({ children, isOpen, modalTitle, disableCloseIcon, theme, ...args }) {
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
      setOpenModal(isOpen);
    }, [isOpen]);

    const handleToggleModal = () => setOpenModal(!openModal);

    return (
      <>
        <Button onClick={handleToggleModal} theme={theme}>
          Open Modal
        </Button>
        <Modal
          isOpen={openModal}
          modalTitle={modalTitle}
          {...args}
          footerContent={
            <DemoButtons handleCloseModal={handleToggleModal} theme={theme} />
          }
          id="myModal"
          onTitleClose={handleToggleModal}
          disableCloseIcon={disableCloseIcon}
        >
          {children}
        </Modal>
      </>
    );
  },
};
