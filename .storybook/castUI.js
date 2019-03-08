import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

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
