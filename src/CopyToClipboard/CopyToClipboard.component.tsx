import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {
  /**
   * Select container background color. Must be a color defined in theme colors
   *
   * @default 'disabledBackground'
   **/
  background: string;
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
    const { background = 'disabledBackground', theme } = this.props;
    return (
      <SCopyToClipboard background={background} theme={theme}>
        <div ref="copyContainer" className="copy-container">
          Sample Text for the copyContainer
        </div>
        <button
          onClick={this.copyToClipboard}
          type="button"
          className="copy-button">
          Click Button
        </button>
      </SCopyToClipboard>
    );
  }
}
