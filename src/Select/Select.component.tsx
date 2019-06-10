import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select, { components /*, SelectBase */ } from 'react-select';
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
   * Color of the invalid text
   *
   * @default ''
   **/
  invalidTextColor?: string;
  /**
   * The list of options available
   *
   * @default null
   **/
  options?: any;
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
   * Color of the input's border
   *
   * @default: ''
   */
  borderColor?: string;
  /**
   * Color of the input's radius
   *
   * @default: ''
   */
  borderRadius?: string;
  /**
   * color of the arrow down
   *
   * @default ''
   */
  dropdownColor?: string;
  /**
   * option color representation
   *
   * @default ''
   */
  optionBackgroundColor?: string;
  /**
   * option's hover color representation
   *
   * @default ''
   */
  hoverOptionBackgroundColor?: string;

  /**
   * Portal the select menu to another element.
   *
   * @default ''
   */
  menuPortalTarget?: Body;
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  .react-select-component > div[class*="-control"] {
    min-height: unset;
    margin-top: 1px;
    padding-top: 1px;
    border-radius: ${(props: Props) =>
      props.borderRadius || props.theme.common[props.selectSize!].borderRadius};
    border-color: ${(props: Props) =>
      props.borderColor || props.theme.select.borderColor || 'inherit'};
  }

`;

const SSelect = styled(Select)`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  &:disabled {
    background: ${(props: Props) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
  .react-select__value-container {
    padding-top: 0px;
  }
  .react-select__placeholder {
    color: ${(props: any) => props.theme.input.placeholderColor};
  }
  .react-select__indicators {
    padding-top: 2px;
  }
  .react-select__control {
    align-items: flex-start;
  }
`;

const SIndicatorWrapper = styled.div<Props>`
  & > div > div {
    color: ${(props: any) =>
      props.dropdownColor || props.theme.select.dropdownColor};
    &:hover {
      color: ${(props: Props) =>
        props.dropdownColor || props.theme.select.dropdownColor};
    }
  }
  & > div > span {
    color: ${(props: Props) =>
      props.dropdownColor || props.theme.select.dropdownColor};
  }
`;

const SOption = styled.div<Props>`
  backgroundcolor: ${(props: Props) =>
    props.optionBackgroundColor || props.theme.select.optionBackgroundColor};
  &:hover {
    backgroundcolor: ${(props: Props) =>
      props.hoverOptionBackgroundColor ||
      props.theme.select.hoverOptionBackgroundColor};
  }
`;

const Option = styled(components.Option)``;

const IndicatorsContainer = styled(components.IndicatorsContainer)`
  & > div {
    padding-top: 0;
    padding-bottom: 0;
`;

export class CustomSelect extends React.Component<Props> {
  static defaultProps = {
    selectSize: 'md',
    theme: Themes.defaultTheme,
    invalidText: '',
    id: uuid.v4(),
    option: {},
    closeMenuOnSelect: false,
  };

  render() {
    const {
      options,
      controlSpecificProps,
      closeMenuOnSelect,
      invalid,
      selectSize,
      theme,
      id,
      isMulti,
      isDisabled,
      selectedOption,
      invalidText,
      invalidTextColor,
      dropdownColor,
      optionBackgroundColor,
      hoverOptionBackgroundColor,
      ...props
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';
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
          <SSelect
            components={{
              IndicatorSeparator: () => null,
              Option: p => (
                <SOption
                  optionBackgroundColor={optionBackgroundColor}
                  hoverOptionBackgroundColor={hoverOptionBackgroundColor}
                >
                  <Option {...p} />
                </SOption>
              ),
              IndicatorsContainer: p => (
                <SIndicatorWrapper dropdownColor={dropdownColor}>
                  <IndicatorsContainer {...p} />
                </SIndicatorWrapper>
              ),
            }}
            closeMenuOnSelect={closeMenuOnSelect}
            className="react-select-component"
            classNamePrefix="react-select"
            isDisabled={isDisabled}
            isMulti={isMulti}
            value={selectedOption}
            options={options}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
            dropdownColor={dropdownColor}
            menuPortalTarget={document.body}
            styles={{
              menuPortal: styles => ({
                ...styles,
                fontFamily: theme.typography.fontFamily,
              }),
            }}
            {...props}
            {...controlSpecificProps}
          />
          {invalid && (
            <ErrorMessage
              id={errorId}
              message={invalidText!}
              textColor={invalidTextColor!}
            />
          )}
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default CustomSelect;
