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
  color: ${(props: Props) => props.textColor || props.theme.validation.color};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.validation.fontSize};
  font-style: ${(props: Props) => props.theme.validation.fontStyle};
  padding: ${(props: Props) => props.theme.validation.padding};
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
