import * as React from 'react';
import * as ReactModal from 'react-modal';
import styled from 'styled-components';
import { Button } from '../Button/Button.component';
import SButton from '../Button/SButton';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
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
   * Specify the type of action buttons in the modal footer
   *
   * @default 'OkCancel'
   **/
  buttonType: 'OkCancel' | 'OkOnly' | 'YesNo';
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
};

const SDiv = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  color: ${(props: any) => props.theme.reverseText};
  &:disabled {
    background: ${(props: any) => props.theme.input.backgroundDisabled};
    cursor: not-allowed;
  }
`;

const ModalHeaderDiv = styled.div`
  min-height: ${(props: any) => props.theme.modal.header.minHeight};
  background-color: ${(props: any) => props.theme.modal.header.backgroundColor};
  border-bottom: ${(props: any) => props.theme.modal.header.borderBottom};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  padding: ${(props: any) => props.theme.modal.header.padding};
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
  background: transparent url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgVHJlbmQgTWljcm8gU3R5bGUgUG9ydGFsIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8dGl0bGU+Y2xvc2U8L3RpdGxlPg0KICA8cGF0aCBmaWxsPSJyZ2IoMzQsMzQsMzQpIiBkPSJNMTUgMmwtMS0xLTYgNi02LTYtMC45OSAwLjk5IDUuOTkgNi4wMTAtNiA2IDEgMSA2LTYgNiA2IDEtMS02LTYgNi02eiI+PC9wYXRoPg0KPC9zdmc+);
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

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  closeModal(fn: any) {
    if (fn !== null && fn !== undefined) {
      fn();
    }
  }

  renderButtons(buttonType: 'OkCancel' | 'OkOnly' | 'YesNo') {
    switch (buttonType) {
      case 'OkOnly':
        return <>
          <Button btnSize="md"
            btnStyle="primary"
            onClick={() => this.closeModal(this.props.onOkOrYes)}>OK</Button>
        </>;
      case 'YesNo':
        return <>
          <Button btnSize="md"
            btnStyle="primary"
            onClick={() => this.closeModal(this.props.onOkOrYes)}>Yes</Button>
          <Button btnSize="md"
            btnStyle="default"
            onClick={() => this.closeModal(this.props.onCancelOrNo)}>No</Button>
        </>;
      case 'OkCancel':
      default:
        return <>
          <Button btnSize="md"
            btnStyle="primary"
            onClick={() => this.closeModal(this.props.onOkOrYes)}>OK</Button>
          <Button btnSize="md"
            btnStyle="default"
            onClick={() => this.closeModal(this.props.onCancelOrNo)}>Cancel</Button>
        </>;
    }
  }

  render() {
    return (
      <SDiv
        className="modal-wrapper"
      >
        <ReactModal
          role="dialog"
          isOpen={this.props.isOpen}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              textAlign: 'center',
            },
            content: {
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              display: 'inline-block',
              height: 'auto',
              lineHeight: '20px',
              position: 'relative',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              minWidth: '400px',
              maxWidth: '80%',
              whiteSpace: 'normal',
              verticalAlign: 'middle',
              padding: '0',
              textAlign: 'left',
            },
          }}
          {...this.props.controlSpecificProps}
        >
          <ModalHeaderDiv>
            <h2>{this.props.modalTitle}</h2>
          </ModalHeaderDiv>
          <ModalBodyDiv>
            {this.props.children}
          </ModalBodyDiv>
          <ModalFooterDiv>
            {this.renderButtons(this.props.buttonType)}
          </ModalFooterDiv>
          <CloseButton onClick={() => this.closeModal(this.props.onCancelOrNo)}></CloseButton>
        </ReactModal>
      </SDiv>
    );
  }
}

export default Modal;
