import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSubTitle = styled.h2`
  font-weight: ${(props: Props) => props.theme.typography.subTitle.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.subTitle.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.subTitle.lineHeight};
`;

export const SubTitle: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSubTitle {...props}>{children}</SSubTitle>;
SubTitle.defaultProps = { theme: Themes.defaultTheme };
