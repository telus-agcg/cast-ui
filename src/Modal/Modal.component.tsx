import * as React from 'react';
import * as ReactModal from 'react-modal';
import styled from 'styled-components';
import { Button } from '../Button/Button.component';
import SButton from '../Button/SButton';

export type Props = ReactModal.Props & {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Specify if the modal is open
   *
   * @default false
   **/
  isOpen: boolean;
  /**
   * Specify the type of action buttons or Component in the modal footer
   *
   * @default null
   **/
  footerContent: any;
  /**
   * Specify the title of the modal
   *
   * @default null
   **/
  modalTitle: string;
  /**
   * Specify the function to execute when the user clicks Cancel or No.
   * The handler should care of closing the modal, e.g. changing the `isOpen` prop.
   *
   * @default null
   **/
  onCancelOrNo?: any;
  /**
   * Specify the function to execute when the user clicks OK or Yes.
   * The handler should care of closing the modal, e.g. changing the `isOpen` prop.
   *
   * @default null
   **/
  onOkOrYes?: any;
  /**
   * Any props that should be passed directly to the third-
   * party react-modal control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
  /**
   * Select Modal Size
   *
   * @default 'md'
   **/
  modalSize?: string;
};

const castStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
  },
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -40%)',
    backgroundColor: '#F9F9F9',
    border: '',
    height: 'auto',
    lineHeight: '20px',
    position:'absolute',
    boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
    minWidth: '300px',
    maxWidth: '80%',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
    padding: '0',
    textAlign: 'left',
    fontSize: '14px',
    borderRadius: '1px',
  },
};

const SReactModal = styled(ReactModal)`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  color: ${(props: any) => props.theme.reverseText};
  max-width: ${(props: Props) => props.theme.modal[props.modalSize || 'md'].maxWidth};
  &:disabled {
    background: ${(props: any) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

const ModalHeaderDiv = styled.div`
  min-height: ${(props: any) => props.theme.modal.header.minHeight};
  background-color: ${(props: any) => props.theme.modal.header.backgroundColor};
  border-bottom: ${(props: any) => `1px solid ${props.theme.modal.header.borderColor}`};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  padding: ${(props: any) => props.theme.modal.header.padding};
  h5{
    font-size: ${(props: any) => props.theme.modal.header.fontSize};
    padding: 0;
    margin: 0;
  }
  button{
    padding: 1rem 1rem;
    margin: -2.7rem -1rem -1rem auto;
    float: right;
    font-weight: 300;
    font-size: 30px;
    line-height: 1;
    color: ${(props: any) => props.theme.colors.blue};
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;

const ModalBodyDiv = styled.div`
  padding: ${(props: any) => props.theme.modal.body.padding};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  position: relative;
`;

const ModalFooterDiv = styled.div`
  padding: ${(props: any) => props.theme.modal.footer.padding};
  min-height: ${(props: any) => props.theme.modal.footer.minHeight};
  margin-top: ${(props: any) => props.theme.modal.footer.marginTop};
  text-align: ${(props: any) => props.theme.modal.footer.textAlign};
  background-color: ${(props: any) => props.theme.modal.footer.backgroundColor};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  border-top: ${(props: any) => `1px solid ${props.theme.modal.footer.borderColor}`};
  ${SButton} + ${SButton} {
    margin-left: ${(props: any) => props.theme.modal.footer.buttonSpacing};
  }
`;

/* tslint:disable:max-line-length */
const CloseButton = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
  padding: 0;
  margin: 0;
  line-height: 20px;
  cursor: pointer;
  // tslint:disable-next-line:max-line-length
  background: transparent
    url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgVHJlbmQgTWljcm8gU3R5bGUgUG9ydGFsIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8dGl0bGU+Y2xvc2U8L3RpdGxlPg0KICA8cGF0aCBmaWxsPSJyZ2IoMzQsMzQsMzQpIiBkPSJNMTUgMmwtMS0xLTYgNi02LTYtMC45OSAwLjk5IDUuOTkgNi4wMTAtNiA2IDEgMSA2LTYgNiA2IDEtMS02LTYgNi02eiI+PC9wYXRoPg0KPC9zdmc+);
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 16px;
  height: 16px;
  opacity: 0.5;
`;

type State = {
  modalIsOpen: boolean,
};

export class Modal extends React.Component<Props> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      modalIsOpen: props.isOpen,
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal(fn: any) {
    if (fn !== null && fn !== undefined) {
      fn();
    }else {
      this.setState({ modalIsOpen: false });
    }
  }

  renderFooter(footerContent: any) {
    if (typeof footerContent === 'function') {
      return footerContent();
    }
    if (typeof footerContent === 'object') {
      return footerContent;
    }

    switch (footerContent) {
      case 'OkOnly':
        return (
          <>
            <Button
              btnSize="md"
              btnStyle="primary"
              onClick={() => this.closeModal(this.props.onOkOrYes)}
            >
              OK
            </Button>
          </>
        );
      case 'YesNo':
        return (
          <>
            <Button
              btnSize="md"
              btnStyle="primary"
              onClick={() => this.closeModal(this.props.onOkOrYes)}
            >
              Yes
            </Button>
            <Button
              btnSize="md"
              btnStyle="default"
              onClick={() => this.closeModal(this.props.onCancelOrNo)}
            >
              No
            </Button>
          </>
        );
      case 'OkCancel':
        return (
          <>
            <Button
              btnSize="md"
              btnStyle="primary"
              onClick={() => this.closeModal(this.props.onOkOrYes)}
            >
              OK
            </Button>
            <Button
              btnSize="md"
              btnStyle="default"
              onClick={() => this.closeModal(this.props.onCancelOrNo)}
            >
              Cancel
            </Button>
          </>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <SReactModal
        role="dialog"
        isOpen={this.state.modalIsOpen}
        style={castStyles}
        {...this.props.controlSpecificProps}
      >
        {this.props.modalTitle &&
        <ModalHeaderDiv>
          <h5>{this.props.modalTitle}</h5>
          <button type="button" aria-label="Close" onClick={() => this.closeModal(this.props.onCancelOrNo)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeaderDiv>
        }
        <ModalBodyDiv>{this.props.children}</ModalBodyDiv>
        <ModalFooterDiv>
          {this.renderButtons(this.props.buttonType)}
        </ModalFooterDiv>
        <CloseButton
          onClick={() => this.closeModal(this.props.onCancelOrNo)}
        />
      </SReactModal>
    );
  }
}

export default Modal;
