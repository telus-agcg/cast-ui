import * as React from "react";
import { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
// tslint:disable-next-line:max-line-length
import { TabPanel as ReactTabPanel, TabPanelProps } from "react-tabs";
import { getPropsWithDefaults, Omit } from "@utils";
import { Themes } from "@themes";

export interface Props extends Omit<TabPanelProps, "ref"> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<Props>;

export const TabPanel = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults<Props>(defaultProps, props);
  const { children, theme, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <ReactTabPanel {...rest} id={uuidv4()}>
        {children}
      </ReactTabPanel>
    </ThemeProvider>
  );
};
