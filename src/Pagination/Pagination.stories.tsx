import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Pagination } from '../index';

storiesOf('Pagination', module).add(
  'Pagination',
  () => {
    return (
      <Pagination
        onPageChange={action('Page changed!')}
        pages={number('pages', 10)}
        page={number('page', 2)}
        pageSize={select('pageSize', [10, 20, 50, 100], 20)}
        showPageSizeOptions={boolean('showPageSizeOptions', true)}
        onPageSizeChange={action('Page Size changed')}
        rowsText={text('rowsText', '')}
      />
    );
  },
  {
    info: {
      text: `
        ### Notes

        This is a custom pagination control intended for use with various components (such as Table).
        `,
    },
  },
);
