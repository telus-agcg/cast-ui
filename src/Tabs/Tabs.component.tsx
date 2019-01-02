import * as React from 'react';
import styled from 'styled-components';
// tslint:disable-next-line:max-line-length
import { Tabs as ReactTabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const STabWrapperDiv = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

export class Tabs extends React.Component<Props> {
  public static readonly tabsRole: string = 'Tabs';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <STabWrapperDiv>
        <ReactTabs {...this.props}>
          {this.props.children}
        </ReactTabs>
      </STabWrapperDiv>
    );
  }
}
