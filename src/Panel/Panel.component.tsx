import { Themes } from "@themes";
import { getPropsWithDefaults } from "@utils";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

export type Props = React.PropsWithChildren<{
  /**
   * The name of the panel
   *
   * @default ''
   * */
  name?: string;
  /**
   * The title of the panel
   *
   * @default ''
   * */
  title?: string;
  /**
   * Set Panel Style
   *
   *  @default 'primary'
   */
  panelStyle: "primary" | "secondary" | "success" | "warning" | "danger";
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const PanelWrapper = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  border-radius: ${(props: Props) => props.theme.panel.body.borderRadius};
  box-shadow: ${(props: Props) => props.theme.panel.boxShadow};
`;

const initialState = {};

type State = Readonly<typeof initialState>;

const defaultProps = {
  panelStyle: "primary",
  theme: Themes.canopyTheme,
} satisfies Partial<Props>;

export const Panel = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <PanelWrapper {...props}>{children}</PanelWrapper>
    </ThemeProvider>
  );
};
