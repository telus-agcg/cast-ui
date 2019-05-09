import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props {
  /**
   * Add info
   *
   * @default ''
   **/
  info?: JSX.Element | React.Component | React.FunctionComponent | string;
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

const initialState = {
  dragging: false,
};

type State = Readonly<typeof initialState>;

const SDropZone = styled.div`
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
  cursor: ${(props: Props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.2s ease-in-out;
  .fileUploadCTA {
    color: ${(props: Props) => props.theme.fileUpload.dropZone.ctaColor};
    cursor: ${(props: Props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props: Props) => (props.disabled ? '.6' : '1')};
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

export class FileUpload extends React.Component<Props, State> {
  private fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);

    this.fileInputRef = React.createRef();
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesSelected = this.onFilesSelected.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  readonly state: State = initialState;

  static defaultProps = {
    info: '',
    progressBarProps: {},
    disabled: false,
    onFilesAdded: () => {},
    theme: Themes.defaultTheme,
  };

  openFileDialog() {
    if (this.props.disabled) return;
    if (this.fileInputRef !== null) {
      if (this.fileInputRef.current !== null) {
        this.fileInputRef.current.click();
      }
    }
  }

  onDragOver(evt: any) {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ dragging: true });
  }

  onDragLeave() {
    this.setState({ dragging: false });
  }

  fileListToArray(list: any) {
    const array: any = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  }

  onFilesSelected(event: any) {
    event.preventDefault();
    const files = event.target.files;
    this.filesAdded(files, event);
  }

  onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.filesAdded(files, event);
  }

  filesAdded(files: File[], event: any) {
    const { disabled, onFilesAdded } = this.props;

    if (disabled) return;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array, event);
    }
    this.setState({ dragging: false });
  }

  render() {
    const { dragging } = this.state;
    const { info, onFilesAdded, theme, ...props } = this.props;

    const dropZoneProps = {
      dragging,
      ...props,
    };

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDropZone
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
          {...dropZoneProps}
        >
          <div>
            Drop files or{' '}
            <span className="fileUploadCTA" onClick={this.openFileDialog}>
              Browse
            </span>
          </div>
          {info && <div className="info">{info}</div>}
          <input
            ref={this.fileInputRef}
            type="file"
            multiple
            onChange={this.onFilesSelected}
          />
        </SDropZone>
      </ThemeProvider>
    );
  }
}
