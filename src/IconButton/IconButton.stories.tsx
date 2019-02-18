import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { select } from '@storybook/addon-knobs/react';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { info } from 'react-icons-kit/fa/info';

import { IconButton } from './';
import { wInfo } from '../storybook-utils';

storiesOf('IconButton', module).add(
  'IconButton',
  wInfo(`

  ### Notes

  This is a IconButton

  ### Usage
  ~~~js
    <IconButton
      icon={info}
      iconsize={10}
      pixelbuttonsize={18}
      btnSize="sm"
      btnStyle="success"
      onClick={() => {}}
    />
    <IconButton
      icon={icAdd}
      btnSize="sm"
      btnStyle="primary"
      onClick={() => {}}
    />
  ~~~`)(() => (
    <div>
      <IconButton
        icon={info}
        iconsize={10}
        pixelbuttonsize={18}
        btnSize="sm"
        btnStyle="success"
        onClick={() => {}}
      />
      <IconButton
        icon={icAdd}
        btnSize="sm"
        btnStyle="primary"
        onClick={() => {}}
      />
    </div>
  )),
);
