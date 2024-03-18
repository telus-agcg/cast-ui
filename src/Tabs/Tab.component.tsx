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
  color: ${props => props.theme.tabs.tab.color};
  display: inline-block;
  background-color: ${props => props.theme.tabs.tab.backgroundColor};
  border: 0.5px solid ${props => props.theme.tabs.borderColor};
  border-left: none;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: ${props => props.theme.tabs.padding};
  cursor: pointer;
  font-size: ${props => props.theme.tabs.fontSize};
  font-weight: bold;
  transition: all 0.3s;

  :first-child {
    border-left: 1px solid ${props => props.theme.tabs.borderColor};
  }

  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.primaryBackground};
  }

  &[class$='--selected'] {
    background-color: ${props => props.theme.tabs.activetab.backgroundColor};
    border: none;
    border-right: 1px solid ${props => props.theme.tabs.borderColor};
    box-shadow: 0 -${props => props.theme.tabs.bottomBorderWidth} ${props =>
        props.theme.tabs.activetab.borderColor} inset;
    color: ${props => props.theme.tabs.activetab.color};
    &:last-child {
      border-right: none;
    }
  }

  &[class$='--disabled'] {
    color: ${props => props.theme.colors.drk400};
    cursor: not-allowed;
  }

  &[class$='--disabled']:focus,
  &[class$='--disabled']:hover {
    background-color: ${props => props.theme.tabs.tab.backgroundColor};
  }
`;

export class Tab extends React.Component<Props> {
  public static readonly tabsRole: string = 'Tab';

  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    theme: Themes.canopyTheme,
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
