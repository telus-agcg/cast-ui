import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';

import { Table } from './';

import * as SampleData from './sampleData.json';
import * as ColumnDefs from './sampleColumnDefs.json';

storiesOf('Table', module).add(
  'Table',
  () => {
    return (
      <div>
      <Table
        data={SampleData.Customers}
        columns={ColumnDefs}
        tableSize={select('tableSize', ['sm', 'md', 'lg'], 'md')}
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
        sizable={boolean('sizable', true)}
      />
      </div>
    );
  },
  {
    info: {
      text: `
        ### Notes

          This is a wrapped version of [react-table](https://github.com/tannerlinsley/react-table)

          It uses the *SelectTable* HOC for the checkbox column.

          It uses the Popover component for the row controls on the right most column.

          All the options available to react-table can be passed directly from the component.
        `,
    },
  },
);
