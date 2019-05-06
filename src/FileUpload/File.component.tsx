import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_close as icClose } from 'react-icons-kit/md/ic_close';
import { Themes } from '../themes';
import { ProgressBar } from './ProgressBar.component';

export interface Props {
  /**
   * Provide file
   *
   * @default null
   **/
  file?: File;
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
  color: ${(props: Props) => props.theme.fileUpload.dropped.color};
  background: ${(props: Props) => props.theme.fileUpload.dropped.background};
  border-radius: ${(props: Props) =>
    props.theme.fileUpload.dropped.borderRadius};
  text-align: ${(props: Props) => props.theme.fileUpload.dropped.textAlign};
  padding: ${(props: Props) => props.theme.fileUpload.dropped.padding};
  margin: ${(props: Props) => props.theme.fileUpload.dropped.margin};
  display: flex;
  align-items: center;
  .file-name {
    width: 40%;
    font-size: 14px;
    text-align: left;
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
    uploaded: false,
    progressBarProps: {},
    theme: Themes.defaultTheme,
  };

  render() {
    const { progressBarProps, theme, ...props } = this.props;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SFile {...props}>
          <div className="file-name">Files dropped</div>
          <div className="file-size">100MB</div>
          <div className="file-details">
            <ProgressBar height={'4px'} percentage={80} {...progressBarProps} />
          </div>
          <div className="file-actions">
            <Icon icon={icClose} />
          </div>
        </SFile>
      </ThemeProvider>
    );
  }
}
