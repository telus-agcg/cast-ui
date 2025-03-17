import * as React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { getPropsWithDefaults } from "@utils";

export interface Props {
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
    event: React.ChangeEvent<HTMLInputElement>
  ): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SDropZone = styled.div<
  Props & {
    dragging: boolean;
    onDragEnter: any;
    onDragOver: any;
    onDragLeave: any;
    onDrop: any;
  }
>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.fileUpload.fontSize};
  color: ${(props: Props) => props.theme.fileUpload.dropZone.color};
  border: ${(props: any) =>
    props.dragging
      ? props.theme.fileUpload.dropZone.draggingBorder
      : props.theme.fileUpload.dropZone.border};
  border-radius: ${(props: Props) =>
    props.theme.fileUpload.dropZone.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.dropZone.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.dropZone.padding};
  margin: ${(props: Props) => props.theme.fileUpload.dropZone.margin};
  background: ${(props: any) =>
    props.dragging
      ? props.theme.fileUpload.dropZone.draggingBackground
      : props.theme.fileUpload.dropZone.background};
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "default")};
  transition: all 0.2s ease-in-out;
  .fileUploadCTA {
    color: ${(props: Props) => props.theme.fileUpload.dropZone.ctaColor};
    cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props: Props) => (props.disabled ? ".6" : "1")};
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
  info: "",
  disabled: false,
  onFilesAdded: () => {},
} satisfies Partial<Props>;

export const FileUpload = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { disabled, onFilesAdded, info } = propsWithDefaults;

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
    event.target.value = "";
  };

  const onDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    filesAdded(files, event);
  };

  return (
    <SDropZone
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      {...dropZoneProps}
    >
      <div>
        Drop files or{" "}
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
  );
};
