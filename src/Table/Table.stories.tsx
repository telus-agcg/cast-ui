import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';

import { Table } from './';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import SampleData from './sampleData';
import { action } from '@storybook/addon-actions';

const testTableId = 'testTable';

storiesOf('Table', module).add(
  'Table',
  () => {
    return (
      <div>
        <Table
          data={SampleData.Customers}
          id={testTableId}
          // @ts-ignore
          pivotBy={select('pivotBy', [['Id'], ['ContactName']], ['Id'])}
          columns={[
            {
              Header: 'ID',
              accessor: 'Id',
            },
            {
              Header: 'Company Name',
              accessor: 'CompanyName',
            },
            {
              id: 'ContactName',
              Header: 'Contact Name',
              accessor: 'ContactName',
              className: 'table-column-readonly white-space-nowrap',
              headerClassName: 'table-column-readonly',
            },
            {
              id: 'TextInput',
              Header: 'Text Input',
              width: 120,
              Cell: (row: any) => {
                return (
                  <Input
                    data-testid={'text-input'}
                    addonText="%"
                    addonTextPosition="right"
                    value="90"
                    min={0}
                    max={100}
                    onChange={action(
                      `Row ${testTableId}-${row.index}-${
                        row.column.id
                      } input triggered`,
                    )}
                  />
                );
              },
            },
            {
              Header: 'Contact Title',
              accessor: 'ContactTitle',
              className: 'table-column-highlight',
              headerClassName: 'table-column-highlight',
            },
            {
              Header: 'Address',
              accessor: 'Address',
            },
            {
              Header: 'City',
              accessor: 'City',
            },
            {
              id: 'PostalCode',
              Header: 'Postal Code',
              className: 'right-align',
              headerClassName: 'right-align',
              Cell: (row: any) => {
                return (
                  <div data-testid={'postal-code'}>
                    {row.original.PostalCode}
                  </div>
                );
              },
            },
            {
              Header: 'Country',
              accessor: 'Country',
            },
            {
              Header: 'Phone',
              accessor: 'Phone',
            },
            {
              Header: 'Fax',
              accessor: 'Fax',
            },
            {
              Header: 'Member',
              accessor: 'Member',
              Cell: (row: any) => {
                console.log(row);
                return (
                  <Checkbox
                    id={`${testTableId}-${row.index}-${row.column.id}`}
                    cbSize="md"
                    value="2"
                    indeterminate={true}
                    displayStyle="inline"
                  >
                    Two
                  </Checkbox>
                );
              },
            },
          ]}
          getTrProps={(state, rowInfo, column) => {
            let className;
            if (rowInfo.row.Id === 'AROUT') {
              className = 'table-row-readonly';
            } else if (rowInfo.row.Id === 'BOLID') {
              className = 'table-row-highlight';
            }
            return {
              className,
            };
          }}
          /** the next line is for checking warning for `react-table` handlers */
          onSortedChange={() => {
            console.log('onSortedChange');
          }}
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
          striped={boolean('striped', true)}
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

##### Important note on Pagination

Controlled Pagination's **forcePage** doesn't display the correct page. For example, if "4" is passed into the prop, "5" displays.

It seems that the [react-table](https://github.com/tannerlinsley/react-table) package is built like this by default.

##### Utility classNames
| className | Target | Behavior | default |
|:-------------------------|:--------:|:--------------------------------------:|---------:|
| white-space-wrap | cell, column | break lines in the cell | yes |
| white-space-nowrap | cell, column | prevents line break in the cell | no |
| vertically-align-center | cell, column | vertically align center cell content | yes |
| vertically-align-end | cell, column | vertically align end cell content | no |
        `,
    },
  },
);
