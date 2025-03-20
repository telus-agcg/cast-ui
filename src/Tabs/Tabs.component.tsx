import * as React from 'react';
import styled from 'styled-components';
import { Tabs as ReactTabs, TabsProps } from 'react-tabs';
import { Omit } from '@utils';

export interface Props extends Omit<TabsProps, 'as'> {
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
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const STabWrapperDiv = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
`;

export class Tabs extends React.Component<React.PropsWithChildren<Props>> {
  public static readonly tabsRole: string = 'Tabs';

  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    onSelect: () => {},
  };

  render() {
    const { children, theme, ...props } = this.props;
    return (
      <STabWrapperDiv>
        <ReactTabs {...props}>{children}</ReactTabs>
      </STabWrapperDiv>
    );
  }
}
