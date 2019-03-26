import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Button } from '../Button';

import { Modal } from '../';

const DemoButtons = () => {
  return (
    <div>
      <Button
        btnSize="md"
        btnStyle="primary"
      >
        OK
        </Button>
      <Button
        btnSize="md"
        btnStyle="default"
      >
        Cancel
        </Button>
    </div>
  );
};

storiesOf('Modal', module).add(
  'Modal',
  () => (
    <Modal
      isOpen={boolean('isOpen', true)}
      id="myModal"
      footerContent={DemoButtons}
      modalSize={select(
        'modalSize',
        ['sm', 'md', 'lg', 'full'],
        'md',
      )}
      modalTitle={text('modalTitle', 'red')}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Modal>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Modal, based on the react-modal component.

        To open or close the modal, change the 'isOpen' prop.

        To set the width of the modal, change the 'modalSize' props to either
        - *sm* 300px
        - *md* 500px (default)
        - *lg* 800px

        In addition of the string options under *footerContent*,
        you can pass a component instead of any of those.
      `,
    },
  },
);
