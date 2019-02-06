import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip.component';
import { wInfo } from '../storybook-utils';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Tooltip', module).add(
  'ControlledTooltip',
  wInfo(`

  ### Notes

  This is a Tooltip, based on [tippy.js](https://atomiks.github.io/tippyjs/).
 `)(() => <TooltipStory />),
);

const MyComponent = (props: any) => (
  <div>This is a component to be rendered in the tooltip</div>
);

class TooltipStory extends React.Component {
  render() {
    return (
      <div style={{ width: '50%' }}>
        <Tooltip
          content={<MyComponent />}
          isVisible={boolean('isOpen', false)}
          trigger="manual"
        >
          <button>This button has a controlled tooltip</button>
        </Tooltip>
      </div>
    );
  }
}
