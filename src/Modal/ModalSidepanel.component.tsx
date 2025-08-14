import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';
import { CloseIcon } from '@icons';

export interface ModalSidePanelProps {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Specify if the side panel is open
   *
   * @default false
   **/
  isOpen: boolean;
  /**
   * Specify the title of the side panel
   *
   * @default null
   **/
  title?: string;
  /**
   * Specify the function to execute when the user clicks the close button.
   *
   * @default null
   **/
  onClose?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Side Panel width
   *
   * @default 'md'
   **/
  width?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * specify zIndex for side panel (should be higher than modal)
   * @default 1000000
   **/
  zIndex?: number;
  /**
   * specify if close icon is disabled
   * @default false
   **/
  disableCloseIcon?: boolean;
  /**
   * Specify the type of action buttons or Component in the side panel footer
   *
   * @default null
   **/
  footerContent?:
    | React.JSX.Element
    | React.Component
    | React.FunctionComponent
    | string;
}

const sidePanelWidthRules = (width: string) => {
  switch (width) {
    case 'sm':
      return '300px';
    case 'md':
      return '400px';
    case 'lg':
      return '500px';
    case 'xl':
      return '600px';
    default:
      return '400px';
  }
};

const SidePanelOverlay = styled.div<{ isOpen: boolean; zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${(props) => props.zIndex || 1000000};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  align-items: stretch;
`;

const SidePanelContainer = styled.div<{ width: string; theme: any }>`
  width: ${(props) => sidePanelWidthRules(props.width)};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.typography.fontFamily};
  color: ${(props: any) => props.theme.modal.body.color};
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${SidePanelOverlay}[data-open="true"] & {
    transform: translateX(0);
  }
`;

const SidePanelHeader = styled.div<{ theme: any; disableCloseIcon?: boolean }>`
  min-height: 60px;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  flex-shrink: 0;
  font-family: ${(props) =>
    props.theme.typography.fontBold?.fontFamily ||
    props.theme.typography.fontFamily};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-size: 18px;
    color: ${(props: any) => props.theme.modal.body.color};
    padding: 0;
    margin: 0;
    font-weight: 600;
  }

  button {
    padding: 8px;
    line-height: 20px;
    font-weight: 300;
    font-size: 24px;
    color: ${(props: any) => props.theme.modal.body.color};
    background-color: transparent;
    border: 0;
    cursor: ${(props) => (props.disableCloseIcon ? 'not-allowed' : 'pointer')};
    border-radius: 50%;
    transition: all 0.3s;
    opacity: ${(props) => (props.disableCloseIcon ? 0.5 : 1)};

    &:hover {
      background-color: ${(props) =>
        props.disableCloseIcon ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
    }
  }
`;

const SidePanelBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  color: ${(props: any) => props.theme.modal.body.color};
`;

const SidePanelFooter = styled.div`
  flex-shrink: 0;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
`;

const defaultProps = {
  width: 'md',
  disableCloseIcon: false,
  zIndex: 1000000,
  theme: Themes.canopyTheme,
} satisfies Partial<ModalSidePanelProps>;

export const ModalSidePanel = (
  props: React.PropsWithChildren<ModalSidePanelProps>,
) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    id,
    isOpen,
    title,
    onClose,
    width,
    theme,
    zIndex,
    disableCloseIcon,
    footerContent,
    children,
  } = propsWithDefaults;

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && onClose && !disableCloseIcon) {
      onClose(e);
    }
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClose && !disableCloseIcon) {
      onClose(e);
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose && !disableCloseIcon) {
        onClose(e as any);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, disableCloseIcon]);

  if (!isOpen) {
    return null;
  }

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SidePanelOverlay
        id={id}
        isOpen={isOpen}
        zIndex={zIndex}
        onClick={handleOverlayClick}
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${id}-title` : undefined}
      >
        <SidePanelContainer width={width ?? 'md'} theme={theme}>
          {title && (
            <SidePanelHeader theme={theme} disableCloseIcon={disableCloseIcon}>
              <h5 id={title ? `${id}-title` : undefined}>{title}</h5>
              {onClose && (
                <button
                  type="button"
                  aria-label="Close"
                  onClick={handleCloseClick}
                  disabled={disableCloseIcon}
                >
                  <CloseIcon />
                </button>
              )}
            </SidePanelHeader>
          )}
          <SidePanelBody>{children}</SidePanelBody>
          {footerContent && (
            <SidePanelFooter>
              {footerContent as React.ReactNode}
            </SidePanelFooter>
          )}
        </SidePanelContainer>
      </SidePanelOverlay>
    </ThemeProvider>
  );
};
