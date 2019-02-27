import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';

import { Panel } from './Panel.component';

storiesOf('Panel', module).add(
  'Panel with Title',
  wInfo(`
  ### Notes
  This is a panel
 `)(() => (
    <Panel
      name={text('Panel Name', 'Catchy Name')}
      title={text('Title', 'Catchy title')}
      isCollapsed={boolean('isCollapsed', false)}
      noPadding={boolean('noPadding', false)}
      collapsible={boolean('Collapsible', true)}
      headerBackgroundColor={text('headerBackgroundColor', 'white')}
      headerBorderColor={text('headerBorderColor', 'lightGray')}
      bodyBackgroundColor={text('bodyBackgroundColor', 'panelBackground')}
      bodyBorderColor={text('bodyBorderColor', 'lightGray')}
      panelStyle={select(
        'panelStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'default',
      )}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae
      nostrum quo fuga iste reprehenderit ab fugit, soluta ea! Culpa,
      dignissimos dolores! Delectus fugiat numquam doloremque consequuntur
      tempora ipsam excepturi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Saepe, reiciendis culpa incidunt corporis dolorem eum
      ullam totam cum iusto voluptate, maxime modi porro aperiam eveniet tempore
      ea? Quidem, at harum!
    </Panel>
  )),
);
