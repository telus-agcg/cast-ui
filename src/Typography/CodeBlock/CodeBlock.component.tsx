import * as React from 'react';
import styled from 'styled-components';

import { CopyToClipboard } from '../../CopyToClipboard';

export type Props = {
  /**
   * Set a code text for the CodeBlock
   *
   * @default ''
   **/
  children?: string;
  /**
   * Set a className for the CodeBlock
   *
   * @default ''
   **/
  className?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SCodeBlock = styled.pre`
  font-weight: ${(props: Props) => props.theme.typography.pre.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.pre.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.pre.lineHeight};
  background: ${(props: Props) => props.theme.typography.pre.background};
`;

export const CodeBlock: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
  ...props
}) => (
  <div>
    <CopyToClipboard
      copyContent={children || ''}
      copyContainerClass={className}
      background="lightBackground"
      includeCopyButton={true}
    />
    <SCodeBlock
      className={className}
      {...props}
      >
      <code>
      {children}
      </code>
    </SCodeBlock>
    </div>
  );
