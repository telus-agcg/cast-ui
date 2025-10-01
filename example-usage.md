# Composable Table Components Usage Examples

## Basic Table Example

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell
} from '@tkxs/cast-ui';

function CustomerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Customer Name</TableHeaderCell>
          <TableHeaderCell align="right">Sales (YTD)</TableHeaderCell>
          <TableHeaderCell align="right">Earnings</TableHeaderCell>
          <TableHeaderCell align="center">Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Trust Fund Inc.</TableCell>
          <TableCell align="right">$181,544.19</TableCell>
          <TableCell align="right">$0</TableCell>
          <TableCell align="center">
            <button>Edit</button>
          </TableCell>
        </TableRow>
        <TableRow highlighted>
          <TableCell>ACME Agriculture</TableCell>
          <TableCell align="right">$237,202.63</TableCell>
          <TableCell align="right">$23,656.63</TableCell>
          <TableCell align="center">
            <button>Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Advanced Example with Sorting and Selection

```tsx
import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell
} from '@tkxs/cast-ui';

function AdvancedTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowSelect = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <input type="checkbox" />
          </TableHeaderCell>
          <TableHeaderCell>
            <button onClick={() => handleSort('name')}>
              Customer Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          </TableHeaderCell>
          <TableHeaderCell align="right">
            <button onClick={() => handleSort('sales')}>
              Sales {sortField === 'sales' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          </TableHeaderCell>
          <TableHeaderCell align="center">Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow highlighted={selectedRows.has('1')}>
          <TableCell>
            <input 
              type="checkbox" 
              checked={selectedRows.has('1')}
              onChange={() => handleRowSelect('1')}
            />
          </TableCell>
          <TableCell>Trust Fund Inc.</TableCell>
          <TableCell align="right">$181,544.19</TableCell>
          <TableCell align="center">
            <button>Edit</button>
            <button>Delete</button>
          </TableCell>
        </TableRow>
        <TableRow highlighted={selectedRows.has('2')}>
          <TableCell>
            <input 
              type="checkbox" 
              checked={selectedRows.has('2')}
              onChange={() => handleRowSelect('2')}
            />
          </TableCell>
          <TableCell>ACME Agriculture</TableCell>
          <TableCell align="right">$237,202.63</TableCell>
          <TableCell align="center">
            <button>Edit</button>
            <button>Delete</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Key Benefits

1. **Composable**: Build exactly the table you need
2. **Flexible**: Add your own interactive elements (buttons, checkboxes, etc.)
3. **Styled**: Consistent with your design system
4. **Accessible**: Semantic HTML structure
5. **Themeable**: Full integration with Cast UI themes

## Available Components

- `Table` - Root container with rounded corners and borders
- `TableHeader` - Styled `<thead>` wrapper
- `TableBody` - Styled `<tbody>` wrapper
- `TableFooter` - Styled `<tfoot>` wrapper
- `TableRow` - Row with hover effects and highlighting
- `TableHeaderCell` - Header cell with bold styling
- `TableCell` - Data cell with alignment options

## Props

### Table
- `hover?: boolean` - Enable hover effects (default: true)
- `bordered?: boolean` - Add border around table (default: true)

### TableRow
- `highlighted?: boolean` - Highlight the row (default: false)

### TableHeaderCell & TableCell
- `align?: 'left' | 'center' | 'right'` - Text alignment (default: 'left')
