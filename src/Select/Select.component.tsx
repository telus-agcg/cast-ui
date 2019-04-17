import * as React from 'react';
import ErrorMessage from '../ErrorMessage';
import Select from 'react-select';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
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
  id: string;
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
  controlSpecificProps?: any;
};

const SDiv = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  .react-select-component > div {
    border-color: ${(props: any) =>
      props.invalid && props.theme.validation.borderColor};
  }
`;

const SSelect = styled(Select)`
  border-radius: ${(props: Props) =>
    props.theme.common[props.selectSize!].borderRadius};
  &:disabled {
    background: ${(props: Props) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

export class CustomSelect extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    selectSize: 'md',
    theme: Themes.defaultTheme,
    invalidText: '',
    invalidTextColor: '',
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
            className="react-select-component"
            isDisabled={disabled}
            value={selectedOption}
            options={options}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
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
