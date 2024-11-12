import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import uuid from 'uuid';
import { SelectCheckboxProps } from './SelectCheckbox.component';
import _ from 'lodash';
import { SelectComponents } from './index';
import { getDataProps } from '../utils/common';
import { SelectMenuList } from './SelectMenuList';

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
  isFilterable?: boolean;
  /**
   * Add Custom filter components
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
  position: relative;
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
    }
  }
  .react-select-component {
    .react-select__control {
      color: ${(props: Props) => props.theme.select.selectedOptionColor};
      transition: all 0.3s;
      min-height: ${(props: Props) =>
        props.theme.select[props.selectSize!].height};
      border-radius: ${(props: Props) =>
        props.theme.select.borderRadius ||
        props.theme.select[props.selectSize!].borderRadius};
      border-color: ${(props: Props) =>
        props.theme.common.borderColor ||
        (props.invalid
          ? props.theme.validation.borderColor
          : props.theme.select.borderColor || 'inherit')};
      &:hover {
        border-color: ${(props: Props) => props.theme.colors.drk800};
      }
      .react-select__value-container {
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
          color: ${(props: Props) => props.theme.select.selectedOptionColor};
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
          display: flex;
          align-items: center;
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
        color: ${(props: Props) => props.theme.select.disabled.color};
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
        .react-select__multi-value__remove {
          color: ${(props: Props) => props.theme.select.disabled.color};
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
      color: ${(props: Props) => props.theme.select.selectedOptionColor};
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
  }
`;

const SSelectOption = styled.div`
  background-color: ${(props: any) =>
    props.isFocused
      ? props.theme.select.highlightOptionBackgroundColor
      : props.theme.select.optionBackgroundColor};
  color: ${(props: any) =>
    props.isFocused
      ? props.theme.select.highlightOptionColor
      : props.theme.select.color};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  &.react-select__option--is-selected {
    color: ${(props: Props) => props.theme.select.selectedOptionColor};
    background-color: ${(props: Props) =>
      props.theme.select.selectedOptionBackgroundColor};
  }
  &:hover {
    background-color: ${(props: Props) =>
      props.theme.select.highlightOptionBackgroundColor};
    color: ${(props: Props) => props.theme.select.highlightOptionColor};
  }
`;

const CustomSelect: React.FC<Props> = props => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    const onDomClick = event => {
      const container = containerRef.current;
      if (container) {
        const menuElement = container.querySelector('.react-select__menu');
        if (
          !container.contains(event.target) ||
          !menuElement ||
          !menuElement.contains(event.target as Node)
        ) {
          setIsFocused(false);
        }
      }
    };
    document.addEventListener('mousedown', onDomClick);

    return () => {
      document.removeEventListener('mousedown', onDomClick);
    };
  }, []);

  const {
    creatable,
    options,
    controlSpecificProps,
    invalid,
    selectSize,
    theme = Themes.canopyTheme,
    id = 'select',
    isMulti,
    isDisabled,
    isClearable,
    isFilterable = true,
    formatGroupLabel,
    clearText,
    selectedOption,
    invalidText = '',
    optionType = 'default',
    components: propsComponents,
    ...restProps
  } = props;

  const BaseSelectComponent = creatable ? CreatableSelect : Select;
  const errorId = invalid ? `${id}-error-msg` : '';
  const closeMenuOnSelect =
    typeof props.closeMenuOnSelect !== 'undefined'
      ? props.closeMenuOnSelect
      : !isMulti;
  const uniqueId = uuid.v4();

  const selectCheckboxProps =
    optionType === 'checkbox'
      ? SelectCheckboxProps({
          options,
          isMulti,
          isFilterable,
          id,
          clearText,
          selectedOptions: selectedOption,
          updateSelectedOptions: props.onChange,
        })
      : {};

  const DefaultSelectOption = (props: any) => {
    const { innerProps, innerRef, isFocused } = props;
    return (
      <SSelectOption
        data-testid={`select-option-${_.snakeCase(props.data.label)}`}
        className="react-select__option"
        isFocused={isFocused}
        ref={innerRef}
        {...innerProps}
        id={`${id}-Select-${_.snakeCase(props.data.label)}`}
      >
        {props.data.label}
      </SSelectOption>
    );
  };

  const MultiValueRemove = (props: any) => {
    const { innerProps, innerRef } = props;
    return (
      <div
        data-testid={`select-option-remove-${_.snakeCase(props.data.label)}`}
        id={`${id}-Select-multi-value_remove-${_.snakeCase(props.data.label)}`}
        className="react-select__multi-value__remove"
        ref={innerRef}
        {...innerProps}
      >
        <SelectComponents.MultiValueRemove {...props} />
      </div>
    );
  };

  const components = {
    ...(optionType === 'default' && {
      MultiValueRemove,
      Option: DefaultSelectOption,
    }),
    ...(isFilterable && {
      MenuList: SelectMenuList,
    }),
  };

  const dataProps = getDataProps(props);

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDiv
        {...dataProps}
        ref={containerRef}
        className="select-wrapper"
        selectSize={selectSize}
        aria-invalid={invalid ? true : undefined}
        aria-describedby={errorId}
        invalid={invalid}
        id={uniqueId}
        isDisabled={isDisabled}
      >
        <BaseSelectComponent
          className={`react-select-component ${restProps.className}`}
          closeMenuOnSelect={closeMenuOnSelect}
          classNamePrefix="react-select"
          isDisabled={isDisabled}
          isClearable={isClearable}
          isSearchable={false}
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
          formatGroupLabel={formatGroupLabel}
          components={components}
          menuIsOpen={isFocused || undefined}
          isFocused={isFocused || undefined}
          onMenuInputFocus={() => setIsFocused(true)}
          {...restProps}
          {...controlSpecificProps}
          {...selectCheckboxProps}
        />
        {invalid && (
          <ErrorMessage
            id={errorId}
            message={invalidText}
            textColor={theme.danger}
          />
        )}
      </SDiv>
    </ThemeProvider>
  );
};

export { CustomSelect as Select };
export default CustomSelect;
