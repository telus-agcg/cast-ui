import * as React from 'react';
import styled from 'styled-components';
import { Tabs as ReactTabs } from 'react-tabs';
import { Themes } from '../themes';

export type PropsThemeOnly = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export type Props = PropsThemeOnly & {
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
};

const STabWrapperDiv = styled.div`
  font-family: ${(props: PropsThemeOnly) => props.theme.typography.fontFamily};
`;

export class Tabs extends React.Component<Props> {
  public static readonly tabsRole: string = 'Tabs';

  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    onSelect: () => {},
    theme: Themes.defaultTheme,
  };

  render() {
    const { children, theme, ...props } = this.props;
    return (
      <STabWrapperDiv theme={theme}>
        <ReactTabs {...props}>{children}</ReactTabs>
      </STabWrapperDiv>
    );
  }
}
