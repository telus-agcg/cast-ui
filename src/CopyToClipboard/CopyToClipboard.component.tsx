import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {
  /**
   * Text to be copied
   *
   * @default ''
   **/
  copyText: string;
  /**
   * Select container background color. Must be a color defined in theme colors
   *
   * @default 'disabledBackground'
   **/
  background: string;
  /**
   * Include the copy-text button
   *
   * @default false
   **/
  includeButton?: boolean;
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
  }
`;

export class CopyToClipboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.copyToClipboard = this.copyToClipboard.bind(this);
  }
  public refs: {
    copyContainer: HTMLDivElement;
  };

  copyToClipboard(e: any) {
    const copyContainerNode: any = ReactDOM.findDOMNode(
      this.refs.copyContainer,
    );
    const textField = document.createElement('textarea');
    textField.innerText = copyContainerNode.innerText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  render() {
    const {
      copyText = '',
      background = 'disabledBackground',
      includeButton = false,
      theme,
    } = this.props;
    return (
      <SCopyToClipboard
        background={background}
        copyText={copyText}
        theme={theme}>
        <div
          ref="copyContainer"
          onClick={this.copyToClipboard}
          className="copy-container">
          {copyText}
        </div>
        {includeButton && (
          <button
            onClick={this.copyToClipboard}
            type="button"
            className="copy-button">
            Click Button
          </button>
        )}
      </SCopyToClipboard>
    );
  }
}
