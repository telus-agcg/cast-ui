import ReactTable from 'react-table';
import treeTableHOC from 'react-table/lib/hoc/treeTable';
import selectTableHOC from 'react-table/lib/hoc/selectTable';

import { Table } from './Table.component';

const TreeTable = treeTableHOC(ReactTable);
const SelectTable = selectTableHOC(ReactTable);
const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable));

export { TreeTable, SelectTable, SelectTreeTable, Table };
