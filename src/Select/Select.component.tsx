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

interface AnotherProps {
  /**
   * foooooooooooooooo
   *
   * @default '';
   */
  foo?: string;
  /**
   * bar
   *
   * @default '';
   */
  bar?: string;
}

// export interface ControlSpecificProps extends SelectBase<OptionType> {
//   blockOptionHover: boolean;
//   clearFocusValueOnUpdate: boolean;
//   commonProps: any;
//   // components: SelectComponents<OptionType>;
//   hasGroups: boolean;
//   initialTouchX: number;
//   initialTouchY: number;
//   inputIsHiddenAfterUpdate: boolean | null;
//   instancePrefix: string;
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
// }

export interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    AnotherProps {
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
   * Specify if the tab is disabled
   *
   * @default false
   **/
  disabled?: boolean;
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
  selectedOption?: string;
  /**
   * Any props that should be passed directly to the third-
   * party react-select control.
   *
   * @default null
   **/
  controlSpecificProps?: {
    blockOptionHover: boolean;
    clearFocusValueOnUpdate: boolean;
    commonProps: any;
    // components: SelectComponents<OptionType>;
    hasGroups: boolean;
    initialTouchX: number;
    initialTouchY: number;
    inputIsHiddenAfterUpdate: boolean | null;
    instancePrefix: string;
    openAfterFocus: boolean;
    scrollToFocusedOptionOnUpdate: boolean;
    userIsDragging: boolean | null;
    controlRef: React.Ref<any>;
    getControlRef: (ref: HTMLElement) => void;
    focusedOptionRef: React.Ref<any>;
    getFocusedOptionRef: (ref: HTMLElement) => void;
    menuListRef: React.Ref<any>;
    getMenuListRef: (ref: HTMLElement) => void;
    inputRef: React.Ref<any>;
    getInputRef: (ref: HTMLElement) => void;
    // cacheComponents: (components: SelectComponents<OptionType>) => void;
    onMenuOpen(): void;
    onMenuClose(): void;
    // onInputChange(newValue: string, actionMeta: InputActionMeta): void;
    focusInput(): void;
    blurInput(): void;
    focus(): void;
    blur(): void;
    openMenu(focusOption: 'first' | 'last'): void;
    focusValue(direction: 'previous' | 'next'): void;
    // focusOption(direction: FocusDirection): void;
    // setValue: (
    //   newValue: ValueType<OptionType>,
    //   action: ActionTypes,
    //   option?: OptionType
    // ) => void;
    selectOption: (newValue: OptionType) => void;
    removeValue: (removedValue: OptionType) => void;
    clearValue: () => void;
    popValue: () => void;
    children: React.ReactElement;
  };
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
   * @default '''
   */
  optionBackgroundColor?: string;
  /**
   * option's hover color representation
   *
   * @default '''
   */
  hoverOptionBackgroundColor?: string;
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  .react-select-component > div {
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
  &:disabled {
    background: ${(props: Props) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
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
    invalidTextColor: '',
    id: uuid.v4(),
    option: {},
    optionBackgroundColor: '',
    hoverOptionBackgroundColor: '',
  };

  render() {
    const {
      options,
      controlSpecificProps,
      invalid,
      selectSize,
      theme,
      id,

      disabled,
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
          {...props}
        >
          <SSelect
            components={{
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
            closeMenuOnSelect={false}
            className="react-select-component"
            isDisabled={disabled}
            value={selectedOption}
            options={options}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
            dropdownColor={dropdownColor}
            {...props}
            {...controlSpecificProps}
            menuIsOpen
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
