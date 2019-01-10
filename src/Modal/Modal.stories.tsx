import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import Modal from './Modal.component';
import { wInfo } from '../storybook-utils';

storiesOf('Modal', module).add(
  'Modal',
  wInfo(`

  ### Notes

  This is a Modal, based on the react-modal component

  ### Usage
  ~~~js
  <Modal
    id="myModal"
    inputSize='md'
    disabled={false}
    invalid={false}
    invalidText='A valid value is required'
    options={[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]}
  />~~~`)(() => (
    <Modal
      id="myModal"
      disabled={boolean('disabled', false)}
      inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
    //   options={[
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ]}
    />
  )),
);
