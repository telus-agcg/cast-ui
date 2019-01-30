import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import TablePagination from './TablePagination.component';
import { wInfo } from '../storybook-utils';
import SPaginationButton from '../Table/SPaginationButton';
import SPaginationButtonNextPrev from '../Table/SPaginationButtonNextPrev';

storiesOf('Table', module).add(
  'TablePagination',
  wInfo(`

  ### Notes

  This is a custom pagination control intended for use with the Table component.

  ### Usage
  ~~~js
  <TablePagination
    btnSize='md'
    nextText='Next'
    onPageChange={action('Page changed!')}
    pages={10}
    page={0}
    PageButtonComponent={SPaginationButton}
    PageButtonNextPrevComponent={SPaginationButtonNextPrev}
    previousText='Previous'
  >
  </TablePagination>
  ~~~`)(() => {
    return (
      <TablePagination
        btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
        nextText={text('nextText', 'Next')}
        onPageChange={action('Page changed!')}
        pages={number('pages', 10)}
        page={number('page', 0)}
        PageButtonComponent={SPaginationButton}
        PageButtonNextPrevComponent={SPaginationButtonNextPrev}
        previousText={text('previousText', 'Previous')}
      />
    );
  }),
);
