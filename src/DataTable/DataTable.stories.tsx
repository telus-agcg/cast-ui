import * as React from 'react';

import { DataTable } from '.';
import SampleData from '../Table/sampleData';
import { Input } from '../Input';
import { Tooltip } from '../Tooltip';
import { Checkbox } from '../Checkbox';

const testTableId = 'testDataTableId';

export default {
  title: 'DataTable',
  component: DataTable,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    groupByIds: {
      control: false,
    },
    data: {
      control: false,
    },
    columns: {
      control: false,
    },
    sortByIds: {
      control: false,
    },
    id: {
      control: false,
    },
    SubComponent: {
      control: false,
    },
    LoadingComponent: {
      control: false,
    },
    manualSortBy: {
      control: false,
    },
    pageSizeOptions: {
      control: false,
    },
    manualPagination: {
      control: false,
    },
    pages: {
      control: false,
    },
    page: {
      control: false,
    },
    pageSize: {
      control: false,
    },
    onFetchData: {
      control: false,
    },
    loading: {
      control: false,
    },
    showPagination: {
      control: false,
    },
  },
};

const _DataTable = ({ withNestedData = false, data, ...args }) => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'Id',
      Cell: ({ value }) => value,
    },
    {
      Header: 'Company Name',
      accessor: 'CompanyName',
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.CompanyName) ||
        '',
    },
    {
      Header: 'Contact Name',
      accessor: 'ContactName',
      className: 'table-column-readonly white-space-nowrap',
      headerClassName: 'table-column-readonly',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.ContactName) ||
        '',
    },
    {
      Header: 'Text Input',
      width: 120,
      Aggregated: <div />,
      Cell: (prop: any) => {
        return (
          <Tooltip
            content={<div>Input content</div>}
            size="regular"
            placement="top-start"
            a11y={false}
          >
            <span>
              <Input
                id={`${testTableId}-${prop.column.id}-${prop.row.id}`}
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
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.ContactTitle) ||
        '',
    },
    {
      Header: 'Address',
      accessor: 'Address',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.Address) ||
        '',
    },
    {
      Header: 'City',
      accessor: 'City',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original && prop.row.leafRows[0].original.City) ||
        '',
    },
    {
      Header: 'Postal Code',
      accessor: 'PostalCode',
      className: 'right-align',
      headerClassName: 'right-align',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.PostalCode) ||
        '',
    },
    {
      Header: 'Country',
      accessor: 'Country',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.Country) ||
        '',
    },
    {
      Header: 'Phone',
      accessor: 'Phone',
      Cell: ({ value }) => value,
      Aggregated: prop =>
        (prop.row.leafRows[0].original &&
          prop.row.leafRows[0].original.Phone) ||
        '',
    },
    {
      Header: 'Fax',
      accessor: 'Fax',
      Aggregated: prop =>
        (prop.row.leafRows[0].original && prop.row.leafRows[0].original.Fax) ||
        '',
    },
    {
      Header: 'Member',
      Aggregated: <div />,
      Cell: (prop: any) => {
        return (
          <Checkbox
            id={`${testTableId}-${prop.column.id}-${prop.row.id}`}
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
  ].map(({ Aggregated, ...rest }) => {
    if (withNestedData) {
      return { ...rest };
    }
    return {
      Aggregated,
      ...rest,
    };
  });
  return <DataTable id={testTableId} columns={columns} data={data} {...args} />;
};

export const RowExpandUsingGroupByIds = _DataTable.bind({});

RowExpandUsingGroupByIds.args = {
  groupByIds: ['Id'],
  data: SampleData.Customers,
};

export const RowExpandingSubcomponent = _DataTable.bind({});
RowExpandingSubcomponent.args = {
  data: SampleData.Customers,
  SubComponent: ({ row }: any) => (
    <pre
      style={{
        fontSize: '10px',
      }}
    >
      <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
    </pre>
  ),
};

export const RowExpandingNestedData = _DataTable.bind({});
RowExpandingNestedData.args = {
  data: SampleData.NestedCustomers,
  withNestedData: true,
};

export const SortingDataTable = _DataTable.bind({});
SortingDataTable.args = {
  groupByIds: ['Id'],
  sortByIds: [
    {
      id: 'Id',
      desc: false,
    },
  ],
  data: SampleData.Customers,
};

export const ControlledDataTable = _DataTable.bind({});
ControlledDataTable.args = {
  groupByIds: ['Id'],
  data: SampleData.Customers.slice(0, 15),
  manualPagination: true,
  manualSortBy: true,
  onFetchData: (state: any) => {},
  loading: false,
  page: 2,
  pageSize: 15,
  pages: 5,
  pageSizeOptions: [10, 15, 20, 25],
};
