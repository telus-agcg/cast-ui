import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * From theme provider
   * @default canopyTheme
   */
  theme?: any;
}

const StyledTableBody = styled.tbody<TableBodyProps>`
  background-color: ${(props) => props.theme.body.backgroundColor};
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<TableBodyProps>;

export const TableBody = (props: TableBodyProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledTableBody {...rest}>
        {children}
      </StyledTableBody>
    </ThemeProvider>
  );
};
