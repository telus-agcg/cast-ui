import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * From theme provider
   * @default canopyTheme
   */
  theme?: any;
}

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => props.theme.table.header.backgroundColor};
  
  tr {
    border-bottom: 2px solid ${(props) => props.theme.table.header.borderBottomColor};
  }
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<TableHeaderProps>;

export const TableHeader = (props: TableHeaderProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableHeader {...rest}>
        {children}
      </StyledTableHeader>
    </ThemeProvider>
  );
};
