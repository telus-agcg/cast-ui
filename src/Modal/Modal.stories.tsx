import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal.component';
import { Button } from '../Button/Button.component';
import { ModalSidePanel } from './ModalSidePanel.component';

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

const longLorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
      repellat culpa distinctio praesentium qui odio aliquam error ullam
      voluptatum a, quos tempora ab suscipit? Voluptatum, sunt, itaque ratione
      commodi officiis aspernatur facilis laborum, id cumque aliquam quisquam
      quia. Expedita optio obcaecati sed voluptatem nobis harum id deleniti
      similique. Cumque maxime animi optio sit sequi voluptatum veritatis,
      quaerat ipsum officia officiis quasi fugiat mollitia adipisci quam quos,
      soluta, eveniet repellendus temporibus voluptatibus at? Quisquam, labore
      ducimus? Quisquam deleniti neque hic asperiores, dolore quae dignissimos
      tempore cumque aliquam ex placeat vel inventore necessitatibus labore
      adipisci sit, quia, nobis quidem enim laborum? Beatae quo vero doloribus
      nulla nesciunt autem assumenda reiciendis obcaecati voluptate. Eos eum
      natus hic fuga rem quidem quod dolorum veniam in. Aliquam unde minima aut
      facilis, at, nemo blanditiis nostrum, neque assumenda perferendis debitis
      facere eius reiciendis. Blanditiis, eum error exercitationem accusamus
      quos eos minima, voluptatem consectetur eligendi ab sit iure explicabo
      illum ea aliquid saepe? Sint cupiditate, nesciunt fugit odio culpa atque.
      Ratione alias voluptates itaque necessitatibus aut amet, consequatur, vero
      consectetur mollitia soluta dolorum tempore aspernatur ullam odio facilis
      provident rem neque! Molestiae quae ea iure cupiditate tenetur facere
      eligendi nam dicta suscipit, quo labore, quas aliquam hic possimus? Nemo
      laboriosam distinctio fugiat veniam hic? Velit placeat harum nihil, eius,
      nesciunt dolorem ipsam, magni sint minima consequatur iure explicabo
      similique! Ratione, minima eveniet fugit modi voluptas aliquam nulla
`;
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

export const WithSidepanel: Story = {
  args: {
    isOpen: true,
    modalSize: 'lg',
    modalTitle: 'Modal Title',
    children: <p>{longLorem}</p>,
    disableCloseIcon: false,
  },
  render({ children, isOpen, modalTitle, disableCloseIcon, theme, ...args }) {
    const [openModal, setOpenModal] = React.useState(false);
    const [sidePanelOpen, setSidePanelOpen] = React.useState(true);

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
          <ModalSidePanel
            isOpen={sidePanelOpen}
            onClose={() => setSidePanelOpen(false)}
            title="Side Panel Title"
            width="md"
          >
            <p>Side panel content goes here.</p>
          </ModalSidePanel>
          <div style={{ height: '400px', overflowY: 'auto' }}>
            {children}
            <Button onClick={() => setSidePanelOpen(true)}>
              Open Side Panel
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
