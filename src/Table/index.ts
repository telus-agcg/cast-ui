import ReactTable from 'react-table';
import treeTableHOC from 'react-table/lib/hoc/treeTable';
import selectTableHOC from 'react-table/lib/hoc/selectTable';

import {
  TableRowExpander,
  Table,
  Props as TableProps,
} from './Table.component';

const TreeTable = treeTableHOC(ReactTable);
const SelectTable = selectTableHOC(ReactTable);
const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable));

export {
  TableRowExpander,
  TreeTable,
  SelectTable,
  SelectTreeTable,
  Table,
  TableProps,
};
