import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import { Panel } from '../';

storiesOf('Panel', module).add(
  'Panel with Title',
  () => (
    <Panel
      name={text('Panel Name', 'Catchy Name')}
      title={text('Title', 'Catchy title')}
      isCollapsed={boolean('isCollapsed', false)}
      noPadding={boolean('noPadding', false)}
      collapsible={boolean('Collapsible', true)}
      headerColor={text('headerColor', '#303E47')}
      headerBackgroundColor={text('headerBackgroundColor', '#FFFFFF')}
      headerBorderColor={text('headerBorderColor', '#BCC0C3')}
      bodyBackgroundColor={text('bodyBackgroundColor', '#F5F7F8')}
      bodyBorderColor={text('bodyBorderColor', '#BCC0C3')}
      panelStyle={select(
        'panelStyle',
        ['success', 'primary', 'danger', 'warning'],
        'primary',
      )}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae
      nostrum quo fuga iste reprehenderit ab fugit, soluta ea! Culpa,
      dignissimos dolores! Delectus fugiat numquam doloremque consequuntur
      tempora ipsam excepturi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Saepe, reiciendis culpa incidunt corporis dolorem eum
      ullam totam cum iusto voluptate, maxime modi porro aperiam eveniet tempore
      ea? Quidem, at harum!
    </Panel>
  ),
  {
    info: {
      text: `
        ### Notes
        This is a panel
      `,
    },
  },
);
