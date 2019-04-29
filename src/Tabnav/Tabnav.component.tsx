import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * A CSS color code
   *
   * @default ''
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderTop?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderBottom?: string;
  /**
   * Adjust Tabnav height.
   *
   * @default '80px'
   **/
  height?: string;
  /**
   * An array of objects.
   * Each object define properties of a each tab.
   * If an object has property children<Array>, the children
   * will automatically appear in the tab's popup view.
   *
   * @default []
   **/
  tabs?: {
    label: String;
    active?: boolean;
    to?: any;
    children?: {
      label: String;
      active?: boolean;
      to?: any;
    }[];
  }[];
  /**
   * Handle tab click events.
   *
   * @default void
   **/
  onTabClick?(
    tabLabel: String,
    isTabActive: boolean,
    tabTo: any,
    tabChildren: any,
    event: React.MouseEvent<HTMLElement>,
  ): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const STabnav = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.tabnav.color};
  height: ${(props: Props) => props.height || props.theme.tabnav.height};
  padding: ${(props: Props) => props.theme.tabnav.padding};
  background: ${(props: Props) =>
    props.background || props.theme.tabnav.background};
  border-top: ${(props: Props) =>
    props.borderTop || props.theme.tabnav.borderTop};
  border-bottom: ${(props: Props) =>
    props.borderBottom || props.theme.tabnav.borderBottom};
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
const SChildren = styled.div`
  flex-grow: 1;
`;
const STab = styled.div`
  padding: 4px 56px 8px 0;
`;

export const Tabnav: React.FunctionComponent<Props> = ({
  theme,
  children,
  tabs,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STabnav {...props}>
      <SChildren>{children}</SChildren>
      {tabs && (
        <div>
          {tabs.map((tab: any, i: any) => (
            <STab key={i}>
              {tab.label}
              {tab.children && <span>^</span>}
            </STab>
          ))}
        </div>
      )}
    </STabnav>
  </ThemeProvider>
);

Tabnav.defaultProps = {
  borderTop: '',
  borderBottom: '',
  tabs: [],
  theme: Themes.defaultTheme,
};
