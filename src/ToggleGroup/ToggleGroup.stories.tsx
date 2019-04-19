import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ToggleGroup, Toggle } from '../';
import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('ToggleGroup', module).add(
  'ToggleGroup with Title',
  () => (
    <ToggleGroup
      label={text('label', 'This is my label')}
      vertical={boolean('vertical', false)}
      toggleSize={select('toggleSize', ['sm', 'md', 'lg'], 'md')}
    >
      <Toggle
        // id="toggleId"
        toggleSize={'md'}
        checked={true}
        disabled={false}
        // onChange={action('onChange 1')}
        value="1"
      />
    </ToggleGroup>
  ),
  {
    info: {
      text: `
        ### Notes
        This is a InputGroup
      `,
    },
  },
);
