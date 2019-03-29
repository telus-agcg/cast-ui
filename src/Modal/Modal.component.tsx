import * as React from 'react';
import * as ReactModal from 'react-modal';
import styled from 'styled-components';

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
  footerContent:
  | JSX.Element
  | React.Component
  | React.FunctionComponent
  | string;
  /**
   * Specify the title of the modal
   *
   * @default null
   **/
  modalTitle: string;
  /**
   * Specify the function to execute when the user clicks the title close button.
   * The close button on the title will be unavailable if this function is not available.
   *
   * @default null
   **/
  onTitleClose?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Modal Size
   *
   * @default 'md'
   **/
  modalSize?: 'sm' | 'md' | 'lg' | 'full';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
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
    position: 'absolute',
    boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
    padding: '0',
    textAlign: 'left',
    fontSize: '14px',
    borderRadius: '1px',
  },
};

const modalSizeRules: Function = (modalSize: string, theme: any) => {
  switch (modalSize) {
    case 'full':
      return {
        'max-width': '98%',
        width: '95%',
        height: '95% !important',
      };
    case modalSize:
      return {
        'max-width': '98%',
        'width': theme.modal[modalSize].width,
      };
    default:
      return {
        'width': theme.modal[modalSize || 'md'].width,
      };
  }
};

const SReactModal = styled(ReactModal)`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  color: ${(props: any) => props.theme.colors.primary};
  outline: none;
  ${(props: any) => modalSizeRules(props.modalSize, props.theme)}
  display: flex;
  flex-direction: column;
`;

const ModalHeaderDiv = styled.div`
  min-height: ${(props: any) => props.theme.modal.header.minHeight};
  background-color: ${(props: any) => props.theme.modal.header.backgroundColor};
  border-bottom: ${(props: any) =>
    `1px solid ${props.theme.modal.header.borderColor}`};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  padding: ${(props: any) => props.theme.modal.header.padding};
  h5 {
    font-size: ${(props: any) => props.theme.modal.header.fontSize};
    color: ${(props: any) => props.theme.modal.header.color};
    padding: 0;
    margin: 0;
  }
  button {
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
  height: 100%;
  overflow: scroll;
  color: ${(props: any) => props.theme.modal.body.color};
`;

const ModalFooterDiv = styled.div`
  padding: ${(props: any) => props.theme.modal.footer.padding};
  min-height: ${(props: any) => props.theme.modal.footer.minHeight};
  margin-top: ${(props: any) => props.theme.modal.footer.marginTop};
  text-align: ${(props: any) => props.theme.modal.footer.textAlign};
  background-color: ${(props: any) => props.theme.modal.footer.backgroundColor};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  border-top: ${(props: Props) =>
    props.modalTitle && props.modalTitle !== undefined
      ? `1px solid ${props.theme.modal.footer.borderColor}`
      : 'none'};
`;

export class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SReactModal
        role="dialog"
        isOpen={this.props.isOpen}
        style={castStyles}
        modalSize={this.props.modalSize || 'md'}
        {...this.props}
      >
        {this.props.modalTitle && (
          <ModalHeaderDiv>
            <h5>{this.props.modalTitle}</h5>
            {this.props.onTitleClose && (
              <button
                type="button"
                aria-label="Close"
                onClick={() => this.props.onTitleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </ModalHeaderDiv>
        )}
        <ModalBodyDiv>{this.props.children}</ModalBodyDiv>
        {this.props.footerContent && (
          <ModalFooterDiv modalTitle={this.props.modalTitle}>
            {this.props.footerContent}
          </ModalFooterDiv>
        )}
      </SReactModal>
    );
  }
}

export default Modal;