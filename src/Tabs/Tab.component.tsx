import * as React from 'react';
import { Tab as ReactTab } from 'react-tabs';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
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
};

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
  padding: 12px;
  cursor: pointer;
  border-radius: ${(props: Props) => props.theme.tabs.borderRadius};
  font-size:${(props: Props) => props.theme.tabs.fontSize};
  font-weight: normal;

  &[class$="--selected"]	 {
    color: ${(props: Props) => props.theme.colors.blue};
    border-bottom: 5px solid ${(props: Props) => props.theme.colors.blue}
    font-weight: bold;
  }

  &[class$="--disabled"] {
    color: ${(props: Props) => props.theme.colors.gray}
    cursor: not-allowed;
  }

  &:focus, &:hover {
    border-bottom: 5px solid ${(props: Props) =>
      props.theme.colors.disabledBackground};
    outline: none;
    background: ${(props: Props) => props.theme.colors.disabledBackground};

    &:after {
      content: "";
      position: absolute;
      height: 5px;
      left: 0;
      right: 0;
      bottom: 0px;
      background: ${(props: Props) => props.theme.colors.disabledBackground};
    }
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
