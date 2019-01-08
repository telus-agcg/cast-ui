import * as React from 'react';
import Select from 'react-select';

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

class CustomSelect extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // 1/3/19: the on event handlers need to be there, or an error is thrown
    // but in this state, they cause the menu not to appear.
    // .
    // onMenuOpen omitted --> causes TypeError
    // onMenuOpen={undefined} --> causes TypeError
    // onMenuOpen={() => true)} --> nothing happens
    return (
      <Select
        isDisabled={this.props.disabled}
        value={this.props.selectedOption}
        options={this.props.options}
        {...this.props}
      />
    );
  }
}

export default CustomSelect;
