import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Highlight the row (for selected/active states)
   * @default false
   */
  highlighted?: boolean;
  /**
   * From theme provider
   * @default canopyTheme
   */
  theme?: any;
}

const StyledTableRow = styled.tr<TableRowProps>`
  border-bottom: 1px solid ${(props) => props.theme.table.row.borderBottomColor};
  
  ${(props) => props.highlighted && `
    background-color: ${props.theme.styles.primary.light.alertBackground};
  `}
  
  &:last-child {
    border-bottom: none;
  }
`;

const defaultProps = {
  highlighted: false,
  theme: Themes.canopyTheme,
} satisfies Partial<TableRowProps>;

export const TableRow = (props: TableRowProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableRow {...rest}>
        {children}
      </StyledTableRow>
    </ThemeProvider>
  );
};
