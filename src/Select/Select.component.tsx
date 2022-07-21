import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select, { Creatable as CreatableSelect } from 'react-select';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import uuid from 'uuid';
import { SelectCheckboxProps } from './SelectCheckbox.component';
import _ from 'lodash';
import { SelectComponents } from '..';
import { getDataProps } from '../utils/common';

export type OptionType = {
  value: string;
  label: string;
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  selectSize?: 'sm' | 'md' | 'lg';
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Handle multi-select
   *
   * @default false
   **/
  creatable?: boolean;
  /**
   * Handle multi-select
   *
   * @default false
   **/
  isMulti?: boolean;
  /**
   * Specify if the control is disabled
   *
   * @default false
   **/
  isDisabled?: boolean;
  /**
   * Specify if the selected options are clearable
   *
   * @default false
   **/
  clearText?: any;
  /**
   * Specify the clear indciator text
   *
   * @default 'clear'
   **/
  isClearable?: boolean;
  /**
   * Specify custom option components
   *
   * @default null
   **/
  components?: any;
  /**
   * Format a group label
   *
   * @default null
   **/
  formatGroupLabel?: any;
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Subscribe to changes in value
   *
   * @default null
   */
  onChange?: any;
  /**
   * Value for a controlled select component
   *
   * @default undefined
   */
  value?: OptionType[];
  /**
   * Should Menu close on select
   *
   * @default true
   */
  closeMenuOnSelect?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
  /**
   * Placeholder text
   *
   * @default null
   **/
  placeholder?: string;
  /**
   * The list of options available
   *
   * @default null
   **/
  options?: any;
  /**
   * Hide selected options
   *
   * @default true
   **/
  hideSelectedOptions?: boolean;
  /**
   * Specify the control's selected option
   *
   * @default null
   **/
  selectedOption?: Object | Object[];

  /**
   * Any props that should be passed directly to the third-
   * party react-select control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
  //  {
  //   blockOptionHover: boolean;
  //   clearFocusValueOnUpdate: boolean;
  //   commonProps: any;
  //   // components: SelectComponents<OptionType>;
  //   hasGroups: boolean;
  //   initialTouchX: number;
  //   initialTouchY: number;
  //   inputIsHiddenAfterUpdate: boolean | null;
  //   instancePrefix: string;
  //   isSearchable: boolean;
  //   name: string;
  //   openAfterFocus: boolean;
  //   scrollToFocusedOptionOnUpdate: boolean;
  //   userIsDragging: boolean | null;
  //   controlRef: React.Ref<any>;
  //   getControlRef: (ref: HTMLElement) => void;
  //   focusedOptionRef: React.Ref<any>;
  //   getFocusedOptionRef: (ref: HTMLElement) => void;
  //   menuListRef: React.Ref<any>;
  //   getMenuListRef: (ref: HTMLElement) => void;
  //   inputRef: React.Ref<any>;
  //   getInputRef: (ref: HTMLElement) => void;
  //   // cacheComponents: (components: SelectComponents<OptionType>) => void;
  //   onMenuOpen(): void;
  //   onMenuClose(): void;
  //   // onInputChange(newValue: string, actionMeta: InputActionMeta): void;
  //   focusInput(): void;
  //   blurInput(): void;
  //   focus(): void;
  //   blur(): void;
  //   openMenu(focusOption: 'first' | 'last'): void;
  //   focusValue(direction: 'previous' | 'next'): void;
  //   menuPlacement: 'auto' | 'top' | 'bottom';
  //   // focusOption(direction: FocusDirection): void;
  //   // setValue: (
  //   //   newValue: ValueType<OptionType>,
  //   //   action: ActionTypes,
  //   //   option?: OptionType
  //   // ) => void;
  //   selectOption: (newValue: OptionType) => void;
  //   removeValue: (removedValue: OptionType) => void;
  //   clearValue: () => void;
  //   popValue: () => void;
  //   children: React.ReactElement;
  // };

  /**
   * Portal the select menu to another element.
   *
   * @default ''
   */
  menuPortalTarget?: HTMLElement;

  /**
   * If default the options will be selected through the list item.
   * If checkbox the options will be selected through a checkbox.
   *
   * @default 'default'
   **/
  optionType?: 'default' | 'checkbox';
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) =>
    props.theme.common[props.selectSize!].fontSize};
  color: ${(props: Props) => props.theme.reverseText};
  width: ${(props: Props) => props.theme.select.width};
  cursor: ${(props: Props) => (props.isDisabled ? 'not-allowed' : 'auto')};
  div[aria-invalid] & {
    border: 1px solid red;
  }
  .react-select__menu {
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    z-index: 9999;
    color: ${(props: Props) => props.theme.colors.drk800};
    .menuListHeader {
      padding: 8px 12px;
      border-bottom: 1px solid ${(props: Props) => props.theme.colors.lt800};
    }
    .react-select__menu-list {
      font-family: ${(props: Props) => props.theme.typography.fontFamily};
      color: ${(props: Props) => props.theme.colors.drk800};
    }
    .react-select__option {
      padding: 8px 12px;
      background-color: ${(props: Props) =>
        props.theme.select.optionBackgroundColor};
      font-family: ${(props: Props) => props.theme.typography.fontFamily};
      color: ${(props: Props) => props.theme.colors.drk800};
      &.react-select__option--is-selected {
        color: ${(props: Props) => props.theme.select.selectedOptionColor};
        background-color: ${(props: Props) =>
          props.theme.select.selectedOptionBackgroundColor};
      }
      &:hover {
        background-color: ${(props: Props) =>
          props.theme.select.selectNavigationBackgroundColor};
        color: ${(props: Props) => props.theme.select.hoverOptionColor};
      }
    }
  }
  .react-select-component {
    .react-select__control {
      min-height: ${(props: Props) =>
        props.theme.select[props.selectSize!].height};
      border-radius: ${(props: Props) =>
        props.theme.select.borderRadius ||
        props.theme.common[props.selectSize!].borderRadius};
      border-color: ${(props: Props) =>
        props.theme.common.borderColor ||
        (props.invalid
          ? props.theme.validation.borderColor
          : props.theme.select.borderColor || 'inherit')};
      .react-select__value-container {
        color: ${(props: Props) => props.theme.colors.drk800};
        padding: ${(props: Props) =>
          props.theme.select[props.selectSize!].padding};
        font-family: ${(props: Props) => props.theme.typography.fontFamily};
        font-size: ${(props: Props) =>
          props.theme.common[props.selectSize!].fontSize};
        .react-select__input {
          font-family: ${(props: Props) => props.theme.typography.fontFamily};
          font-size: ${(props: Props) =>
            props.theme.common[props.selectSize!].fontSize};
        }

        .react-select__single-value {
          color: ${(props: Props) => props.theme.colors.drk800};
        }

        .react-select__placeholder {
          color: ${(props: Props) => props.theme.select.placeholderColor};
        }
      }

      .react-select__multi-value {
        background-color: ${(props: Props) =>
          props.theme.select.multiSelect.badge.backgroundColor};
        border-radius: ${(props: Props) =>
          props.theme.select.multiSelect.badge.borderRadius};
        .react-select__multi-value__remove {
          color: ${(props: Props) => props.theme.colors.primary};
          div:first-child {
            display: flex;
          }
        }
        .react-select__multi-value__remove:hover {
          background-color: ${(props: Props) =>
            props.theme.select.multiSelect.badge.backgroundColor};
          border-radius: ${(props: Props) =>
            props.theme.select.multiSelect.badge.borderRadius};
          cursor: pointer;
        }
      }

      &.react-select__control--is-disabled {
        border-color: ${(props: Props) =>
          props.theme.select.disabled.borderColor};
        background-color: ${(props: Props) =>
          props.theme.select.disabled.backgroundColor};
        .react-select__placeholder {
          color: ${(props: Props) =>
            props.theme.select.disabled.placeholderColor};
        }
        .react-select__single-value {
          color: ${(props: Props) => props.theme.select.disabled.color};
        }
        .react-select__indicator {
          color: ${(props: Props) =>
            props.theme.select.disabled.placeholderColor};
        }
        .react-select__multi-value {
          background-color: ${(props: Props) =>
            props.theme.select.multiSelect.badge.disabled.backgroundColor};
        }
      }

      &.react-select__control--is-focused {
        border-color: ${(props: Props) =>
          props.invalid
            ? props.theme.validation.borderColor
            : props.theme.colors.primary};
        box-shadow: 0 0 3px
          ${(props: Props) =>
            props.invalid
              ? props.theme.validation.borderColor
              : props.theme.colors.primary};
      }
    }
    .react-select__indicators {
      align-self: center;
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__clear-indicator {
        color: ${(props: Props) => props.theme.colors.primary};
        padding: 0;
        &:hover {
          color: ${(props: Props) => props.theme.colors.primary};
        }
      }
      .react-select__dropdown-indicator {
        color: ${(props: Props) => props.theme.select.dropdownColor};
        padding: 0 8px;
        &:hover {
          color: ${(props: Props) => props.theme.select.dropdownColor};
        }
      }
      .react-select__clear-indicator,
      .react-select__dropdown-indicator {
        align-self: center;
        &:hover {
          cursor: pointer;
        }
      }
    }

    &.highlighted .react-select__control {
      background-color: ${props => props.theme.colors.highlight200};
    }
  }
