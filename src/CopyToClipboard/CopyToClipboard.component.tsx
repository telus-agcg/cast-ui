import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_check as icCheck } from 'react-icons-kit/md/ic_check';

type Props = {
  /**
   * Set the className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Text to be copied
   *
   * @default ''
   **/
  copyContent: JSX.Element | React.Component | string;
  /**
   * Assign class to the container enclosing the text to be copied
   *
   * @default 'copy-container'
   **/
  copyContainerClass?: string;
  /**
   * Set container background color. A css color code or a color defined in theme colors
   *
   * @default 'lightBackground'
   **/
  background?: string;
  /**
   * Include the copy-text button
   *
   * @default true
   **/
  includeCopyButton?: boolean;
  /**
   * Content to be used in the button
   *
   * @default 'COPY'
   **/
  copyButtonContent?: JSX.Element | React.Component | string;
  /**
   * Success content to be used in the button
   *
   * @default '<Icon size={ 18 } icon={ icCheck } /> COPIED'
   **/
  copyButtonSuccessContent?: JSX.Element | React.Component | string;
  /**
   * Assign class to the copy button
   *
   * @default 'copy-button'
   **/
  copyButtonClass?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SCopyToClipboard = styled.div`
  width: auto;
  height: auto;
  position: relative;
  display: flex;
  padding: ${(props: Props) => props.theme.copyToClipboard.padding};
  background-color: ${(props: Props) =>
    props.theme.colors[props.background!] || props.background!.toString()};
  font-family: ${(props: Props) => props.theme.copyToClipboard.fontFamily};
  font-size: ${(props: Props) => props.theme.copyToClipboard.fontSize};
  color: ${(props: Props) => props.theme.copyToClipboard.color};

  .copy-container {
    flex-grow: 1;
    white-space: pre;
    unicode-bidi: embed;
    overflow: visible;
    word-break: break-all;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    white-space: pre;
    white-space: pre\9; /* IE7+ */
  }
  .copy-button {
    flex-grow: 0;
    cursor: pointer;
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    font-weight: ${(props: Props) =>
      props.theme.copyToClipboard.button.fontWeight};
    height: ${(props: Props) => props.theme.copyToClipboard.button.height};
    text-transform: ${(props: Props) =>
      props.theme.copyToClipboard.button.textTransform};
    color: ${(props: any) =>
      props.theme.copyToClipboard.button[`${props.buttonColor}Color`]};
    border: none;
    background: none;
    outline: none;
    border-radius: ${(props: Props) => props.theme.borders.radius};
    &:hover {
      color: white;
      background-color: ${(props: any) =>
        props.theme.copyToClipboard.button[`${props.buttonColor}Color`]};
    }
  }
`;

const initialState = {
  copied: false,
};
type State = Readonly<typeof initialState>;
export class CopyToClipboard extends React.Component<Props> {
  private copyContainerRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    this.unescapeHTML = this.unescapeHTML.bind(this);
    this.copySuccessful = this.copySuccessful.bind(this);
  }

  readonly state: State = initialState;

  static copyToClipboard(e: any, cb: Function) {
    const newCopyText: string = e.target
      ? e.target.innerText
      : e.innerText || e;
    const textField = document.createElement('textarea');
    textField.innerText = newCopyText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    return cb() || null;
  }
  public unescapeHTML(html: any) {
    const escapeEl = document.createElement('textarea');
    escapeEl.innerHTML = html;
    return escapeEl.textContent;
  }
  public copySuccessful() {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  }
  render() {
    const SuccessContent = () => (
      <span>
        <Icon size={18} icon={icCheck} />
        copied
      </span>
    );
    const {
      copyContent = '',
      copyContainerClass = '',
      background = 'disabledBackground',
      includeCopyButton = true,
      copyButtonContent = 'copy',
      copyButtonSuccessContent = <SuccessContent />,
      copyButtonClass = '',
      theme,
    } = this.props;
    const { copied } = this.state;
    return (
      <SCopyToClipboard
        buttonColor={copied ? 'success' : 'primary'}
        background={background}
        theme={theme}>
        <div
          ref={this.copyContainerRef}
          onClick={() =>
            CopyToClipboard.copyToClipboard(
              this.copyContainerRef.current,
              this.copySuccessful,
            )
          }
          className={`copy-container ${copyContainerClass}`}>
          {this.unescapeHTML(copyContent)}
        </div>
        {includeCopyButton && (
          <button
            onClick={() =>
              CopyToClipboard.copyToClipboard(
                this.copyContainerRef.current,
                this.copySuccessful,
              )
            }
            type="button"
            className={`copy-button ${copyButtonClass}`}>
            {!copied && copyButtonContent}
            {copied && copyButtonSuccessContent}
          </button>
        )}
      </SCopyToClipboard>
    );
  }
}
