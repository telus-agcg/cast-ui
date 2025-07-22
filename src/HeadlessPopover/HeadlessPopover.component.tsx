import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { getPropsWithDefaults } from '@utils';
import { unset } from 'lodash';
import styled from 'styled-components';

type Props = React.PropsWithChildren &
  TippyProps & {
    content: any;
    displayType?: 'default' | 'menu';
    appendTo?: TippyProps['appendTo']; // Make appendTo configurable
  };

const TippyBox = styled.div<Props>`
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
  appendTo: () => document?.body,
} satisfies Partial<Props>;

export const HeadlessPopover = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, content, appendTo } = propsWithDefaults;
  const { className, ...restProps } = propsWithDefaults; // fix ClassName exception while rendering tippy component
  
  return (
    <Tippy
      interactive
      trigger="click"
      zIndex={unset as unknown as undefined}
      render={(attrs) => (
        <TippyBox tabIndex={-1}  className={className}  {...attrs} {...restProps}>
          <div>{content}</div>
        </TippyBox>
      )}
      popperOptions={ appendTo=='parent'? {}: { strategy: 'fixed' }}
      appendTo={appendTo}
      {...restProps}
    >
      {children}
    </Tippy>
  );
};
