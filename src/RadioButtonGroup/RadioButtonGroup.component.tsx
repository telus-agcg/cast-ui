import * as React from 'react';
import RadioButton from '../RadioButton';
import { Omit } from '../utils/castTypes';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Specify the value of the radio button to select by default
   *
   * @default null
   **/
  defaultChecked?: any;
  /**
   * Specify the common name of the group of radio buttons
   *
   * @default null
   **/
  name: string;
  /**
   * Specify the value of the radio button to select by default
   *
   * @default null
   **/
  valueChecked?: any;
  /**
   * Specify the function to fire when the selected value is changed
   *
   * @default void
   **/

  onChange?(
    value: string,
    name: string,
    event: React.MouseEvent<HTMLElement>,
  ): void;
  /**
   * From ThemeProvider
   *
   * @default defaultTheme
   **/
  theme: any;
}

const SDiv = styled.div``;
const initialState = {
  selected: null,
};
type State = Readonly<typeof initialState>;

export class RadioButtonGroup extends React.Component<Props, State> {
  readonly state: State = {
    selected: this.props.defaultChecked || this.props.valueChecked,
  };
  static defaultProps = {
    theme: Themes.defaultTheme,
    onChange: () => {},
  };

  handleChange = (newSelection: any, value: any, evt: any) => {
    if (newSelection !== this.state.selected) {
      this.setState({ selected: newSelection });
      this.props.onChange!(newSelection, this.props.name, evt);
    }
  };

  getRadioButtons() {
    const children = React.Children.map(
      this.props.children,
      (radioButton: any) => {
        const { value, ...other } = radioButton.props;
        return (
          <RadioButton
            {...other}
            checked={value === this.state.selected}
            name={this.props.name}
            key={value}
            value={value}
            onChange={this.handleChange}
          />
        );
      },
    );

    return children;
  }

  render() {
    const { theme, onChange, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv data-radiobutton="" {...props}>
          {this.getRadioButtons()}
        </SDiv>
      </ThemeProvider>
    );
  }
}
