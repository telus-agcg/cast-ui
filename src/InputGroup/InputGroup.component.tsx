import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** the content of the input group  */
  // children?: React.ReactNode[] | Function;
  /** the label of the input group  */
  label: string;
  /**
   * Set Input Size
   *
   * @default 'md'
   **/
  inputSize?: 'sm' | 'md' | 'lg';
  /**
   * Set orientation of inputGroup as horizontal
   *
   * @default false
   **/
  horizontal?: boolean;
  /**
   * Is the field required?
   *
   * @default false
   **/
  required?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const InputGroupWrapper = styled.div<Partial<InputGroupProps>>`
  border-radius: ${(props) => props.theme.borders.radius};
  font-family: ${(props) => props.theme.typography.fontFamily};
  color: ${(props) => props.theme.inputGroup.root.color};
  display: ${(props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props) => props.theme.inputGroup.root.flexWrap};
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  margin: ${(props) =>
    props.horizontal ? props.theme.inputGroup.root.horizontalMargin : ''};
  > *:not(:first-child) {
    flex-grow: 1;
  }
  > :not(label) {
    width: ${(props) => (props.horizontal ? 'initial' : '100%')};
  }
`;

const SLabel = styled.label<InputGroupProps>`
  background: inherit;
  height: auto;
  padding: ${(props) => {
    if (props.label) {
      if (props.horizontal) {
        return '8px 16px 4px 0';
      }
      return '0 0 4px 0';
    }
    return '0';
  }};
  font-weight: ${(props) => props.theme.inputGroup.label.fontWeight};
  font-size: ${(props) => props.theme.common[props.inputSize!].fontSize};
  color: ${(props) => props.theme.body.color};
  width: ${(props) =>
    props.horizontal ? props.theme.inputGroup.label.horizontalWidth : '100%'};
`;

const RequiredLabel = styled.span`
  color: ${(props) => props.theme.colors.danger};
  padding-left: 2px;
`;

const defaultProps = {
  inputSize: 'md',
  horizontal: false,
  required: false,
  theme: Themes.canopyTheme,
} satisfies Partial<InputGroupProps>;

export const InputGroup: React.FunctionComponent<InputGroupProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, horizontal, label, inputSize, required, children, ...rest } =
    propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <InputGroupWrapper horizontal={horizontal} {...rest}>
        <SLabel label={label} inputSize={inputSize} horizontal={horizontal}>
          {required && <RequiredLabel>*</RequiredLabel>} {label}
        </SLabel>
        {children}
      </InputGroupWrapper>
    </ThemeProvider>
  );
};
