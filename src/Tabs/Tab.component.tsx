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
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: ${(props: Props) => props.theme.tabs.padding};
  margin: ${(props: Props) => props.theme.tabs.margin};
  cursor: pointer;
  border-radius: ${(props: Props) => props.theme.tabs.borderRadius};
  font-size:${(props: Props) => props.theme.tabs.fontSize};
  font-weight: normal;

  &:focus, &:hover {
    color: ${(props: Props) => props.theme.tabs.hoverColor};
    outline: none;
    background: ${(props: Props) => props.theme.colors.disabledBackground};
    &:after {
      content: "";
      position: absolute;
      height: 5px;
      width: 100%;
      left: 0;
      bottom: 0px;
      background: ${(props: Props) => props.theme.tabs.hoverColor};
    }
  }
  
  &[class$="--selected"]\t {
    color: ${(props: Props) => props.theme.tabs.color};
    font-weight: bold;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      left: 0;
      bottom: 0px;
      background: ${(props: Props) => props.theme.tabs.borderColor};
    }
  }

  &[class$="--disabled"] {
    color: ${(props: Props) => props.theme.colors.gray}
    cursor: not-allowed;
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
