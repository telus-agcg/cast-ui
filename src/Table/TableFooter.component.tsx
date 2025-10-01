import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * From theme provider
   * @default canopyTheme
   */
  theme?: any;
}

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.theme.table.header.backgroundColor};
  
  tr {
    border-top: 1px solid ${(props) => props.theme.table.row.borderBottomColor};
  }
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<TableFooterProps>;

export const TableFooter = (props: TableFooterProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableFooter {...rest}>
        {children}
      </StyledTableFooter>
    </ThemeProvider>
  );
};
