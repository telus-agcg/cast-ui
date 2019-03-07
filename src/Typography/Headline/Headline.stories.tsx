import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Headline } from './Headline.component';
import { wInfo } from '../../storybook-utils';

storiesOf('Headline', module).add(
  'Headline',
  wInfo(`

  ### Notes

  This is a Headline

  ### Usage
  ~~~js
  <Headline>Headline</Headline>
  ~~~`)(() => (
    <Headline>
      Submit Headline
    </Headline>
  )),
);
