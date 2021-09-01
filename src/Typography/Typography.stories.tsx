import * as React from 'react';

import { Typography } from './Typography.component';

export default {
  title: 'Typography',
};

export const _Typography = () => <Typography />;

_Typography.story = {
  parameters: {
    info: {
      disable: true,
    },
  },
};
