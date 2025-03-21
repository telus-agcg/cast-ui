import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export interface ToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the ID of the individual toggle
   *
   * @default uuid.v4
   **/
  id?: string;
  /**
   * Specify the size of the toggle (sm | md | lg)
   *
   * @default 'md'
   **/
  toggleSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify if the toggle is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Specify if the default state of the toggle is checked
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Label to show before the toggle
   */
  label?: string;
  /**
   * Specify if the toggle should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the function to fire when the toggle is changed
   *
   * @default void
   **/
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Specify the value of the toggle group when the current button is selected
   *
   * @default ''
   **/
  value: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const getCSSCalc: (str: string) => string = (str) => `calc(100% - ${str})`;

const SDiv = styled.div<ToggleProps>`
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  label {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    text-indent: -9999px;
    width: ${(props) => props.theme.toggle[props.toggleSize!].backgroundWidth};
    height: ${(props) =>
      props.theme.toggle[props.toggleSize!].backgroundHeight};
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.inactiveColor};
    border-color: ${(props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.disabledBorderColor};
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: ${(props) => props.theme.toggle[props.toggleSize!].toggleOffsetTop};
    left: ${(props) => props.theme.toggle[props.toggleSize!].toggleOffsetLeft};
    width: ${(props) => props.theme.toggle[props.toggleSize!].toggleSize};
    height: ${(props) => props.theme.toggle[props.toggleSize!].toggleSize};
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.inactiveDisabledColor
        : props.theme.toggle.inactiveColor};
    border-color: ${(props) =>
      props.disabled
        ? props.theme.toggle.inactiveDisabledBorderColor
        : props.theme.toggle.inactiveBorderColor};
    border-radius: 50px;
    transition: all 0.3s;
  }

  input:checked + label {
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.activeColor};
  }

  input:checked + label:after {
    left: ${(props) =>
      getCSSCalc(props.theme.toggle[props.toggleSize!].activeOffset)};
    transform: translateX(-100%);
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.toggle.activeColor};
    border-color: ${(props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledBorderColor
        : props.theme.toggle.activeBorderColor};
  }

  input:checked + label:hover:after {
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.colors.primaryHover};
  }

  input:not(:checked) + label:hover:after {
    background: ${(props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.colors.drk800};
  }

  label:active:after {
    width: ${(props) => props.theme.toggle[props.toggleSize!].toggleSize};
  }
`;

const defaultProps = {
  toggleSize: 'md',
  id: uuidv4(),
} satisfies Partial<ToggleProps>;

export const Toggle = (props: ToggleProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { onChange, children, checked, disabled, label, id, ...rest } =
    propsWithDefaults;

  const handleChange = (event) =>
    onChange ? onChange(event) : alert(`Toggle with id ${id} was clicked!`);

  return (
    <SDiv disabled={!!disabled} {...rest}>
      <input
        checked={checked}
        disabled={!!disabled}
        onChange={handleChange}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </SDiv>
  );
};
