import ReactTable from 'react-table-6';
import treeTableHOC from 'react-table-6/lib/hoc/treeTable';
import selectTableHOC from 'react-table-6/lib/hoc/selectTable';

import { Table, Props as TableProps } from './Table.component';

const TreeTable = treeTableHOC(ReactTable);
const SelectTable = selectTableHOC(ReactTable);
const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable));

export { TreeTable, SelectTable, SelectTreeTable, Table, TableProps };
