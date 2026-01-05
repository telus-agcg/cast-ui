import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { getPropsWithDefaults } from '@utils';
import { unset } from 'lodash';
import styled from 'styled-components';

export type HeadlessPopoverProps = React.PropsWithChildren &
  TippyProps & {
    content: any;
    displayType?: 'default' | 'menu';
    appendTo?: TippyProps['appendTo'];
  };

interface TippyBoxProps {
  displayType?: string;
}

const TippyBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'displayType',
})<TippyBoxProps>`
  border: 1px solid ${(props) => props.theme.popover.borderColor};
  border-radius: ${(props) => props.theme.popover.borderRadius};
  box-shadow: ${(props) => props.theme.popover.boxShadow};
  background: ${(props) => props.theme.popover.background};
  color: ${(props) => props.theme.popover.color};
  font-family: ${(props) => props.theme.body.fontFamily};
  font-size: 14px;
  padding: ${(props) => (props.displayType === 'default' ? 0.5 : 0)}rem;
`;

const defaultProps = {
  displayType: 'default',
} satisfies Partial<HeadlessPopoverProps>;

export const HeadlessPopover = (props: HeadlessPopoverProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, content, appendTo, displayType } = propsWithDefaults;
  const { className, ...restProps } = propsWithDefaults; // fix ClassName exception while rendering tippy component
  
  // by Using document.body as a default prop causes build failure, as document cannot be accessed during root-level import.
  // by setting  appendTo on dynamic is reseting the z-index which is causing context collapse.
  return (appendTo=='parent') ? (

    <Tippy
      interactive
      trigger="click"
      zIndex={unset as unknown as undefined}
      render={(attrs) => (
        <TippyBox tabIndex={-1}  className={className} displayType={displayType} {...attrs}>
          <div>{content}</div>
        </TippyBox>
      )}
      popperOptions={{}}
      appendTo={'parent'}
      {...restProps}
    >
      {children}
    </Tippy>
  ): (
    <Tippy
    interactive
    trigger="click"
    zIndex={unset as unknown as undefined}
    render={(attrs) => (
      <TippyBox tabIndex={-1}  className={className} displayType={displayType} {...attrs}>
        <div>{content}</div>
      </TippyBox>
    )}
    popperOptions={{ strategy: 'fixed' }}
    appendTo={document.body}
    {...restProps}
  >
    {children}
  </Tippy>);
};
