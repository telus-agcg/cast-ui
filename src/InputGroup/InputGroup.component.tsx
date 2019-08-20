import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const InputGroupWrapper = styled.div`
  border-radius: ${(props: Props) => props.theme.borders.radius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  color: ${(props: Props) => props.theme.inputGroup.root.color};
  display: ${(props: Props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props: Props) => props.theme.inputGroup.root.flexWrap};
  flex-direction: ${(props: Props) => (props.horizontal ? 'row' : 'column')};
  margin: ${(props: Props) =>
    props.horizontal ? props.theme.inputGroup.root.horizontalMargin : ''};
  > *:not(:first-child) {
    flex-grow: 1;
  }
  > :not(label) {
    width: ${(props: Props) => (props.horizontal ? 'initial' : '100%')};
  }
`;

const SLabel = styled.label`
  background: inherit;
  height: auto;
  padding: ${(props: Props) =>
    props.label ? props.theme.inputGroup.label.padding : '0'};
  font-weight: ${(props: Props) => props.theme.inputGroup.label.fontWeight};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize};
  color: ${(props: Props) => props.theme.body.color};
  width: ${(props: Props) =>
    props.horizontal ? props.theme.inputGroup.label.horizontalWidth : '100%'};
`;

export const InputGroup: React.FunctionComponent<Props> = ({
  inputSize,
  theme,
  children,
  label,
  horizontal,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <InputGroupWrapper horizontal={horizontal} label={label} {...props}>
      <SLabel label={label} inputSize={inputSize} horizontal={horizontal}>
        {label}
      </SLabel>
      {children}
    </InputGroupWrapper>
  </ThemeProvider>
);
InputGroup.defaultProps = {
  inputSize: 'md',
  horizontal: false,
  theme: Themes.defaultTheme,
};
