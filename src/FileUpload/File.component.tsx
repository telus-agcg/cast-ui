import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { CloseIcon } from '@icons';
import { ProgressBar } from './ProgressBar.component';
import { Themes } from '@themes';

export interface File {
  name: string;
  size: number;
  type?: string;
  lastModified?: number;
  lastModifiedDate?: string;
  info?: any;
}

export interface FileProps {
  /**
   * Provide file
   *
   * @default null
   **/
  file: File;
  /**
   * File details to be shown when upload is complete
   *
   * @default ''
   **/
  fileDetails?:
    | React.JSX.Element
    | React.Component
    | React.FunctionComponent
    | string;
  /**
   * Is file upload to server complete?
   *
   * @default true
   * */
  canDelete?: boolean;
  /**
   * Override default options for the Progress Bars.
   * See Cast-UI's ProgressBar for options list.
   *
   * @default null
   **/
  progressBarProps?: Object;
  /**
   * Is file upload to server complete?
   *
   * @default false
   * */
  uploaded?: boolean;
  /**
   * Callback returned when file is selected
   *
   * @default void
   * */
  onSelect?(file: any, e: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback returned on cancel file upload
   *
   * @default void
   * */
  onCancel?(file: any, e: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback returned on delete file
   *
   * @default void
   * */
  onDelete?(file: any, e: React.MouseEvent<HTMLElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SFile = styled.div<FileProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.fileUpload.fontSize};
  color: ${(props) => props.theme.fileUpload.file.defaultColor};
  background: ${(props) => props.theme.fileUpload.file.background};
  border-radius: ${(props) => props.theme.fileUpload.file.borderRadius};
  text-align: ${(props) => props.theme.fileUpload.file.textAlign};
  padding: ${(props) => props.theme.fileUpload.file.padding};
  margin: ${(props) => props.theme.fileUpload.file.margin};
  display: flex;
  align-items: center;
  .file-name {
    width: 40%;
    font-size: 14px;
    text-align: left;
    color: ${(props) =>
      props.uploaded ? props.theme.fileUpload.file.primaryColor : 'inherit'};
    cursor: ${(props) => (props.uploaded ? 'pointer' : 'default')};
    overflow: hidden;
  }
  .file-size {
    width: 10%;
    font-size: 12px;
    text-align: right;
  }
  .file-details {
    width: 40%;
    font-size: 12px;
    text-align: left;
    margin-left: 32px;
  }
  .file-actions {
    width: 10%;
    font-size: 13px;
    text-align: right;
    padding: 0 4px;
    color: ${(props) =>
      props.uploaded
        ? props.theme.fileUpload.file.dangerColor
        : props.theme.fileUpload.file.primaryColor};
    > * {
      cursor: pointer;
    }
  }
`;

const defaultProps = {
  file: {} as File,
  fileDetails: '',
  canDelete: true,
  uploaded: false,
  progressBarProps: {},
  onSelect: () => {},
  onCancel: () => {},
  onDelete: () => {},
  theme: Themes.canopyTheme,
} satisfies Partial<FileProps>;

export const File = (props: FileProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);

  const humanFileSize = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const noop = () => {};

  const {
    theme,
    fileDetails,
    canDelete,
    progressBarProps,
    onSelect = noop,
    onCancel = noop,
    onDelete = noop,
    file,
    uploaded,
    ...rest
  } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SFile file={file} {...rest}>
        <div
          className="file-name"
          onClick={uploaded ? (e: any) => onSelect(props.file, e) : noop}
        >
          {file.name}
        </div>
        <div className="file-size">{humanFileSize(file.size, 1)}</div>
        <div className="file-details">
          {!uploaded && (
            <ProgressBar height={'4px'} percentage={0} {...progressBarProps} />
          )}
          {uploaded && fileDetails && (
            <div> {fileDetails as React.ReactNode} </div>
          )}
        </div>

        {canDelete && (
          <div className="file-actions">
            {!uploaded && (
              <CloseIcon onClick={(e: any) => onCancel(props.file, e)} />
            )}
            {uploaded && (
              <div onClick={(e: any) => onDelete(props.file, e)}>Delete</div>
            )}
          </div>
        )}
      </SFile>
    </ThemeProvider>
  );
};
