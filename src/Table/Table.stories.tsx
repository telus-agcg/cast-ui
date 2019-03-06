import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';
import Table from './Table.component';
import * as SampleData from './sampleData.json';
import * as ColumnDefs from './sampleColumnDefs.json';

storiesOf('Table', module).add(
  'Table',
  () => {
    return (
      <Table
        data={SampleData.Customers}
        columns={ColumnDefs}
        inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
        showPagination={boolean('showPagination', true)}
        showPaginationTop={boolean('showPaginationTop', false)}
        showPaginationBottom={boolean('showPaginationBottom', true)}
        showPageSizeOptions={boolean('showPageSizeOptions', true)}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        defaultPageSize={number('defaultPageSize', 10)}
        showPageJump={boolean('showPageJump', true)}
        collapseOnSortingChange={boolean('collapseOnSortingChange', true)}
        collapseOnPageChange={boolean('collapseOnPageChange', true)}
        collapseOnDataChange={boolean('collapseOnDataChange', true)}
        freezeWhenExpanded={boolean('freezeWhenExpanded', true)}
        filterable={boolean('filterable', false)}
        resizable={boolean('resizable', true)}
        sortable={boolean('sortable', true)}
        multiSort={boolean('multiSort', true)}
      />
    );
  },
  {
    info: {
      text: `
        ### Notes

        This is a wrappered version of react-table.
        `,
    },
  },
);
