import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_close as icClose } from 'react-icons-kit/md/ic_close';
import { Themes } from '../themes';
import { ProgressBar } from './ProgressBar.component';

export interface Props {
  /**
   * Provide file
   *
   * @default null
   **/
  file: {
    name: string;
    size: number;
    type?: string;
    lastModified?: number;
    lastModifiedDate?: string;
    info?: any;
  };
  /**
   * File details to be shown when upload is complete
   *
   * @default ''
   **/
  fileDetails?:
    | JSX.Element
    | React.Component
    | React.FunctionComponent
    | string;
  /**
   * Is file upload to server complete?
   *
   * @default true
   * */
  actionable?: boolean;
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

const initialState = {
  dragging: false,
};

type State = Readonly<typeof initialState>;

const SFile = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.fileUpload.fontSize};
  color: ${(props: Props) => props.theme.fileUpload.file.defaultColor};
  background: ${(props: Props) => props.theme.fileUpload.file.background};
  border-radius: ${(props: Props) => props.theme.fileUpload.file.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.file.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.file.padding};
  margin: ${(props: Props) => props.theme.fileUpload.file.margin};
  display: flex;
  align-items: center;
  .file-name {
    width: 40%;
    font-size: 14px;
    text-align: left;
    color: ${(props: Props) =>
      props.uploaded ? props.theme.fileUpload.file.primaryColor : 'inherit'};
    cursor: ${(props: Props) => (props.uploaded ? 'pointer' : 'default')};
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
    color: ${(props: Props) =>
      props.uploaded
        ? props.theme.fileUpload.file.dangerColor
        : props.theme.fileUpload.file.primaryColor};
    > * {
      cursor: pointer;
    }
  }
`;

export class File extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  readonly state: State = initialState;

  static defaultProps = {
    file: {},
    fileDetails: '',
    actionable: true,
    uploaded: false,
    progressBarProps: {},
    onSelect: () => {},
    onCancel: () => {},
    onDelete: () => {},
    theme: Themes.defaultTheme,
  };

  render() {
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
      fileDetails,
      actionable,
      progressBarProps,
      onSelect = noop,
      onCancel = noop,
      onDelete = noop,
      theme,
      ...props
    } = this.props;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SFile {...props}>
          <div
            className="file-name"
            onClick={
              props.uploaded ? (e: any) => onSelect(props.file, e) : noop
            }
          >
            {props.file.name}
          </div>
          <div className="file-size">{humanFileSize(props.file.size, 1)}</div>
          <div className="file-details">
            {!props.uploaded && (
              <ProgressBar
                height={'4px'}
                percentage={0}
                {...progressBarProps}
              />
            )}
            {props.uploaded && fileDetails && <div> {fileDetails} </div>}
          </div>

          {actionable && (
            <div className="file-actions">
              {!props.uploaded && (
                <Icon
                  icon={icClose}
                  onClick={(e: any) => onCancel(props.file, e)}
                />
              )}
              {props.uploaded && (
                <div onClick={(e: any) => onDelete(props.file, e)}>Delete</div>
              )}
            </div>
          )}
        </SFile>
      </ThemeProvider>
    );
  }
}
