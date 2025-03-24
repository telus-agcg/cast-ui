import styled, { ThemeProvider } from 'styled-components';

export type ListGroupItemProps = {
  /**
   * The content of the panel header
   *
   * @default null
   * */
  children?: any;

  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'light'
   **/
  listGroupTheme?: 'light' | 'dark';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SListGroupItem = styled.li<Partial<ListGroupItemProps>>`
  overflow: hidden;
  height: auto;
`;

const defaultProps = {
  listGroupTheme: undefined,
} satisfies Partial<ListGroupItemProps>;

export const ListGroupItem = (props: ListGroupItemProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SListGroupItem {...rest}>{children}</SListGroupItem>
    </ThemeProvider>
  );
};
