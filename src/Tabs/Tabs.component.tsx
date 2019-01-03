import * as React from 'react';
import styled from 'styled-components';
// tslint:disable-next-line:max-line-length
import { Tabs as ReactTabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type PropsThemeOnly = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type Props = PropsThemeOnly & {
  /**
   * Function to fire when a tab page is selected
   *
   * @default null
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

  render() {
    return (
      <STabWrapperDiv>
        <ReactTabs {...this.props} onSelect={this.props.onSelect}>
          {this.props.children}
        </ReactTabs>
      </STabWrapperDiv>
    );
  }
}
