import * as React from 'react';

import { Table } from './';
import { Input } from '../Input';
import { Tooltip } from '../Tooltip';
import { Checkbox } from '../Checkbox';
import SampleData from './sampleData';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    tableSize: {
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'select',
      },
    },
    showPagination: {
      control: {
        type: 'boolean',
      },
    },
    showPaginationTop: {
      control: {
        type: 'boolean',
      },
    },
    showPaginationBottom: {
      control: {
        type: 'boolean',
      },
    },
    showPageSizeOptions: {
      control: {
        type: 'boolean',
      },
    },
    pageSizeOptions: {
      control: false,
    },
    defaultPageSize: 10,
    showPageJump: {
      control: {
        type: 'boolean',
      },
    },
    collapseOnSortingChange: {
      control: {
        type: 'boolean',
      },
    },
    collapseOnPageChange: {
      control: {
        type: 'boolean',
      },
    },
    collapseOnDataChange: {
      control: {
        type: 'boolean',
      },
    },
    freezeWhenExpanded: {
      control: {
        type: 'boolean',
      },
    },
    filterable: false,
    resizable: {
      control: {
        type: 'boolean',
      },
    },
    sortable: {
      control: {
        type: 'boolean',
      },
    },
    multiSort: {
      control: {
        type: 'boolean',
      },
    },
    striped: {
      control: {
        type: 'boolean',
      },
    },
    sizable: {
      control: {
        type: 'boolean',
      },
    },
    onSortedChange: {
      action: 'onSortedChange',
    },
  },
};

export const _Table = args => {
  return (
    <div>
      <Table
        id="testTableId"
        data={SampleData.Customers}
        pivotBy={['Id']}
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
            accessor: 'CompanyName',
            className: 'table-column-readonly white-space-nowrap',
            headerClassName: 'table-column-readonly',
          },
          {
            id: 'TextInput',
            Header: 'Text Input',
            width: 120,
            Cell: (row: any) => {
              return (
                <Tooltip
                  content={<div>Input content</div>}
                  size="regular"
                  placement="top-start"
                  a11y={false}
                >
                  <span>
                    <Input
                      id={`TextInput`}
                      addonText="%"
                      addonTextPosition="right"
                      value="90"
                      min={0}
                      max={100}
                      onChange={() => {}}
                    />
                  </span>
                </Tooltip>
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
            Header: 'Postal Code',
            accessor: 'PostalCode',
            className: 'right-align',
            headerClassName: 'right-align',
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
              return (
                <Checkbox
                  id="myInput2"
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
        pageSizeOptions={[5, 10, 25, 50, 100]}
        {...args}
      />
    </div>
  );
};

_Table.args = {
  tableSize: 'md',
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  defaultPageSize: 10,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: true,
  filterable: false,
  resizable: true,
  sortable: true,
  multiSort: true,
  striped: true,
  sizable: true,
};

_Table.parameters = {
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
};
