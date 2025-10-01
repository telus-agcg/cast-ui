import { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table.component';
import { TableHeader } from './TableHeader.component';
import { TableBody } from './TableBody.component';
import { TableFooter } from './TableFooter.component';
import { TableRow } from './TableRow.component';
import { TableHeaderCell } from './TableHeaderCell.component';
import { TableCell } from './TableCell.component';

const description = `
Cast UI composable table components provide building blocks for creating flexible, styled tables that match your design system.

#### Composable Architecture
Rather than providing a single monolithic Table component, Cast UI offers individual table building blocks:
- **Table** - Root container with rounded corners and borders
- **TableHeader** - Styled thead wrapper
- **TableBody** - Styled tbody wrapper  
- **TableFooter** - Styled tfoot wrapper
- **TableRow** - Row with highlighting support
- **TableHeaderCell** - Header cell with bold styling and alignment
- **TableCell** - Data cell with alignment options

#### Key Features
- **Rounded corners** on the table container
- **Row highlighting** for selected/active states
- **Flexible alignment** (left, center, right)
- **Full theme integration** with your design system
- **Semantic HTML** with proper accessibility

#### Usage Philosophy
These components are designed to be composed together to build exactly the table you need, from simple data displays to complex interactive tables with sorting, filtering, and selection.
`;

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
  argTypes: {
    bordered: {
      control: 'boolean',
      description: 'Add border around the table',
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const BasicTable: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Customer Name</TableHeaderCell>
          <TableHeaderCell align="right">PY Sales (YTD)</TableHeaderCell>
          <TableHeaderCell align="right">Sales (YTD)</TableHeaderCell>
          <TableHeaderCell align="right">Earnings</TableHeaderCell>
          <TableHeaderCell align="center">Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Trust Fund Inc.</TableCell>
          <TableCell align="right">$181,333.17</TableCell>
          <TableCell align="right">$181,544.19</TableCell>
          <TableCell align="right">$0</TableCell>
          <TableCell align="center">•••</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>General Chem and Seed</TableCell>
          <TableCell align="right">$158,183.80</TableCell>
          <TableCell align="right">$154,130.20</TableCell>
          <TableCell align="right">-</TableCell>
          <TableCell align="center">•••</TableCell>
        </TableRow>
        <TableRow highlighted>
          <TableCell>ACME Agriculture</TableCell>
          <TableCell align="right">$231,094.29</TableCell>
          <TableCell align="right">$237,202.63</TableCell>
          <TableCell align="right">$23,656.63</TableCell>
          <TableCell align="center">•••</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Heritage Company</TableCell>
          <TableCell align="right">$185,814.51</TableCell>
          <TableCell align="right">$186,838.67</TableCell>
          <TableCell align="right">$19,170.48</TableCell>
          <TableCell align="center">•••</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell align="right">Quantity</TableHeaderCell>
          <TableHeaderCell align="right">Price</TableHeaderCell>
          <TableHeaderCell align="right">Total</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell align="right">5</TableCell>
          <TableCell align="right">$10.00</TableCell>
          <TableCell align="right">$50.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell align="right">3</TableCell>
          <TableCell align="right">$15.00</TableCell>
          <TableCell align="right">$45.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell align="right">2</TableCell>
          <TableCell align="right">$25.00</TableCell>
          <TableCell align="right">$50.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell align="right">10</TableHeaderCell>
          <TableHeaderCell align="right">-</TableHeaderCell>
          <TableHeaderCell align="right">$145.00</TableHeaderCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const MinimalTable: Story = {
  args: {
    bordered: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell align="right">Value</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Active</TableCell>
          <TableCell align="right">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 2</TableCell>
          <TableCell>Inactive</TableCell>
          <TableCell align="right">200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 3</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell align="right">300</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const AlignmentDemo: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell align="left">Left Aligned</TableHeaderCell>
          <TableHeaderCell align="center">Center Aligned</TableHeaderCell>
          <TableHeaderCell align="right">Right Aligned</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell align="left">Left content</TableCell>
          <TableCell align="center">Center content</TableCell>
          <TableCell align="right">Right content</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">More left content</TableCell>
          <TableCell align="center">More center content</TableCell>
          <TableCell align="right">More right content</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
