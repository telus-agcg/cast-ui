import * as React from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { components as SelectComponents } from 'react-select';
import { SelectCheckboxProps } from './SelectCheckbox.component';
import { SelectMenuList } from './SelectMenuList';
import { ErrorMessage } from '@typography';
import { getDataProps } from '@utils';
import { Themes } from '@themes';

/**
 * Built-in translations for the "No options" message shown in the Select
 * dropdown when a search yields no results.
 *
 * Keys follow the BCP 47 language tag format (e.g. 'fr', 'fr-CA').
 * Both the full tag and the primary language subtag are checked, so 'fr-CA'
 * will fall back to 'fr' when an exact match is not found.
 */
const NO_OPTIONS_MESSAGES: Record<string, string> = {
  en: 'No options',
  fr: 'Aucune option',
};

/**
 * Resolves the "No options" message for the given BCP 47 language tag.
 * Falls back to the primary language subtag, then to English.
 */
const getNoOptionsMessage = (lang: string): string => {
  if (!lang) return NO_OPTIONS_MESSAGES['en'];
  const normalized = lang.toLowerCase();
  if (NO_OPTIONS_MESSAGES[normalized]) return NO_OPTIONS_MESSAGES[normalized];
  // Try primary subtag only (e.g. 'fr' from 'fr-CA')
  const primary = normalized.split('-')[0];
  return NO_OPTIONS_MESSAGES[primary] ?? NO_OPTIONS_MESSAGES['en'];
};

/**
 * Returns the current document language (`<html lang="...">`) and re-renders
 * whenever it changes. Falls back to `navigator.language` when the attribute
 * is absent, and to `'en'` when neither is available.
 */
const useDocumentLanguage = (): string => {
  const getLanguage = (): string => {
    if (typeof document !== 'undefined') {
      const lang = document.documentElement.lang;
      if (lang) return lang;
    }
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language;
    }
    return 'en';
  };

  const [language, setLanguage] = React.useState<string>(getLanguage);

  React.useEffect(() => {
    if (typeof MutationObserver === 'undefined') return;

    const observer = new MutationObserver(() => {
      setLanguage(getLanguage());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    });

    return () => observer.disconnect();
  }, []);

  return language;
};

export type OptionType = {
  value: string;
  label: string;
  /** Optional subtitle text to display below the label in dropdown options */
  subtitle?: string;
};

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
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

