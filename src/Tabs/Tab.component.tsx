import * as React from 'react';
import { Tab as ReactTab, TabProps } from 'react-tabs';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { Omit } from '../utils/castTypes';

export interface Props extends Omit<TabProps, 'as'> {
  /**
   * Specify the title text of the tab
   *
   * @default null
   **/
  title?: string;
  /**
   * Specify if the tab is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const ReactTabProxy = ({ children, className, ...props }: any) => (
  <ReactTab {...props} className={` ${className} react-tabs__tab`}>
    {children}
  </ReactTab>
);

ReactTabProxy.tabsRole = 'Tab'; // Required field to use your custom Tab

const SReactTab = styled(ReactTabProxy)`
  color: ${(props: Props) => props.theme.tabs.tab.color};
  display: inline-block;
  background-color: ${(props: any) => props.theme.tabs.tab.backgroundColor};
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: ${(props: Props) => props.theme.tabs.padding};
  margin: ${(props: Props) => props.theme.tabs.margin};
  cursor: pointer;
  border-radius: ${(props: Props) => props.theme.tabs.borderRadius};
  font-size: ${(props: Props) => props.theme.tabs.fontSize};
  font-weight: normal;
  transition: 0.3s all;

  &:focus,
  &:hover {
    outline: none;
    background: ${(props: Props) => props.theme.colors.primaryFaded};
  }

  &[class$='--selected']\t {
    color: ${(props: Props) => props.theme.tabs.activetab.color};
    font-weight: bold;
    background-color: ${(props: any) =>
      props.theme.tabs.activetab.backgroundColor};
  }

  &[class$='--disabled'] {
    color: ${(props: Props) => props.theme.colors.drk600};
    cursor: not-allowed;
  }

  &[class$='--disabled']:focus,
  &[class$='--disabled']:hover {
    background-color: ${(props: any) => props.theme.tabs.tab.backgroundColor};
  }
`;

export class Tab extends React.Component<Props> {
  public static readonly tabsRole: string = 'Tab';

  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    theme: Themes.defaultTheme,
  };

  render() {
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SReactTab {...props}>{this.props.title}</SReactTab>
      </ThemeProvider>
    );
  }
}
