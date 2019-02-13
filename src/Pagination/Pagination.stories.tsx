import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { text, boolean, select } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';

import { Pagination } from './Pagination.component';
import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';

storiesOf('Pagination', module).add(
  'Pagination',
  wInfo(`
  ### Notes
  This is a pagination component. Page numbers use an index value (begin at 0).

  #### Uncontrolled Component
  The component will accept an onPageChange function that will fire when the page changes.
 `)(() => (
    <Pagination
      pageCount={number('pageCount', 10)}
      btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
      onPageChange={action('page')}
    />
  )),
);

storiesOf('Pagination', module).add(
  'Controlled Pagination',
  wInfo(`
  ### Notes
  This is a pagination component. Page numbers use an index value (begin at 0).

  #### Controlled Component
  To use this as a fully controlled component, provide the prop ${'`forcePage`'}.
 `)(() => (
    <Pagination
      pageCount={number('pageCount', 10)}
      btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
      forcePage={number('forcePage', 4)}
      onPageChange={action('page change')}
    />
  )),
);
