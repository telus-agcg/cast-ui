import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';

import { Panel } from './Panel.component';

storiesOf('Panel', module).add(
  'Panel with Title',
  wInfo(`
  ### Notes
  This is a panel
  ### Usage
  ~~~js
  <Panel
    title={'Enroll'}
  />
  ~~~`)(() => (
    <Panel
      title={text('Title', 'Catchy title')}
      titleBg={color('titleBg', 'red')}
      bodyBg={color('bodyBg', '#fff')}
    >
      This is my body...
    </Panel>
  )),
);
