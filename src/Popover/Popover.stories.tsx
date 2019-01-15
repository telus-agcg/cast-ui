import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';

storiesOf('Popover', module).add(
  'Popover',
  wInfo(`

  ### Notes

  This is a Select, based on the react-select component

  ### Usage
  ~~~js
  <Popover
    visible={false}
  />~~~`)(() => (
    <div style={{ width: '50%' }}>
      <Popover visible={boolean('visible', false)}>
        <Popover.Toggle>Click me</Popover.Toggle>
        <Popover.Content>
          Pop
          <br />
          Pop
        </Popover.Content>
      </Popover>
    </div>
  )),
);
storiesOf('Popover', module).add(
  'Popover on Button',
  wInfo(`

  ### Notes

  This is a Select, based on the react-select component

  ### Usage
  ~~~js
  <Popover
    visible={false}
  />~~~`)(() => (
    <div style={{ width: '50%' }}>
      <Popover
        btnToggle
        onToggle={(v: boolean) => alert(v)}
        visible={boolean('visible', false)}
      >
        <Popover.Toggle>Click me</Popover.Toggle>
        <Popover.Content>
          Pop
          <br />
          Pop
        </Popover.Content>
      </Popover>
    </div>
  )),
);
