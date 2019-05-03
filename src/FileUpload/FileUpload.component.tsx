import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { ProgressBar } from './ProgressBar.component';

export interface Props {
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
    files: Object[],
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
  background: ${(props: any) =>
    props.dragging
      ? props.theme.fileUpload.dropZone.draggingBackground
      : props.theme.fileUpload.dropZone.background};
  transition: all 0.2s ease-in-out;
  .fileUploadCTA {
    color: ${(props: Props) => props.theme.fileUpload.dropZone.ctaColor};
    cursor: pointer;
    opacity: ${(props: Props) => (props.disabled ? '.6' : '1')};
  }
  input {
    display: none;
  }
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
    theme: Themes.defaultTheme,
    disabled: false,
    onFilesAdded: () => {},
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

  filesAdded(files: Object[], event: any) {
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
    const { onFilesAdded, theme, ...props } = this.props;

    const dropZoneProps = {
      dragging,
      disabled: props.disabled,
    };

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SFileUploadContainer {...props}>
          <SDropZone
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDrop={this.onDrop}
            {...dropZoneProps}
          >
            Drop files or{' '}
            <span className="fileUploadCTA" onClick={this.openFileDialog}>
              Browse
            </span>
            <input
              ref={this.fileInputRef}
              type="file"
              multiple
              onChange={this.onFilesSelected}
            />
          </SDropZone>
          <SDropped>
            Files dropped <ProgressBar percentage={35} />
          </SDropped>
          <SDropped>
            Files dropped <ProgressBar percentage={60} />
          </SDropped>
          <SDropped>
            Files dropped <ProgressBar percentage={80} />
          </SDropped>
        </SFileUploadContainer>
      </ThemeProvider>
    );
  }
}
