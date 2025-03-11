import { useEffect, useRef, useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { getDataProps } from "@utils";
import { ErrorMessage } from "@typography";

export interface State {
  checked: boolean | undefined;
}

export type Props = React.PropsWithChildren<{
  /**
   * Specify the ID of the individual checkbox
   *
   * @default null
   **/
  id?: string;
  /**
   * Specify the size of the checkbox (sm | md | lg)
   *
   * @default 'md'
   **/
  cbSize?: "sm" | "md" | "lg";
  /**
   * Specify if the checkbox is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Set className
   *
   * @default ''
   **/
  className?: string;
  /**
   * Specify if the default state of the checkbox is checked
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Specify if the checkbox should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the way checkboxes will be laid out
   *
   * @default 'stacked'
   **/
  displayStyle?: "inline" | "stacked";
  /**
   * Specify whether the checkbox is neither "on" or "off"
   *
   * @default void
   **/
  indeterminate?: boolean;
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
  /**
   * Color of the invalid text
   *
   * @default ''
   **/
  invalidTextColor?: string;
  /**
   * Specify the function to fire when the checkbox is changed
   *
   * @default void
   **/
  onChange?(checked: boolean, event: React.SyntheticEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Specify the value of the checkbox group when the current button is selected
   *
   * @default ''
   **/
  value: string;
}>;

const displayStyleRules: Function = (
  displayStyle: "inline" | "stacked",
  theme: any
) => {
  if (displayStyle === "inline") {
    return {
      display: "inline-block",
      "padding-right": theme.checkbox.inlineSpacing,
    };
  }
  return {
    display: "block",
  };
};

const indeterminateCheckboxRules: Function = (cbSize: string) => {
  const ySize = { lg: -1, md: 1, sm: 3 }[cbSize];
  const xSize = { lg: -1, md: -2, sm: -1 }[cbSize];
  const transform = `rotate(90deg) translateX(${xSize}px) translateY(${ySize}px);`;
  return {
    transform,
    "-webkit-transform": transform,
    "-ms-transform": transform,
  };
};

const SDiv = styled.div<Props>`
  ${(props: Props) => displayStyleRules(props.displayStyle, props.theme)};
  display: inline-flex;
  position: relative;
`;

const SLabel = styled.label<Partial<Props>>`
  cursor: pointer;
  padding-left: 20px;
  text-indent: -20px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.common[props.cbSize!].fontSize};
`;

const SInput = styled.input<Props & { hasChildren: boolean }>`
  position: relative;
	display: none;
	& + label{
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
    margin-right: ${(props: any) => (props.hasChildren ? "4px" : "0px")};
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
      height:  ${(props: any) => (props.cbSize === "lg" ? "8px" : "6px")};
      border-style: solid;
      border-color: ${(props: any) => props.theme.colors.white};
      border-width: ${(props: any) =>
        props.cbSize === "lg" ? "0 4px 4px 0" : "0 3px 3px 0"};
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
        props.cbSize === "lg" ? "0 4px 0px 0" : "0 3px 0px 0"};
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

const defaultProps = {
  cbSize: "md",
  indeterminate: false,
  defaultChecked: false,
  disabled: false,
} satisfies Partial<Props>;

export const Checkbox = (props: Props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    disabled,
    onChange,
    id,
    cbSize,
    className,
    theme,
    children,
    displayStyle,
    indeterminate,
    invalid,
    invalidText,
    invalidTextColor,
    value,
    checked,
    defaultChecked,
  } = propsWithDefaults;
  const [localChecked, setLocalChecked] = useState(checked || !!defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const errorId = invalid ? `${id}-error-msg` : "";
  const dataProps = getDataProps(propsWithDefaults);

  console.log(theme.name);

  React.useLayoutEffect(() => {
    console.log("setting indeterminate to" + indeterminate);
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  useEffect(() => {
    setLocalChecked(Boolean(checked));
  }, [checked]);

  const onCheckChange = (event: any) => {
    if (!disabled) {
      setLocalChecked((prevState) => !prevState);
      if (onChange instanceof Function) {
        onChange(localChecked, event);
      }
    }
  };

  return (
    <>
      <SDiv
        data-checkbox=""
        id={`${id}-Checkbox`}
        value={value}
        cbSize={cbSize}
        displayStyle={displayStyle}
        className={className}
      >
        <SInput
          {...dataProps}
          onChange={onCheckChange}
          checked={localChecked}
          hasChildren={Boolean(children)}
          type="checkbox"
          role="checkbox"
          ref={inputRef}
          id={id}
          cbSize={cbSize}
          disabled={disabled}
          value={value}
          indeterminate={indeterminate}
          invalid={invalid}
          invalidText={invalidText}
          invalidTextColor={invalidTextColor}
          defaultChecked={defaultChecked}
        />
        <SLabel htmlFor={id} cbSize={cbSize}>
          {children}
        </SLabel>
        {invalid && invalidText && (
          <ErrorMessage id={errorId} message={invalidText} />
        )}
      </SDiv>
    </>
  );
};
