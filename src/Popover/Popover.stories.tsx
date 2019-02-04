import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Popover from './Popover.component';
import { wInfo } from '../storybook-utils';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Popover', module).add(
  'ControlledPopover',
  wInfo(`

  ### Notes

  This is a Popover, based on the
  [react-popover](https://github.com/littlebits/react-popover) component.
  `)(() => <PopoverStory />),
);

const MyComponent = (props: any) => (
  <div>This is a component to be rendered in the popover</div>
);

class PopoverStory extends React.Component {
  render() {
    return (
      <div style={{ width: '50%' }}>
        <Popover
          content={<MyComponent />}
          isVisible={boolean('isOpen', false)}
          arrow={true}
          placement="bottom"
          trigger="manual"
        >
          <button>This button has a controlled popover</button>
        </Popover>
      </div>
    );
  }
}
