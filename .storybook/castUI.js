import React from 'react';
import { storiesOf } from '@storybook/react';

import Changelog from '../CHANGELOG.md';

storiesOf('Cast UI', module).add('TKXS Component Library', () => <div />, {
  info: {
    inline: true,
    source: false,
    text: `
    ### Description
    This is an open source React component library maintained by [TKXS](https://www.tkxs.com).
    
  `,
  },
});
storiesOf('Cast UI', module)
  .addParameters({
    title: 'whateber',
    readme: {
      content: Changelog,
    },
  })
  .add('Changelog', () => <div />, {
    info: { disable: true },
  });
