import * as React from 'react';
import { Tab as ReactTab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
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

export class Tab extends React.Component<Props> {
  public static readonly tabsRole: string = 'Tab';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ReactTab {...this.props}>{this.props.title}</ReactTab>
    );
  }
}
