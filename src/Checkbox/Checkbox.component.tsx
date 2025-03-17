import styled from 'styled-components';
import React, { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDataProps, getPropsWithDefaults } from '@utils';

interface Props extends React.PropsWithChildren {
  /**
   * Specify the ID of the individual checkbox
   *
   * @default null
   **/
  id?: string;
  label?: string;
  value: CHECKBOX_STATE;
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Specify the size of the checkbox (sm | md | lg)
   *
   * @default 'md'
   **/
  cbSize?: CHECKBOX_SIZE;
  /**
   * Specify the way checkboxes will be laid out
   *
   * @default 'stacked'
   **/
  displayStyle?: CHECKBOX_DISPLAY_STYLE;
  /**
   * Specify if the checkbox should be disabled
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
}

const displayStyleRules: Function = (
  displayStyle: 'inline' | 'stacked',
  theme: any,
) => {
  if (displayStyle === 'inline') {
    return {
      display: 'inline-block',
      'padding-right': theme.checkbox.inlineSpacing,
    };
  }
  return {
    display: 'block',
  };
};

const indeterminateCheckboxRules: Function = (cbSize: CHECKBOX_SIZE) => {
  const ySize = {
    [CHECKBOX_SIZE.LARGE]: -1,
    [CHECKBOX_SIZE.MEDIUM]: 1,
    [CHECKBOX_SIZE.SMALL]: 3,
  }[cbSize];
  const xSize = {
    [CHECKBOX_SIZE.LARGE]: -1,
    [CHECKBOX_SIZE.MEDIUM]: -2,
    [CHECKBOX_SIZE.SMALL]: -1,
  }[cbSize];
  const transform = `rotate(90deg) translateX(${xSize}px) translateY(${ySize}px);`;
  return {
    transform,
    '-webkit-transform': transform,
    '-ms-transform': transform,
  };
};

export enum CHECKBOX_STATE {
  CHECKED = 'checked',
  INDETERMINATE = 'indeterminate',
  EMPTY = 'empty',
}

export enum CHECKBOX_SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export enum CHECKBOX_DISPLAY_STYLE {
  INLINE = 'inline',
  STACKED = 'stacked',
}

const SDiv = styled.div<Props>`
  ${(props: Props) => displayStyleRules(props.displayStyle, props.theme)};
  display: inline-flex;
  position: relative;
`;

const SInput = styled.input<Props & { hasChildren: boolean }>`
  position: relative;
  display: none;
  &+label{
		&:before, &:after{
      display: inline-flex;
		}
	}
  + label:before {
    content: "";
    width: ${(props: any) => props.theme.checkbox[props.cbSize!].squareSize};
    height: ${(props: any) => props.theme.checkbox[props.cbSize!].squareSize};
    background-clip: padding-box;
    background-color: ${(props: any) => props.theme.checkbox.unselectedColor};
    border-color: ${(props: any) =>
      props.invalid
        ? props.theme.validation.borderColor
        : props.theme.checkbox.borderColor};
    border-style: ${(props: any) => props.theme.checkbox.borderStyle};
    border-radius: 1px;
    border-width ${(props: any) => props.theme.checkbox.borderWidth};
    margin-right: ${(props: any) => (props.hasChildren ? '4px' : '0px')};
    padding: 3px;
    transition: all 0.3s;
  }
  &:disabled + label {
    color: ${(props: any) => props.theme.checkbox.disabledText};
    cursor: not-allowed;
  }

  &:checked + label:before,  
  &:indeterminate + label:before {
    background-color: ${(props: any) => props.theme.checkbox.selectedColor};
  }

  &:checked + label:hover:before,
  &:indeterminate + label:hover:before {  
    background-color: ${(props: any) => props.theme.colors.primaryHover};
    border-color: ${(props: any) => props.theme.colors.primaryHover};
  }

  &:not(:checked) + label:hover:before{
    border-color: ${(props: any) => props.theme.colors.primaryHover};
  }

  label:before  {
    background-color: ${(props: any) => props.theme.checkbox.disabledCheck};
    border-color: ${(props: any) => props.theme.checkbox.disabledCheck};
  } 

  &:checked + label:after {
      content: "";
      padding: 2px;
      position: absolute;
      height:  ${(props: any) => (props.cbSize === 'lg' ? '8px' : '6px')};
      border-style: solid;
      border-color: ${(props: any) => props.theme.colors.white};
      border-width: ${(props: any) =>
        props.cbSize === 'lg' ? '0 4px 4px 0' : '0 3px 3px 0'};
      transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      margin-left: ${(props: any) =>
        props.theme.checkbox[props.cbSize!].marginLeft};
      top: 2px;
      left: 0;
    }

  &:indeterminate + label:after {
      content: "";
      padding: 6px 2px;
      text-align: center;
      position: absolute;
      height: 0px;
      border-style: solid;
      border-color: ${(props: any) => props.theme.colors.white};
      border-width: ${(props: any) =>
        props.cbSize === 'lg' ? '0 4px 0px 0' : '0 3px 0px 0'};
      ${(props: any) => indeterminateCheckboxRules(props.cbSize)};
      margin-left: 6px;
      top: 3px;
      left: 0;
    }
  &:disabled + label:before,
    &:disabled:checked + label:before,
    &:disabled:not(:checked) + label:before
     {
      background-color: ${(props: any) => props.theme.checkbox.disabledCheck};
      border-color: ${(props: any) => props.theme.checkbox.disabledCheck};
    } 
`;
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label<Partial<Props>>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1em;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const Indicator = styled.div<Partial<Props>>`
  width: 1.2rem;
  height: 1.2rem;
  background: ${(props: any) => props.theme.checkbox.unselectedColor};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border-color: ${(props: any) => props.theme.checkbox.borderColor};
  border-style: ${(props: any) => props.theme.checkbox.borderStyle};
  border-radius: 1px;
  border-width: 1px !important;

  ${Input}:checked + & {
    background-color: ${(props: any) => props.theme.checkbox.selectedColor};
  }

  ${Input}:indeterminate + & {
    background-color: ${(props: any) => props.theme.checkbox.selectedColor};
  }

  ${Label}:hover & {
    border-color: ${(props: any) => props.theme.colors.primaryHover};
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid ${(props) => props.theme.colors.white};
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg) translateX(-1px) translateY(-1px);
    -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
    -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
  }

  ${Input}:indeterminate + &::after {
    display: block;
    top: 0em;
    left: 0.35em;
    width: 45%;
    height: 40%;
    border: solid ${(props) => props.theme.colors.white};
    border-width: 0em 0em 0.2em 0em;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

const defaultProps = {
  id: uuidv4(),
  cbSize: CHECKBOX_SIZE.MEDIUM,
  displayStyle: CHECKBOX_DISPLAY_STYLE.STACKED,
} satisfies Partial<Props>;

export const Checkbox = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { id, value, onChange, label, disabled, children } = propsWithDefaults;
  const [checked, setChecked] = React.useState(CHECKBOX_STATE.EMPTY);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const dataProps = getDataProps(propsWithDefaults);

  React.useEffect(() => {
    if (value) {
      setChecked(CHECKBOX_STATE.CHECKED);
    } else {
      setChecked(value || CHECKBOX_STATE.EMPTY);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedChecked;

    if (checked === CHECKBOX_STATE.CHECKED) {
      updatedChecked = CHECKBOX_STATE.EMPTY;
    } else if (checked === CHECKBOX_STATE.EMPTY) {
      updatedChecked = CHECKBOX_STATE.CHECKED;
    } else if (checked === CHECKBOX_STATE.INDETERMINATE) {
      updatedChecked = CHECKBOX_STATE.EMPTY;
    }

    setChecked(updatedChecked);
    onChange(updatedChecked, event);
  };

  React.useEffect(() => {
    setChecked(value);
  }, [value]);

  React.useEffect(() => {
    if (checkboxRef.current) {
      if (checked === CHECKBOX_STATE.CHECKED) {
        checkboxRef.current.checked = true;
        checkboxRef.current.indeterminate = false;
      } else if (checked === CHECKBOX_STATE.EMPTY) {
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = false;
      } else if (checked === CHECKBOX_STATE.INDETERMINATE) {
        console.log('in effect - indeterminate');
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = true;
      }
    }
  }, [checked]);

  return (
    <>
      <Label htmlFor={id} disabled={disabled}>
        {label}
        <Input
          {...dataProps}
          {...propsWithDefaults}
          ref={checkboxRef}
          type="checkbox"
          onChange={handleChange}
          // hasChildren={Boolean(children)}
        >
          {children}
        </Input>
        <Indicator {...propsWithDefaults}></Indicator>
      </Label>
    </>
  );
};
