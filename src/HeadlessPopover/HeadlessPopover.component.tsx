import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { getPropsWithDefaults } from '@utils';
import styled from 'styled-components';

type Props = React.PropsWithChildren &
  TippyProps & {
    content: any;
    displayType?: 'default' | 'menu';
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
} satisfies Partial<Props>;

export const HeadlessPopover = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, content } = propsWithDefaults;
  return (
    <Tippy
      interactive
      trigger="click"
      render={(attrs) => (
        <TippyBox tabIndex={-1} {...attrs} {...propsWithDefaults}>
          <div>{content}</div>
        </TippyBox>
      )}
      popperOptions={{ strategy: 'fixed' }}
      appendTo={document.body}
      {...propsWithDefaults}
    >
      {children}
    </Tippy>
  );
};
