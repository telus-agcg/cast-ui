import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
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

storiesOf('Modal', module)
  .add(
    'Modal',
    () => (
      <Modal
        isOpen={boolean('isOpen', true)}
        id="myModal"
        footerContent={<DemoButtons />}
        modalSize={select('modalSize', ['sm', 'md', 'lg', 'full'], 'md')}
        modalTitle={text('modalTitle', 'red')}
        onRequestClose={action('onRequestClose')}
        onTitleClose={action('onTitleClose')}
      >
        <p>Lorem</p>
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
  )
  .add(
    'Scrollable',
    () => (
      <Modal
        isOpen={boolean('isOpen', true)}
        id="myModal"
        footerContent={<DemoButtons />}
        modalSize={select('modalSize', ['sm', 'md', 'lg', 'full'], 'md')}
        modalTitle={text('modalTitle', 'red')}
        onRequestClose={action('onRequestClose')}
        onTitleClose={action('onTitleClose')}
      >
        {Array(20)
          .fill('')
          .map((_, index) => (
            <div key={index}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, fugit velit. Aliquam autem blanditiis, consequatur
              dolore eius, harum ipsum maxime nam nihil officiis optio, pariatur
              repellat soluta suscipit tempora ut?
            </div>
          ))}
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
