import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { CopyToClipboard } from './CopyToClipboard.component';
import { wInfo } from '../storybook-utils';

storiesOf('CopyToClipboard', module).add(
  'CopyToClipboard',
  wInfo(`

  ### Notes

  This is a Copy-To-Clipboard component

  ### Usage
  ~~~js
    <CopyToClipboard
      color="lightGray"
      size={40}
      animationSpeed={2}
    />
  ~~~`)(() => (
    <CopyToClipboard
      color={select(
        'color',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      size={select('size', [20, 30, 40, 50, 60], 40)}
      animationSpeed={select('animationSpeed', [1, 2, 3, 4, 5], 2)}
      transitionType={select(
        'transitionType',
        ['ease-in-out', 'ease-in', 'ease-out', 'linear', 'ease'],
        'ease-in-out',
      )}
    />
  )),
);
