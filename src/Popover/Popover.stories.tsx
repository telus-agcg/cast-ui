import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';
import { boolean, select, text } from '@storybook/addon-knobs';


storiesOf('Popover', module).add(
  'Popover',
  wInfo(`

  ### Notes

  This is a Popover, based on the
  [react-popover](https://github.com/littlebits/react-popover) component.

  ### Usage
  ~~~js
  <Popover
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