import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';

import { Panel } from './Panel.component';
import { defaultTheme } from '../themes/';

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
      titleBg={color('titleBg', defaultTheme.styles.default.flood)}
      bodyBg={color('bodyBg', defaultTheme.styles.default.flood)}
      titleColor={color('titleColor', defaultTheme.styles.default.text)}
      collapse={boolean('Collapse', false)}
    >
      This is my body...
    </Panel>
  )),
);
