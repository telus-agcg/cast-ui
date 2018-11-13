import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs/react';
import { wInfo } from '../utils';

import { Panel } from './Panel.component';

(storiesOf('Panel', module) as any).addWithJSX(
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
      titleBg={color('titleBg', '#eee')}
    />
  )),
);
