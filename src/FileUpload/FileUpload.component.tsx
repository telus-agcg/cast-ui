import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

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
  onFilesAdded?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const initialState = {};

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
  }
  readonly state: State = initialState;

  static defaultProps = {
    theme: Themes.defaultTheme,
    disabled: false,
  };

  openFileDialog() {
    if (this.props.disabled) return;
    if (this.fileInputRef !== null)
      if (this.fileInputRef.current !== null) this.fileInputRef.current.click();
  }
  render() {
    const { onFilesAdded = () => {}, theme, ...props } = this.props;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SFileUploadContainer {...props}>
          <SDropZone>
            Drop files or{' '}
            <span className="fileUploadCTA" onClick={this.openFileDialog}>
              Browse
            </span>
            <input
              ref={this.fileInputRef}
              type="file"
              multiple
              onChange={onFilesAdded}
            />
          </SDropZone>
          <SDropped>Files dropped</SDropped>
          <SDropped>Files dropped</SDropped>
          <SDropped>Files dropped</SDropped>
        </SFileUploadContainer>
      </ThemeProvider>
    );
  }
}
