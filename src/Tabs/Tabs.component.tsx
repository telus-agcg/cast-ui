import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Tabs as ReactTabs, TabsProps } from "react-tabs";
import { getPropsWithDefaults, Omit } from "@utils";
import { Themes } from "@themes";

export interface Props extends Omit<TabsProps, "as"> {
  /**
   * Specify the tab that should be open on initial render.
   * This is a zero-based index, so first tab is 0, second tab is 1, ...
   *
   * @default null
   **/
  defaultIndex?: number;
  /**
   * Function to fire when a tab page is selected
   *
   * @default 0
   **/
  onSelect?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const STabWrapperDiv = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

const defaultProps = {
  theme: Themes.canopyTheme,
  onSelect: (index) => {
    console.log(index);
  },
  selectedIndex: 2,
} satisfies Partial<Props>;

export const Tabs = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, theme, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <STabWrapperDiv>
        <ReactTabs {...rest}>{children}</ReactTabs>
      </STabWrapperDiv>
    </ThemeProvider>
  );
};
