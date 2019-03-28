import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /** the content of the input group  */
  // children?: React.ReactNode[] | Function;
  /** the label of the input group  */
  label?: string;
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  inputSize: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const InputGroupWrapper = styled.div`
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  display: ${(props: Props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props: Props) => props.theme.inputGroup.root.flexWrap};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;
const SLabel = styled.label`
  background: white;
  overflow: hidden;
  height: auto;
  padding: ${(props: Props) => props.theme.label.padding};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize};
`;

export const InputGroup: React.FunctionComponent<Props> = ({
  inputSize,
  label,
  theme,
  children,
  ...props
}) => (
  <InputGroupWrapper inputSize={inputSize} theme={theme} {...props}>
    <SLabel inputSize={inputSize} theme={theme}>
      {label}
    </SLabel>
    {children}
  </InputGroupWrapper>
);
InputGroup.defaultProps = {
  inputSize: 'md',
  label: '',
  theme: Themes.defaultTheme,
};
