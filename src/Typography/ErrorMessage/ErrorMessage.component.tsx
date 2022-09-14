import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes/index';

export interface Props {
  /**
   * The ID of error message
   *
   * @default null
   **/
  id: string;
  /**
   * Message to be displayed
   *
   * @default ''
   */
  message: string;
  /**
   * Text color
   *
   * @default ''
   * @deprecated
   */
  textColor?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SErrorDiv = styled.div`
  position: absolute;
  color: ${(props: Props) => props.textColor || props.theme.validation.color};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.validation.fontSize};
  font-style: ${(props: Props) => props.theme.validation.fontStyle};
  line-height: ${(props: Props) => props.theme.validation.lineHeight};
  padding: ${(props: Props) => props.theme.validation.padding};
  bottom: ${(props: Props) =>
    props.theme.validation.errorMessageBottomPosition};
`;

export const ErrorMessage: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...inputProps
}) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SErrorDiv {...inputProps}>{inputProps.message}</SErrorDiv>
      </>
    </ThemeProvider>
  );
};

ErrorMessage.defaultProps = {
  theme: Themes.defaultTheme,
};
