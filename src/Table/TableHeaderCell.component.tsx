import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
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

const StyledTableHeaderCell = styled.th<TableHeaderCellProps>`
  padding: ${(props) => props.theme.common.md.tableCellPadding};
  text-align: ${(props) => props.align};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.table.header.fontSize};
  font-weight: ${(props) => props.theme.table.header.fontWeight};
  color: ${(props) => props.theme.table.header.color};
  background-color: ${(props) => props.theme.table.header.backgroundColor};
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
} satisfies Partial<TableHeaderCellProps>;

export const TableHeaderCell = (props: TableHeaderCellProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableHeaderCell {...rest}>
        {children}
      </StyledTableHeaderCell>
    </ThemeProvider>
  );
};
