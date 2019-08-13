import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Pagination } from '../index';
import SPaginationButton from './SPaginationButton';
import SPaginationButtonNextPrev from './SPaginationButtonNextPrev';

storiesOf('Pagination', module).add(
  'Pagination',
  () => {
    return (
      <Pagination
        btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
        nextText={text('nextText', 'Next')}
        onPageChange={action('Page changed!')}
        pages={number('pages', 10)}
        page={number('page', 0)}
        PageButtonComponent={SPaginationButton}
        PageButtonNextPrevComponent={SPaginationButtonNextPrev}
        previousText={text('previousText', 'Previous')}
        showPageSizeOptions={boolean('showPageSizeOptions', true)}
        onPageSizeChange={action('Page Size changed')}
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