const SDiv = styled.div<{ $selectSize?: 'sm' | 'md' | 'lg' } & SelectProps>`
  position: relative;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.common[props.$selectSize!].fontSize};
  color: ${(props) => props.theme.reverseText};
  width: ${(props) => props.theme.select.width};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'auto')};
  div[aria-invalid] & {
    border: 1px solid red;
  }
  .react-select__menu {
    font-family: ${(props) => props.theme.typography.fontFamily};
    z-index: 9999;
    color: ${(props) => props.theme.colors.drk800};
    .menuListHeader {
      padding: 8px 12px;
      border-bottom: 1px solid ${(props) => props.theme.colors.lt800};
    }
    .react-select__menu-list {
      font-family: ${(props) => props.theme.typography.fontFamily};
      color: ${(props) => props.theme.colors.drk800};
    }
    .react-select__option {
      padding: 8px 12px;
    }
  }
  .react-select-component {
    .react-select__control {
      color: ${(props) => props.theme.select.selectedOptionColor};
      transition: all 0.3s;
      min-height: ${(props) => props.theme.select[props.$selectSize!].height};
      border-radius: ${(props) =>
        props.theme.select.borderRadius ||
        props.theme.select[props.$selectSize!].borderRadius};
      border-color: ${(props) =>
        props.theme.common.borderColor ||
        (props.invalid
          ? props.theme.validation.borderColor
          : props.theme.select.borderColor || 'inherit')};
      &:hover {
        border-color: ${(props) => props.theme.colors.drk800};
      }
      .react-select__value-container {
        padding: ${(props) => props.theme.select[props.$selectSize!].padding};
        font-family: ${(props) => props.theme.typography.fontFamily};
        font-size: ${(props) => props.theme.common[props.$selectSize!].fontSize};
        .react-select__input {
          font-family: ${(props) => props.theme.typography.fontFamily};
          font-size: ${(props) =>
            props.theme.common[props.$selectSize!].fontSize};
        }

        .react-select__single-value {
          color: ${(props) => props.theme.select.selectedOptionColor};
        }

        .react-select__placeholder {
          color: ${(props) => props.theme.select.placeholderColor};
        }
      }

      .react-select__multi-value {
        background-color: ${(props) =>
          props.theme.select.multiSelect.badge.backgroundColor};
        border-radius: ${(props) =>
          props.theme.select.multiSelect.badge.borderRadius};
        .react-select__multi-value__remove {
          color: ${(props) => props.theme.colors.primary};
          display: flex;
          align-items: center;
          div:first-child {
            display: flex;
          }
        }
        .react-select__multi-value__remove:hover {
          background-color: ${(props) =>
            props.theme.select.multiSelect.badge.backgroundColor};
          border-radius: ${(props) =>
            props.theme.select.multiSelect.badge.borderRadius};
          cursor: pointer;
        }
      }

      &.react-select__control--is-disabled {
        color: ${(props) => props.theme.select.disabled.color};
        border-color: ${(props) => props.theme.select.disabled.borderColor};
        background-color: ${(props) =>
          props.theme.select.disabled.backgroundColor};
        .react-select__placeholder {
          color: ${(props) => props.theme.select.disabled.placeholderColor};
        }
        .react-select__single-value {
          color: ${(props) => props.theme.select.disabled.color};
        }
        .react-select__indicator {
          color: ${(props) => props.theme.select.disabled.placeholderColor};
        }
        .react-select__multi-value {
          background-color: ${(props) =>
            props.theme.select.multiSelect.badge.disabled.backgroundColor};
        }
        .react-select__multi-value__remove {
          color: ${(props) => props.theme.select.disabled.color};
        }
      }

      &.react-select__control--is-focused {
        border-color: ${(props) =>
          props.invalid
            ? props.theme.validation.borderColor
            : props.theme.colors.primary};
        box-shadow: 0 0 3px
          ${(props) =>
            props.invalid
              ? props.theme.validation.borderColor
              : props.theme.colors.primary};
      }
    }
    .react-select__indicators {
      align-self: center;
      color: ${(props) => props.theme.select.selectedOptionColor};
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__clear-indicator {
        color: ${(props) => props.theme.colors.primary};
        padding: 0;
        &:hover {
          color: ${(props) => props.theme.colors.primary};
        }
      }
      .react-select__dropdown-indicator {
        color: ${(props) => props.theme.select.dropdownColor};
        padding: 0 8px;
        &:hover {
          color: ${(props) => props.theme.select.dropdownColor};
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

const SSelectOption = styled.div<SelectProps>`
  background-color: ${(props: any) =>
    props.isFocused
      ? props.theme.select.highlightOptionBackgroundColor
      : props.theme.select.optionBackgroundColor};
  color: ${(props: any) =>
    props.isFocused
      ? props.theme.select.highlightOptionColor
      : props.theme.select.color};
  font-family: ${(props) => props.theme.typography.fontFamily};
  &.react-select__option--is-selected {
    color: ${(props) => props.theme.select.selectedOptionColor};
    background-color: ${(props) =>
      props.theme.select.selectedOptionBackgroundColor};
  }
  &:hover {
    background-color: ${(props) =>
      props.theme.select.highlightOptionBackgroundColor};
    color: ${(props) => props.theme.select.highlightOptionColor};
  }
`;

const SSelectOptionSubtitle = styled.div`
  color: ${(props) => props.theme.select.subtitleColor};
  font-size: ${(props) => props.theme.select.subtitleFontSize};
  margin-top: 2px;
  line-height: 1.2;
`;

// Global styles for react-select menu when portaled to document.body
const SelectPortalStyles = createGlobalStyle<{ theme: any; selectSize: string }>`
  .react-select__menu-portal {
    z-index: 9999;
    
    .react-select__menu {
      font-family: ${(props) => props.theme.typography.fontFamily};
      font-size: ${(props) => props.theme.common[props.selectSize]?.fontSize};
      z-index: 9999;
      color: ${(props) => props.theme.colors.drk800};
      
      .menuListHeader {
        padding: 8px 12px;
        border-bottom: 1px solid ${(props) => props.theme.colors.lt800};
      }
      
      .react-select__menu-list {
        font-family: ${(props) => props.theme.typography.fontFamily};
        color: ${(props) => props.theme.colors.drk800};
      }
      
      .react-select__option {
        padding: 8px 12px;
        font-family: ${(props) => props.theme.typography.fontFamily};
        background-color: ${(props) => props.theme.select.optionBackgroundColor};
        color: ${(props) => props.theme.select.color};
        
        &.react-select__option--is-focused {
          background-color: ${(props) => props.theme.select.highlightOptionBackgroundColor};
          color: ${(props) => props.theme.select.highlightOptionColor};
        }
        
        &.react-select__option--is-selected {
          color: ${(props) => props.theme.select.selectedOptionColor};
          background-color: ${(props) => props.theme.select.selectedOptionBackgroundColor};
        }
        
        &:hover {
          background-color: ${(props) => props.theme.select.highlightOptionBackgroundColor};
          color: ${(props) => props.theme.select.highlightOptionColor};
        }
      }
    }
  }
