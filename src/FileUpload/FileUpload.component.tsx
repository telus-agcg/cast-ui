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
  font-size: ${(props: Props) => props.theme.fileUpload.fontSize};
`;

const SDropZone = styled.div`
  color: ${(props: Props) => props.theme.fileUpload.dropZone.color};
  border: ${(props: Props) => props.theme.fileUpload.dropZone.border};
  border-radius: ${(props: Props) =>
    props.theme.fileUpload.dropZone.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.dropZone.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.dropZone.padding};
`;

const SDropped = styled.div`
  color: ${(props: Props) => props.theme.fileUpload.dropped.color};
  background: ${(props: Props) => props.theme.fileUpload.dropped.background};
  border-radius: ${(props: Props) =>
    props.theme.fileUpload.dropped.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.dropped.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.dropped.padding};
  margin: ${(props: Props) => props.theme.fileUpload.dropped.margin};
`;

export const FileUpload: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SFileUploadContainer {...props}>
        <SDropZone>Drop files or Browse</SDropZone>
        <SDropped>Files dropped</SDropped>
        <SDropped>Files dropped</SDropped>
        <SDropped>Files dropped</SDropped>
      </SFileUploadContainer>
    </ThemeProvider>
  );
};

FileUpload.defaultProps = {
  theme: Themes.defaultTheme,
};
