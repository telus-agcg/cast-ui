import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select, { components, SelectBase } from 'react-select';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import uuid from 'uuid';

const log = (props: any): any => {
  console.log(props);
  return log;
};

export type OptionType = {
  value: string;
  label: string;
};

export interface ControlSpecificProps extends SelectBase<OptionType> {
  children: React.ReactElement;
}

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
   * Select Select Style
   *
   * @default 'primary'
   **/
  selectStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
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
  controlSpecificProps?: ControlSpecificProps;
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
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  .react-select-component > div {
    min-height: unset;
    border-radius: ${(props: Props) =>
      props.borderRadius || props.theme.common[props.selectSize!].borderRadius};
    border-color: ${(props: Props) =>
      props.borderColor ||
      props.theme.styles[props.selectStyle!].borderColor ||
      'inherit'};
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
      props.dropdownColor ||
      props.theme.styles[props.selectStyle!].dropdownColor};
    &:hover {
      color: ${(props: Props) =>
        props.dropdownColor ||
        props.theme.styles[props.selectStyle!].dropdownColor};
    }
  }
  & > div > span {
    color: ${(props: Props) =>
      props.dropdownColor ||
      props.theme.styles[props.selectStyle!].dropdownColor};
  }
`;

const IndicatorsContainer = styled(components.IndicatorsContainer)`
  & > div {
    padding-top: 0;
    padding-bottom: 0;
`;

export class CustomSelect extends React.Component<Props> {
  static defaultProps = {
    selectSize: 'md',
    selectStyle: 'default',
    theme: Themes.defaultTheme,
    invalidText: '',
    invalidTextColor: '',
    id: uuid.v4(),
  };

  render() {
    const {
      options,
      controlSpecificProps,
      invalid,
      selectSize,
      selectStyle,
      theme,
      id,

      disabled,
      selectedOption,
      invalidText,
      invalidTextColor,
      dropdownColor,
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
          selectStyle={selectStyle}
          {...props}
        >
          <SSelect
            components={{
              IndicatorsContainer: p => (
                <SIndicatorWrapper
                  dropdownColor={dropdownColor}
                  selectStyle={selectStyle}
                >
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
