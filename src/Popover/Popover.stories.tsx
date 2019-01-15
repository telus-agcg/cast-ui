import * as React from 'react';
import { storiesOf } from '@storybook/react';
<<<<<<< HEAD

import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';
import { boolean, select, text } from '@storybook/addon-knobs';
=======
import { boolean } from '@storybook/addon-knobs/react';

import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';
>>>>>>> 3e77c8d... adds popover component

storiesOf('Popover', module).add(
  'Popover',
  wInfo(`

  ### Notes

<<<<<<< HEAD
  This is a Popover, based on the
  [react-popover](https://github.com/littlebits/react-popover) component.
=======
  This is a Select, based on the react-select component
>>>>>>> 3e77c8d... adds popover component

  ### Usage
  ~~~js
  <Popover
<<<<<<< HEAD
    visible={false} />~~~`)(() => <PopoverStory />),
);

class PopoverStory extends React.Component {
  render() {
    return (
      <div style={{ width: '50%' }}>
        <Popover
          body={text('body', 'this can be a string or a component')}
          isOpen={boolean('isOpen', false)}
          usePointer={boolean('usePointer', false)}
          preferPlace={select(
            'preferPlace',
            ['above', 'below', 'right', 'left'],
            'below',
          )}
          place={select('place', ['above', 'below', 'right', 'left'], 'below')}
        >
          <button>This button has a popover</button>
        </Popover>
      </div>
    );
  }
}
=======
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
>>>>>>> 3e77c8d... adds popover component
