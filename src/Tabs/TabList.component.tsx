import * as React from "react";
import { TabList as ReactTabList, TabListProps } from "react-tabs";
import styled, { ThemeProvider } from "styled-components";
import { getPropsWithDefaults, Omit } from "@utils";
import { Themes } from "@themes";

export interface Props
  extends React.PropsWithChildren<Omit<TabListProps, "as">> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const ReactTabListProxy = ({ children, className, ...props }: any) => (
  <ReactTabList {...props} className={` ${className} react-tabs__tab`}>
    {children}
  </ReactTabList>
);

ReactTabListProxy.tabsRole = "TabList";

const SReactTabList = styled(ReactTabListProxy)`
  border-bottom: 1px solid #aaa;
  margin: 0;
  padding: 0 0 1px;
  width: fit-content;
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<Props>;

export const TabList = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, theme, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SReactTabList {...rest}>{children}</SReactTabList>
    </ThemeProvider>
  );
};
