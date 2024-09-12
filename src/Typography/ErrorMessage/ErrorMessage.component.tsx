import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes/index';
import Icon from 'react-icons-kit';
import { ic_error as icError } from 'react-icons-kit/md/ic_error';

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
  color: ${(props: Props) => props.textColor || props.theme.validation.color};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.validation.fontSize};
  font-style: ${(props: Props) => props.theme.validation.fontStyle};
  line-height: ${(props: Props) => props.theme.validation.lineHeight};
  padding: ${(props: Props) => props.theme.validation.padding};
  margin-top: ${(props: Props) => props.theme.validation.marginTop};
`;

const SErrorIcon = styled(Icon)`
  color: ${(props: any) => props.theme.colors.danger};
  padding-right: 4px;
`;
const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorMessage: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...inputProps
}) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SErrorDiv {...inputProps}>
          <ErrorWrapper>
            <SErrorIcon size={14} icon={icError} />
            {inputProps.message}
          </ErrorWrapper>
        </SErrorDiv>
      </>
    </ThemeProvider>
  );
};

ErrorMessage.defaultProps = {
  theme: Themes.canopyTheme,
};