`;

export class CustomSelect extends React.Component<Props> {
  static defaultProps = {
    selectSize: 'md',
    theme: Themes.defaultTheme,
    invalidText: '',
    id: 'select',
    option: {},
    creatable: false,
    optionType: 'default',
  };

  render() {
    const {
      creatable,
      options,
      controlSpecificProps,
      invalid,
      selectSize,
      theme,
      id,
      isMulti,
      isDisabled,
      isClearable,
      formatGroupLabel,
      clearText,
      selectedOption,
      invalidText,
      optionType,
      components: propsComponents,
      ...props
    } = this.props;
    const BaseSelectComponent: React.ElementType = creatable
      ? CreatableSelect
      : Select;
    const errorId = invalid ? `${id}-error-msg` : '';
    const closeMenuOnSelect =
      typeof this.props.closeMenuOnSelect !== 'undefined'
        ? this.props.closeMenuOnSelect
        : !isMulti;
    const uniqueId = uuid.v4();

    const selectCheckboxProps =
      optionType === 'checkbox'
        ? {
            ...SelectCheckboxProps({
              options,
              isMulti,
              id,
              clearText,
              selectedOptions: this.props.selectedOption,
              updateSelectedOptions: this.props.onChange,
            }),
          }
        : {};

    const DefaultSelectOption = props => {
      const { innerProps, innerRef, isFocused } = props;
      return (
        <div
          data-testid={`select-option-${_.snakeCase(props.data.label)}`}
          className={'react-select__option'}
          style={{
            backgroundColor: isFocused
              ? theme.select.searchOptionBackgroundColor
              : undefined,
            color: isFocused ? theme.select.hoverOptionColor : undefined,
          }}
          ref={innerRef}
          {...innerProps}
          id={`${id}-Select-${_.snakeCase(props.data.label)}`}
        >
          {props.data.label}
        </div>
      );
    };

    const MultiValueRemove = props => {
      const { innerProps, innerRef } = props;
      return (
        <div
          data-testid={`select-option-remove-${_.snakeCase(props.data.label)}`}
          id={`${id}-Select-multi-value_remove-${_.snakeCase(
            props.data.label,
          )}`}
          className={'react-select__multi-value__remove'}
          ref={innerRef}
          {...innerProps}
        >
          <SelectComponents.MultiValueRemove />
        </div>
      );
    };

    const dataProps = getDataProps(this.props);
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv
          {...dataProps}
          className="select-wrapper"
          selectSize={selectSize}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
          invalid={invalid}
          id={uniqueId}
          isDisabled={isDisabled}
        >
          <BaseSelectComponent
            closeMenuOnSelect={closeMenuOnSelect}
            classNamePrefix="react-select"
            isDisabled={isDisabled}
            isClearable={isClearable}
            clearText={clearText}
            isMulti={isMulti}
            value={selectedOption}
            options={options}
            id={id}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
            dropdownColor={theme.primary}
            menuPortalTarget={document.getElementById(uniqueId)}
            menuPlacement={'bottom'}
            formatGroupLabel={formatGroupLabel}
            components={
              optionType === 'default' && {
                MultiValueRemove,
                Option: DefaultSelectOption,
              }
            }
            {...props}
            {...controlSpecificProps}
            {...selectCheckboxProps}
            className={`react-select-component ${props.className}`}
          />
          {invalid && (
            <ErrorMessage
              id={errorId}
              message={invalidText!}
              textColor={theme.danger}
            />
          )}
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default CustomSelect;