`;

const defaultProps = {
  id: 'select',
  optionType: 'default',
  isFilterable: true,
  selectSize: 'md',
  theme: Themes.canopyTheme,
} satisfies Partial<SelectProps>;

export const CustomSelect: React.FC<SelectProps> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState('');

  // Detect the current document language so the "No options" message is
  // automatically shown in the correct language when the app locale changes.
  const documentLanguage = useDocumentLanguage();

  const {
    theme,
    creatable,
    options,
    controlSpecificProps,
    invalid,
    selectSize,
    id,
    isMulti,
    isDisabled,
    isClearable,
    isFilterable,
    formatGroupLabel,
    clearText,
    selectedOption,
    invalidText = '',
    optionType,
    onChange,
    ...restProps
  } = propsWithDefaults;

  React.useEffect(() => {
    const onDomClick = (event) => {
      const container = containerRef.current;
      if (!container) return;

      const target = event.target as HTMLElement;
      
      // Check if click is inside the container (control area)
      if (container.contains(target)) {
        return;
      }
      
      // Check if the click is within the react-select menu or menu portal
      // If so, don't close - let react-select handle it
      if (target.closest('.react-select__menu') || target.closest('.react-select__menu-portal')) {
        return;
      }
      
      // Click is outside both container and menu, so close
      setIsFocused(false);
      setFilterValue('');
    };
    
    document.addEventListener('mousedown', onDomClick);

    return () => {
      document.removeEventListener('mousedown', onDomClick);
    };
  }, []);

  const handleBlur = () => {
    // Use requestAnimationFrame to check where focus actually moved
    requestAnimationFrame(() => {
      const activeElement = document.activeElement as HTMLElement;
      
      // Check if focus is still within the container
      if (containerRef.current && containerRef.current.contains(activeElement)) {
        return;
      }
      
      // Check if focus moved to the portaled menu (including search input)
      if (activeElement && (
        activeElement.closest('.react-select__menu') || 
        activeElement.closest('.react-select__menu-portal')
      )) {
        return;
      }
      
      // Focus is outside, close the menu
      setIsFocused(false);
    });
  };

  const handleSelectChange = (event) => {
    if (onChange instanceof Function) onChange(event);
    if (isFilterable && !isMulti) {
      setIsFocused(false);
    }
  };

  const BaseSelectComponent = creatable ? CreatableSelect : Select;
  const errorId = invalid ? `${id}-error-msg` : '';
  const closeMenuOnSelect =
    typeof props.closeMenuOnSelect !== 'undefined'
      ? props.closeMenuOnSelect
      : !isMulti;
  const uniqueId = uuidv4();

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
        <div>{props.data.label}</div>
        {props.data.subtitle && (
          <SSelectOptionSubtitle>{props.data.subtitle}</SSelectOptionSubtitle>
        )}
      </SSelectOption>
    );
  };

  const formatOptionLabel = (
    option: OptionType,
    { context }: { context: 'menu' | 'value' }
  ) => {
    // In 'value' context (selected value display), show only the label
    if (context === 'value') {
      return option.label;
    }
    // In 'menu' context (dropdown), show label and subtitle if present
    return (
      <div>
        <div>{option.label}</div>
        {option.subtitle && (
          <SSelectOptionSubtitle>{option.subtitle}</SSelectOptionSubtitle>
        )}
      </div>
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

  // Build a locale-aware default "No options" message based on the current
  // document language. This is used as a fallback when the consumer has not
  // provided their own noOptionsMessage via controlSpecificProps.
  // If the consumer does supply noOptionsMessage in controlSpecificProps it
  // will override this default because controlSpecificProps is spread after.
  const defaultNoOptionsMessage = React.useCallback(
    () => getNoOptionsMessage(documentLanguage),
    [documentLanguage],
  );

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SelectPortalStyles theme={theme} selectSize={selectSize!} />
      <SDiv
        {...dataProps}
        ref={containerRef}
        className="select-wrapper"
        $selectSize={selectSize}
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
          menuPortalTarget={document.getElementById(uniqueId)}
          formatGroupLabel={formatGroupLabel}
          formatOptionLabel={optionType === 'default' ? formatOptionLabel : undefined}
          components={components}
          inputValue={filterValue}
          menuIsOpen={isFocused || undefined}
          isFocused={isFocused || undefined}
          onInputChange={(value) => setFilterValue(value)}
          onMenuInputFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleSelectChange}
          noOptionsMessage={defaultNoOptionsMessage}
          {...restProps}
          {...controlSpecificProps}
          {...selectCheckboxProps}
        />
        {invalid && <ErrorMessage id={errorId} message={invalidText} />}
      </SDiv>
    </ThemeProvider>
  );
};
