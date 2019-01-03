import * as React from 'react';
import { SelectBase as ReactSelect } from 'react-select';

type Props = {
  /**
   * Specify the control's selected option
   *
   * @default null
   **/
  selectedOption?: string;
  /**
   * The list of options available
   *
   * @default null
   **/
  options?: any;
  // /**
  //  * The function attached to the onChange event
  //  *
  //  * @default null
  //  **/
  // handleChange?: any;
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

export class Select extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // 1/3/19: the on event handlers need to be there, or an error is thrown
    // but in this state, they cause the menu not to appear.
    return (
      <ReactSelect
        isDisabled={this.props.disabled}
        value={this.props.selectedOption}
        options={this.props.options}
        onMenuOpen={() => console.log('menu open')}
        onMenuClose={() => true}
        onInputChange={() => true}
      />
    );
  }
}
