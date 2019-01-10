import * as React from 'react';
import * as ReactModal from 'react-modal';
import styled from 'styled-components';

type PropsThemeOnly = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type PropsThemeAndInputSize = PropsThemeOnly & {
  /**
   * Modal Input Size
   *
   * @default 'md'
   **/
  inputSize: string;
};

type Props = PropsThemeAndInputSize & {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Specify if the tab is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
//   /**
//    * Specify if the modal is open
//    *
//    * @default false
//    **/
//   isOpen: boolean;
  /**
   * Any props that should be passed directly to the third-
   * party react-modal control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
};

const SDiv = styled.div`
  background: ${(props: PropsThemeAndInputSize) => props.theme.input.background}
  border: 1px solid ${(props: PropsThemeAndInputSize) => props.theme.input.borderColor};
  border-radius: ${(props: PropsThemeAndInputSize) =>
    props.theme.common[props.inputSize].borderRadius};
  padding: ${(props: PropsThemeAndInputSize) => props.theme.common[props.inputSize].padding}
  font-family: ${(props: PropsThemeAndInputSize) => props.theme.typography.fontFamily};
  font-size: ${(props: PropsThemeAndInputSize) => props.theme.common[props.inputSize].fontSize}
  color: ${(props: PropsThemeAndInputSize) => props.theme.reverseText};
  &:disabled {
    background: ${(props: PropsThemeAndInputSize) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

const initialState = {
  modalIsOpen: false,
};
type State = typeof initialState;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// ReactModal.setAppElement('#yourAppElement');

const ModalContentWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
`;

const ModalHeaderDiv = styled.div`
  flex-shrink: 0;
`;

const ModalBodyDiv = styled.div`
  overflow-y: auto;
  margin-bottom: 10px;
`;

const ModalFooterDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

class CustomModal extends React.Component<Props> {
  state: State = initialState;

  constructor(props: Props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <SDiv
        className="modal-wrapper"
        inputSize={this.props.inputSize}
      >
      <button onClick={this.openModal}>Open Modal</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          role="dialog"
        >
          <ModalContentWrapperDiv>
            <ModalHeaderDiv>
              <h2>Hello</h2>
            </ModalHeaderDiv>
            <ModalBodyDiv>
              <div>I am a modal</div>
              <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
              </form>
            </ModalBodyDiv>
            <ModalFooterDiv>
              <button onClick={this.closeModal}>OK</button>
              <button onClick={this.closeModal}>Cancel</button>
            </ModalFooterDiv>
          </ModalContentWrapperDiv>
        </ReactModal>
      </SDiv>
    );
  }
}

export default CustomModal;
