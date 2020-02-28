import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select /*, SelectBase */ from 'react-select';
// import { SelectComponents, InputActionMeta, FocusDirection } from 'react-select/types';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import uuid from 'uuid';

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
   * Value for a controlled select componenet
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
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) =>
    props.theme.typography.fontFamily} !important;
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  width: ${(props: Props) => props.theme.select.width};
  .react-select-component > div[class*="-control"] {
    min-height: auto;
    border-radius: ${(props: Props) =>
      props.theme.select.borderRadius ||
      props.theme.common[props.selectSize!].borderRadius};
    border-color: ${(props: Props) =>
      props.theme.common.borderColor ||
      (props.invalid
        ? props.theme.validation.borderColor
        : props.theme.select.borderColor || 'inherit')};
  }
`;

export class CustomSelect extends React.Component<Props> {
  static defaultProps = {
    selectSize: 'md',
    theme: Themes.defaultTheme,
    invalidText: '',
    id: uuid.v4(),
    option: {},
  };

  componentDidUpdate(prevProps) {
    console.log('Current theme: ', this.props.theme);
  }

  render() {
    console.log('Current theme: ', this.props.theme);

    const customTheme = rsTheme => {
      return {
        ...rsTheme,
        borderRadius: theme.common[selectSize!].borderRadius,
        colors: {
          ...rsTheme.colors,
          primary: theme.select.selectedOptionColor,
        },
      };
    };
    const customStyles = {
      control: styles => ({
        ...styles,
        minHeight: theme.select[selectSize!].height,
      }),
      input: styles => ({
        ...styles,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.common[selectSize!].fontSize,
        borderColor: invalid ? theme.colors.danger : theme.select.borderColor,
      }),
      valueContainer: styles => ({
        ...styles,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.common[selectSize!].fontSize,
        padding: theme.select[selectSize!].padding,
      }),
      menuPortal: styles => ({
        ...styles,
        fontFamily: theme.typography.fontFamily,
        zIndex: 9999,
      }),
      menuList: styles => ({
        ...styles,
        backgroundColor: theme.select.optionBackgroundColor,
      }),
      option: (styles, state) => {
        return {
          ...styles,
          backgroundColor: theme.select.optionBackgroundColor,
          fontFamily: theme.typography.fontFamily,
          '&:hover': {
            backgroundColor: theme.select.hoverOptionBackgroundColor,
          },
          color: state.isSelected
            ? theme.select.selectedOptionColor
            : theme.colors.drk800,
        };
      },
      indicatorsContainer: styles => ({
        ...styles,
        alignSelf: 'center',
      }),
      indicatorSeparator: styles => ({
        ...styles,
        display: 'none',
      }),
      clearIndicator: styles => ({
        ...styles,
        padding: '0px',
      }),
      dropdownIndicator: styles => ({
        ...styles,
        color: theme.select.dropdownColor,
        padding: '0px 8px',
        '&:hover': {
          color: theme.select.dropdownColor,
        },
      }),
    };

    const {
      options,
      controlSpecificProps,
      invalid,
      selectSize,
      theme,
      id,
      isMulti,
      isDisabled,
      isClearable,
      selectedOption,
      invalidText,
      ...props
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';
    const closeMenuOnSelect =
      typeof this.props.closeMenuOnSelect !== 'undefined'
        ? this.props.closeMenuOnSelect
        : !isMulti;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv
          className="select-wrapper"
          selectSize={selectSize}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
          invalid={invalid}
          id={id}
        >
          <Select
            {...props}
            {...controlSpecificProps}
            closeMenuOnSelect={closeMenuOnSelect}
            className="react-select-component"
            classNamePrefix="react-select"
            isDisabled={isDisabled}
            isClearable={isClearable}
            isMulti={isMulti}
            value={selectedOption}
            options={options}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
            dropdownColor={theme.primary}
            menuPortalTarget={document.body}
            menuPlacement={'bottom'}
            theme={customTheme}
            styles={customStyles}
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
