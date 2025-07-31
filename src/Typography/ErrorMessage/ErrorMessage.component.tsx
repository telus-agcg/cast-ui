import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '@themes';
import { FilledErrorIcon } from '@icons';

export interface ErrorMessageProps {
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

const SErrorDiv = styled.div<ErrorMessageProps>`
  color: ${(props) => props.theme.validation.color};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.validation.fontSize};
  font-style: ${(props) => props.theme.validation.fontStyle};
  line-height: ${(props) => props.theme.validation.lineHeight};
  padding: ${(props) => props.theme.validation.padding};
  margin-top: ${(props) => props.theme.validation.marginTop};
`;

const SErrorIcon = styled(FilledErrorIcon)`
  color: ${(props: any) => props.theme.colors.danger};
  padding-right: 4px;
  flex-shrink: 0;
`;

const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<ErrorMessageProps>;

export const ErrorMessage: React.FunctionComponent<
  React.PropsWithChildren<ErrorMessageProps>
> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, message, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SErrorDiv {...propsWithDefaults}>
        <ErrorMessageWrapper>
          <SErrorIcon height={18} width={18} {...rest} />
          {message}
        </ErrorMessageWrapper>
      </SErrorDiv>
    </ThemeProvider>
  );
};
