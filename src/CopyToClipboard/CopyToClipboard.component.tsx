import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Text to be copied
   *
   * @default ''
   **/
  copyText: string;
  /**
   * Assign class to the container enclosing the text to be copied
   *
   * @default 'copy-container'
   **/
  copyContainerClass?: string;
  /**
   * Select container background color. Must be a color defined in theme colors
   *
   * @default 'disabledBackground'
   **/
  background: string;
  /**
   * Include the copy-text button
   *
   * @default true
   **/
  includeCopyButton?: boolean;
  /**
   * Label to be used on the button
   *
   * @default 'copy'
   **/
  copyButtonText?: string;
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
  padding: 16px;
  background-color: ${(props: Props) => props.theme.colors[props.background]};

  .copy-container {
    flex-grow: 1;
  }
  .copy-button {
    flex-grow: 0;
    cursor: pointer;
    height: 25px;
  }
`;

export class CopyToClipboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  private copyContainerRef = React.createRef<HTMLDivElement>();

  static copyToClipboard(e: any) {
    const newCopyText: string = e.innerText
      ? e.innerText || e.target.innerText
      : e;
    const textField = document.createElement('textarea');
    textField.innerText = newCopyText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  render() {
    const {
      copyText = '',
      copyContainerClass = '',
      background = 'disabledBackground',
      includeCopyButton = true,
      copyButtonText = 'copy',
      copyButtonClass = '',
      theme,
    } = this.props;
    return (
      <SCopyToClipboard
        copyText={copyText}
        copyContainerClass={copyContainerClass}
        background={background}
        includeCopyButton={includeCopyButton}
        copyButtonText={copyButtonText}
        copyButtonClass={copyButtonClass}
        theme={theme}>
        <div
          ref={this.copyContainerRef}
          onClick={() =>
            CopyToClipboard.copyToClipboard(this.copyContainerRef.current)
          }
          className={`copy-container ${copyContainerClass}`}>
          {copyText}
        </div>
        {includeCopyButton && (
          <button
            onClick={() => CopyToClipboard.copyToClipboard('Custom copy text')}
            type="button"
            className={`copy-button ${copyButtonClass}`}>
            {copyButtonText}
          </button>
        )}
      </SCopyToClipboard>
    );
  }
}
