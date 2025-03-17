import * as React from 'react';
import { getPropsWithDefaults, Omit } from '@utils';
import { RadioButton } from '../RadioButton/RadioButton.component';

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

const defaultProps = {
  onChange: () => {},
} satisfies Partial<Props>;

export const RadioButtonGroup = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [selected, setSelected] = React.useState('');

  const { theme, name, defaultChecked, valueChecked, onChange, children } =
    propsWithDefaults;

  React.useEffect(() => {
    setSelected(defaultChecked || valueChecked);
  }, []);

  const handleChange = (newSelection: any, _value: any, evt: any) => {
    if (newSelection !== selected) {
      setSelected(newSelection);
      onChange!(newSelection, name, evt);
    }
  };

  const getRadioButtons = () => {
    const newChildren = React.Children.map(children, (radioButton: any) => {
      const { value, ...other } = radioButton.props;
      return (
        <RadioButton
          {...other}
          checked={value === selected}
          name={name}
          key={value}
          value={value}
          onChange={handleChange}
        />
      );
    });

    return newChildren;
  };

  return <div>{getRadioButtons()}</div>;
};
