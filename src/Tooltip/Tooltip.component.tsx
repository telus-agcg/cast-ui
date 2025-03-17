import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import { getPropsWithDefaults } from '@utils';

export interface Props extends TippyProps {
  theme?: any;
}

const STippy = styled(Tippy)`
  background: ${(props: Props) => props.theme.tooltip.background};
  border-radius: ${(props: Props) => props.theme.tooltip.borderRadius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.body.fontSize};
  color: ${(props: Props) => props.theme.colors.white};
  padding: 0.25rem;
  &[x-placement^='bottom'] .tippy-arrow,
  &[x-placement^='top'] .tippy-arrow {
    border-color: ${(props: Props) => props.theme.tooltip.background}
      transparent;
  }
  &[x-placement^='left'] .tippy-arrow,
  &[x-placement^='right'] .tippy-arrow {
    border-color: transparent
      ${(props: Props) => props.theme.tooltip.background};
  }
`;

const defaultProps = {
  arrow: true,
} satisfies Partial<Props>;

export const ToolTip = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children, ...rest } = propsWithDefaults;

  return <STippy {...rest}>{children}</STippy>;
};
