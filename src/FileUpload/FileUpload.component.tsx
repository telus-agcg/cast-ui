import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

export const FileUpload: React.FunctionComponent<Props> = ({
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <div {...props}>File Upload comming up here!</div>
    </ThemeProvider>
  );
};

FileUpload.defaultProps = {
  theme: Themes.defaultTheme,
};
