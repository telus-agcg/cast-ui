import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Breadcrumb } from './Breadcrumb.component';
import { wInfo } from '../storybook-utils';

storiesOf('Breadcrumb', module).add(
  'Breadcrumb',
  wInfo(`

  ### Notes

  This is the breadcrumb navigation menu

  ### Usage
  ~~~js
    <Breadcrumb
      color="lightGray"
      size={40}
      animationSpeed={2}
    />
  ~~~`)(() => (
    <Breadcrumb
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
