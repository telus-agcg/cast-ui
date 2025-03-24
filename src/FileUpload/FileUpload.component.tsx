import * as React from 'react';
import { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export interface FileUploadProps {
  /**
   * Add info
   *
   * @default ''
   **/
  info?: React.JSX.Element | React.Component | React.FunctionComponent | string;
  /**
   * Disable the dropzone
   *
   * @default false
   * */
  disabled?: boolean;
  /**
   * Callback emitted after files have been added
   *
   * @default void
   * */
  onFilesAdded?(
    files: File[],
    event: React.ChangeEvent<HTMLInputElement>,
  ): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SDropZone = styled.div<
  FileUploadProps & {
    dragging: boolean;
    onDragEnter: any;
    onDragOver: any;
    onDragLeave: any;
    onDrop: any;
  }
>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.fileUpload.fontSize};
  color: ${(props) => props.theme.fileUpload.dropZone.color};
  border: ${(props: any) =>
    props.dragging
      ? props.theme.fileUpload.dropZone.draggingBorder
      : props.theme.fileUpload.dropZone.border};
  border-radius: ${(props) => props.theme.fileUpload.dropZone.borderRadius};
  text-align: ${(props) => props.theme.fileUpload.dropZone.textAlign};
  padding: ${(props) => props.theme.fileUpload.dropZone.padding};
  margin: ${(props) => props.theme.fileUpload.dropZone.margin};
  background: ${(props: any) =>
    props.dragging
      ? props.theme.fileUpload.dropZone.draggingBackground
      : props.theme.fileUpload.dropZone.background};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.2s ease-in-out;
  .fileUploadCTA {
    color: ${(props) => props.theme.fileUpload.dropZone.ctaColor};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? '.6' : '1')};
  }
  input {
    display: none;
  }
  .info {
    padding: 4px 0 0;
    font-size: 12px;
    font-style: italic;
  }
`;

const defaultProps = {
  info: '',
  disabled: false,
  onFilesAdded: () => {},
} satisfies Partial<FileUploadProps>;

export const FileUpload = (props: FileUploadProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { theme, disabled, onFilesAdded, info } = propsWithDefaults;

  const dropZoneProps = {
    dragging,
    ...propsWithDefaults,
  };

  const openFileDialog = () => {
    if (disabled) return;
    if (fileInputRef !== null) {
      if (fileInputRef.current !== null) {
        fileInputRef.current.click();
      }
    }
  };

  const onDragOver = (evt: InputEvent) => {
    evt.preventDefault();

    if (disabled) return;

    setDragging(true);
  };

  const onDragLeave = () => {
    setDragging(false);
  };

  const onDragEnter = (evt: InputEvent) => {
    evt.preventDefault();
  };

  const fileListToArray = (list: any) => {
    const array: any = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  };

  const filesAdded = (files: File[], event: any) => {
    if (disabled) return;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array, event);
    }
    setDragging(false);
  };

  const onFilesSelected = (event: any) => {
    event.preventDefault();
    const files = event.target.files;
    filesAdded(files, event);
    // clear input to allow adding file again
    event.target.value = '';
  };

  const onDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    filesAdded(files, event);
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDropZone
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        {...dropZoneProps}
      >
        <div>
          Drop files or{' '}
          <span className="fileUploadCTA" onClick={openFileDialog}>
            Browse
          </span>
        </div>
        {info && <div className="info">{info as React.ReactNode}</div>}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={onFilesSelected}
        />
      </SDropZone>
    </ThemeProvider>
  );
};
