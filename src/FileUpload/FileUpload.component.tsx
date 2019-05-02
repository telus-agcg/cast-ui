import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SFileUploadContainer = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  color: ${(props: Props) => props.theme.fileUpload.color};
`;

const SFileUpload = styled.div`
  border: ${(props: Props) => props.theme.fileUpload.border};
  border-radius: ${(props: Props) => props.theme.fileUpload.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.padding};
`;

export const FileUpload: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SFileUploadContainer {...props}>
        <SFileUpload>File Upload comming up here!</SFileUpload>
      </SFileUploadContainer>
    </ThemeProvider>
  );
};

FileUpload.defaultProps = {
  theme: Themes.defaultTheme,
};
