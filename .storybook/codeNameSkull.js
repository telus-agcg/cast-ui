import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Code Name Skull', module).add(
  'TKXS Component Library 💀',
  withInfo({
    inline: true,
    source: false,
    text: `
    ### Description
    This is an open source React component library maintained by [TKXS](https://www.tkxs.com).

    ### Usage
    blah blah blah
  `,
  })(() => <div />),
);
