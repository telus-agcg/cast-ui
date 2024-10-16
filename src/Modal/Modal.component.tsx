import * as React from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends ReactModalProps {
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
  /**
   * specify zIndex for modal
   * @default 999999
   **/
  zIndex?: number;
  /**
   * specify if modal close is disabled
   * @default false
   **/
  disableCloseIcon: boolean;
}

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
        'max-height': '95%',
        width: theme.modal[modalSize].width,
      };
    default:
      return {
        width: theme.modal[modalSize].width,
      };
  }
};

const SReactModal = styled(ReactModal)`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  color: ${(props: any) => props.theme.modal.body.color};
  outline: none;
  ${(props: any) => modalSizeRules(props.modalSize, props.theme)};
  display: flex;
  flex-direction: column;
`;

const ModalHeaderDiv = styled.div`
  min-height: ${(props: any) => props.theme.modal.header.minHeight};
  background-color: ${(props: any) => props.theme.modal.header.backgroundColor};
  flex-shrink: 0;
  font-family: ${(props: any) => props.theme.typography.fontBold.fontFamily};
  padding: ${(props: any) => props.theme.modal.header.padding}
    ${(props: any) => props.theme.modal.header.padding} 0;
  border-top-left-radius: ${(props: any) => props.theme.modal.borderRadius};
  border-top-right-radius: ${(props: any) => props.theme.modal.borderRadius};
  h5 {
    font-size: ${(props: any) =>
      props.theme.modal[props.modalSize].header.fontSize};
    color: ${(props: any) => props.theme.modal.header.color};
    padding: 0;
    margin: 0 50px 0 0;
  }
  button {
    position: absolute;
    right: 0;
    padding: 12px;
    margin: 2px;
    line-height: 20px;
    font-weight: 300;
    font-size: 30px;
    color: ${(props: any) => props.theme.colors.blue};
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: ${(props: Props) =>
      props.disableCloseIcon ? 'not-allowed' : 'pointer'};
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background-color: ${(props: Props) =>
        props.disableCloseIcon
          ? 'none'
          : props.theme.modal.closeButton.hoverBackground};
      color: ${(props: Props) =>
        props.disableCloseIcon
          ? props.theme.pagination.button.disabledText
          : props.theme.pagination.hoverTextColor};
    }
  }
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalBodyDiv = styled.div`
  margin: ${(props: any) => props.theme.modal.body.padding};
  padding-bottom: ${(props: any) => props.theme.modal.body.padding};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  position: relative;
  height: 100%;
  overflow-y: ${(props: any) =>
    props.modalSize === 'full' ? 'scroll' : 'auto'};
  color: ${(props: any) => props.theme.modal.body.color};
`;

const ModalBlurWrapper = styled.div`
  position: relative;
`;

const ModalBlurDiv = styled.div`
  position: absolute;
  left: ${(props: any) => props.theme.modal.body.padding};
  right: ${(props: any) => props.theme.modal.body.padding};
  height: ${(props: any) => props.theme.modal.body.padding};
  bottom: calc(${(props: any) => props.theme.modal.body.padding} - 1px);
  content: '';
  backdrop-filter: blur(1px);
  z-index: 1;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;

const ModalFooterDiv = styled.div`
  flex-shrink: 0;
  padding: 0 ${(props: any) => props.theme.modal.footer.padding}
    ${(props: any) => props.theme.modal.footer.padding};
  min-height: ${(props: any) => props.theme.modal.footer.minHeight};
  margin-top: ${(props: any) => props.theme.modal.footer.marginTop};
  text-align: ${(props: any) => props.theme.modal.footer.textAlign};
  background-color: ${(props: any) => props.theme.modal.footer.backgroundColor};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  border-bottom-left-radius: ${(props: any) => props.theme.modal.borderRadius};
  border-bottom-right-radius: ${(props: any) => props.theme.modal.borderRadius};
`;

export class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    modalSize: 'md',
    disableCloseIcon: false,
    theme: Themes.canopyTheme,
  };

  getModalStyles = () => {
    const isIE11 =
      !!window['MSInputMethodContext'] && !!document['documentMode'];

    return {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        zIndex: this.props.zIndex
          ? this.props.zIndex
          : this.props.theme.modal.overlay.zIndex,
      },
      content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -40%)',
        backgroundColor: this.props.theme.modal.body.backgroundColor,
        border: '',
        height: isIE11 ? '50%' : 'auto',
        lineHeight: '20px',
        position: 'absolute',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        whiteSpace: 'normal',
        verticalAlign: 'middle',
        padding: '0',
        textAlign: 'left',
        fontSize: '14px',
        borderRadius: this.props.theme.modal.borderRadius,
        zIndex: this.props.zIndex
          ? this.props.zIndex
          : this.props.theme.modal.overlay.zIndex,
      },
    };
  };

  OnAfterOpen = fn => {
    document.body.style.overflow = 'hidden';
    if (fn) {
      fn();
    }
  };

  OnAfterClose = fn => {
    document.body.removeAttribute('style');
    if (fn) {
      fn();
    }
  };

  render() {
    const {
      theme,
      onAfterOpen,
      onAfterClose,
      children,
      modalTitle,
      footerContent,
      ...props
    } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SReactModal
          role="dialog"
          style={this.getModalStyles()}
          modalSize={this.props.modalSize || 'md'}
          appElement={props.appElement || document.getElementById('root')!}
          onAfterOpen={() => this.OnAfterOpen(onAfterOpen)}
          onAfterClose={() => this.OnAfterClose(onAfterClose)}
          {...props}
        >
          {this.props.modalTitle && (
            <ModalHeaderDiv
              modalSize={this.props.modalSize}
              disableCloseIcon={this.props.disableCloseIcon}
            >
              <ModalHeaderWrapper>
                <h5>{this.props.modalTitle}</h5>
                {props.onTitleClose && (
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={props.onTitleClose}
                    disabled={props.disableCloseIcon}
                  >
                    <span>&times;</span>
                  </button>
                )}
              </ModalHeaderWrapper>
            </ModalHeaderDiv>
          )}
          <ModalBodyDiv>{children}</ModalBodyDiv>
          <ModalBlurWrapper>
            <ModalBlurDiv />
          </ModalBlurWrapper>
          {footerContent && (
            <ModalFooterDiv modalTitle={modalTitle}>
              {footerContent}
            </ModalFooterDiv>
          )}
        </SReactModal>
      </ThemeProvider>
    );
  }
}

export default Modal;
