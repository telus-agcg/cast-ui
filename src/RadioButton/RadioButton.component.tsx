import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Omit, getDataProps, getPropsWithDefaults } from '@utils';

type displayStyle = 'inline' | 'stacked';
type rbSize = 'sm' | 'md' | 'lg';
type displayType = 'inline-block' | 'block';

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Set the className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Specify the ID of the individual radio button
   *
   * @default null
   **/
  id?: string;
  /**
   * Specify the common name of the group of radio buttons
   *
   * @default null
   **/
  name?: string | undefined;
  /**
   * Specify if the radio button is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Specify if the radio button is checked by default
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Specify if the radio button should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the size of the radio button (sm | md | lg)
   *
   * @default 'md'
   **/
  rbSize?: rbSize;
  /**
   * Specify the value of the radio button group when the current button is selected
   **/
  value: string;
  /**
   * Specify the function to fire when the radiobutton is checked or unchecked
   *
   * @default void
   **/
  onChange?: (
    value: string,
    name: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  /**
   * Specify the function to fire when the radiobutton is clicked
   *
   * @default void
   **/
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Specify the display style the radio button will have
   *
   * @default 'stacked'
   **/
  displayStyle?: displayStyle;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const displayStyleRules = (
  displayStyle: displayStyle,
  theme: any,
): {
  display: displayType;
  'padding-right'?: string;
  'padding-bottom'?: string;
} => {
  if (displayStyle === 'inline') {
    return {
      display: 'inline-block',
      'padding-right': theme.radioButton.inlineSpacing,
    };
  }
  return {
    display: 'block',
    'padding-bottom': theme.radioButton.stackedSpacing,
  };
};

const SDiv = styled.div<Partial<RadioButtonProps> & any>`
  ${(props: any) => displayStyleRules(props.displayStyle, props.theme)}
`;

const SLabel = styled.label<Partial<RadioButtonProps>>`
  align-items: center;
  display: inline-flex;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.common[props.rbSize!].fontSize};
`;

const SInput = styled.input<Partial<RadioButtonProps>>`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props) => props.theme.radioButton[props.rbSize!].size};
    height: ${(props) => props.theme.radioButton[props.rbSize!].size};
    background-clip: content-box;
    background-color: ${(props) => props.theme.radioButton.unselectedColor};
    border-color: ${(props) => props.theme.radioButton.borderColor};
    border-style: ${(props) => props.theme.radioButton.borderStyle};
    border-radius: 50%;
    border-width ${(props) => props.theme.radioButton.borderWidth};
    cursor: pointer;
    margin-right: 5px;
    padding: 3px;
    transition: all 0.3s;
  }
  &:disabled + label {
    color: ${(props) => props.theme.radioButton.disabledText};
    cursor: not-allowed;
  }
  
  &:not(:disabled) + label {
    cursor: pointer;
  }
  &:disabled + label:before {
    border-color: ${(props) => props.theme.radioButton.disabledRadio};
    cursor: not-allowed;
  }
  &:checked + label:before {
    border-color: ${(props) => props.theme.radioButton.borderColor};
    background-color: ${(props) => props.theme.radioButton.borderColor};
  }
  &:checked + label:hover:before {
    border-color: ${(props) => props.theme.colors.primaryHover};
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  &:not(:checked) + label:hover:before {
    border-color: ${(props) => props.theme.colors.primaryHover};
  }

  &:disabled:checked + label:before {
    border-color: ${(props) => props.theme.radioButton.disabledRadio};
    background-color:  ${(props) => props.theme.radioButton.disabledRadio};
  }

  &:disabled:not(:checked)+ label:before{
    border-color: ${(props) => props.theme.radioButton.disabledRadio};
  }
`;

const defaultProps = {
  rbSize: 'md',
  displayStyle: 'stacked',
  name: '',
  id: uuidv4(),
  disabled: false,
  defaultChecked: false,
} satisfies Partial<RadioButtonProps>;

export const RadioButton = (props: RadioButtonProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [localChecked, setLocalChecked] = React.useState<boolean>(false);

  const {
    checked,
    defaultChecked,
    disabled,
    onChange,
    value,
    name,
    className,
    rbSize,
    displayStyle,
    id,
    theme,
    children,
    onClick,
    ...rest
  } = propsWithDefaults;

  const dataProps: any = getDataProps(propsWithDefaults);

  React.useEffect(() => {
    setLocalChecked(Boolean(checked || defaultChecked));
  }, []);

  const handleChange = (event: any) => {
    if (disabled) return;
    if (onChange instanceof Function) {
      onChange(value, name!, event);
      setLocalChecked((prevState) => !prevState);
    }
  };

  return (
    <SDiv
      {...dataProps}
      className={className}
      displayStyle={displayStyle}
      onClick={onClick}
      theme={theme}
    >
      <SInput
        type="radio"
        name={name}
        rbSize={rbSize}
        disabled={disabled}
        id={id}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <SLabel htmlFor={id} rbSize={rbSize}>
        {children}
      </SLabel>
    </SDiv>
  );
};
