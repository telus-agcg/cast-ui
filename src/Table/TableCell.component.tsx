import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * From theme provider
   * @default canopyTheme
   */
  theme?: any;
}

const StyledTableCell = styled.td<TableCellProps>`
  padding: ${(props) => props.theme.common.md.tableCellPadding};
  text-align: ${(props) => props.align};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.table.fontSize};
  color: ${(props) => props.theme.typography.color};
  vertical-align: middle;
  
  &:first-child {
    padding-left: 16px;
  }
  
  &:last-child {
    padding-right: 16px;
  }
`;

const defaultProps = {
  align: 'left' as const,
  theme: Themes.canopyTheme,
} satisfies Partial<TableCellProps>;

export const TableCell = (props: TableCellProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableCell {...rest}>
        {children}
      </StyledTableCell>
    </ThemeProvider>
  );
};
