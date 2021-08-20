import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DataTable } from '.';
import SampleData from '../Table/sampleData';
import { Input } from '../Input';
import { Tooltip } from '../Tooltip';
import { Checkbox } from '../Checkbox';

const testTableId = 'testDataTableId';

storiesOf('DataTable', module)
  .add('Row Expanding By Using groupByIDs Prop', () => (
    <div>
      <DataTable
        id={testTableId}
        groupByIds={['Id']}
        columns={[
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
              (prop.row.leafRows[0].original &&
                prop.row.leafRows[0].original.City) ||
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
              (prop.row.leafRows[0].original &&
                prop.row.leafRows[0].original.Fax) ||
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
        ]}
        data={SampleData.Customers}
      />
    </div>
  ))
  .add('Row Expanding Driven By A SubComponent', () => (
    <div>
      <DataTable
        id={testTableId}
        columns={[
          {
            Header: 'ID',
            accessor: 'Id',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Company Name',
            accessor: 'CompanyName',
          },
          {
            Header: 'Contact Name',
            accessor: 'ContactName',
            className: 'table-column-readonly white-space-nowrap',
            headerClassName: 'table-column-readonly',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Text Input',
            width: 120,
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
          },
          {
            Header: 'Address',
            accessor: 'Address',
            Cell: ({ value }) => value || '',
          },
          {
            Header: 'City',
            accessor: 'City',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Postal Code',
            accessor: 'PostalCode',
            className: 'right-align',
            headerClassName: 'right-align',
            Cell: ({ value }) => value || '',
          },
          {
            Header: 'Country',
            accessor: 'Country',
            Cell: ({ value }) => value || '',
          },
          {
            Header: 'Phone',
            accessor: 'Phone',
            Cell: ({ value }) => value || '',
          },
          {
            Header: 'Fax',
            accessor: 'Fax',
          },
          {
            Header: 'Member',

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
        ]}
        SubComponent={({ row }: any) => (
          <pre
            style={{
              fontSize: '10px',
            }}
          >
            <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
          </pre>
        )}
        data={SampleData.Customers}
      />
    </div>
  ))
  .add('Row Expanding Driven By Nested Data Using subRows', () => (
    <div>
      <DataTable
        id={testTableId}
        columns={[
          {
            Header: 'ID',
            accessor: 'Id',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Company Name',
            accessor: 'CompanyName',
          },
          {
            Header: 'Contact Name',
            accessor: 'ContactName',
            className: 'table-column-readonly white-space-nowrap',
            headerClassName: 'table-column-readonly',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Text Input',
            width: 120,
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
          },
          {
            Header: 'Address',
            accessor: 'Address',
            Cell: ({ value }) => value,
          },
          {
            Header: 'City',
            accessor: 'City',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Postal Code',
            accessor: 'PostalCode',
            className: 'right-align',
            headerClassName: 'right-align',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Country',
            accessor: 'Country',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Phone',
            accessor: 'Phone',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Fax',
            accessor: 'Fax',
          },
          {
            Header: 'Member',

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
        ]}
        data={SampleData.NestedCustomers}
      />
    </div>
  ))
  .add('Sorting, How To Modify Default Sorting Configuration', () => (
    <div>
      <DataTable
        id={testTableId}
        groupByIds={['Id']}
        sortByIds={[
          {
            id: 'Id',
            desc: false,
          },
        ]}
        columns={[
          {
            Header: 'ID',
            accessor: 'Id',
            Cell: ({ value }) => value,
          },
          {
            Header: 'Company Name',
            accessor: 'CompanyName',
            Aggregated: prop => prop.row.leafRows[0].original.CompanyName,
          },
          {
            Header: 'Contact Name',
            accessor: 'ContactName',
            className: 'table-column-readonly white-space-nowrap',
            headerClassName: 'table-column-readonly',
            Cell: ({ value }) => value,
            Aggregated: prop => prop.row.leafRows[0].original.ContactName,
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
            Aggregated: prop => prop.row.leafRows[0].original.ContactTitle,
          },
          {
            Header: 'Address',
            accessor: 'Address',
            Cell: ({ value }) => value,
            Aggregated: prop => prop.row.leafRows[0].original.Address,
            disableSortBy: true,
          },
          {
            Header: 'City',
            accessor: 'City',
            Cell: ({ value }) => value,
            Aggregated: prop => prop.row.leafRows[0].original.City,
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
              (prop.row.leafRows[0].original &&
                prop.row.leafRows[0].original.Fax) ||
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
        ]}
        data={SampleData.Customers}
      />
    </div>
  ))
  .add(
    'Controlled Pagination, How To Handle Manual/Server Side Pagination',
    () => {
      const handleFetchData = (state: any) => {
        // alert(`state: ${JSON.stringify(state)}`);
      };
      return (
        <div>
          <DataTable
            id={testTableId}
            groupByIds={['Id']}
            columns={[
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
                width: 200,
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
                width: 220,
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
                disableSortBy: true,
              },
              {
                Header: 'City',
                accessor: 'City',
                Cell: ({ value }) => value,
                Aggregated: prop =>
                  (prop.row.leafRows[0].original &&
                    prop.row.leafRows[0].original.City) ||
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
                  (prop.row.leafRows[0].original &&
                    prop.row.leafRows[0].original.Fax) ||
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
                Footer: () => (
                  <span>{SampleData.Customers.length} Members</span>
                ),
              },
            ]}
            data={SampleData.Customers.slice(0, 15)}
            manualPagination={true}
            manualSortBy={true}
            onFetchData={handleFetchData}
            loading={false}
            page={2}
            pageSize={15}
            pages={5}
            pageSizeOptions={[10, 15, 20, 25]}
          />
        </div>
      );
    },
  );
