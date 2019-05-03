import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Header,
  Button,
  Tooltip,
  Display,
  Title,
  Caption,
  Link,
  BodyText,
} from '../';
import CopyToClipboard from '../CopyToClipboard';
import { sampleCode } from './CodeBlock/CodeBlock.stories';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const STypography = styled.div`
  font-weight: ${(props: Props) => props.theme.typography.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  line-height: ${(props: Props) => props.theme.typography.lineHeight};
`;

export const Typography: React.FunctionComponent<Props> = ({
  children,
  theme,
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STypography>
      <Display>Display</Display>
      <Header>Header</Header>
      <Title>Title</Title>
      <p>
        Etiam ullamcorper, metus sed luctus auctor, tortor lorem auctor quam, ut
        condimentum massa tellus at turpis.
      </p>
      <Caption>Use for hero images and website headers</Caption>
      <Link solo={true} href="https://www.tkxs.com" target="_blank">
        Read More
      </Link>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur{' '}
        <Link href="https://theuselessweb.com/" target="_blank">
          unvisited link in text
        </Link>{' '}
        over a{' '}
        <Link href="https://www.tkxs.com" target="_blank">
          visited link in text
        </Link>{' '}
        elit.
      </p>
      <Button btnStyle="primary">Read More Button</Button>
      <br />
      <br />
      <br />
      <Tooltip content="Tooltip text appears here">
        <span>
          <Button btnStyle="primary" outline={true}>
            Read More
          </Button>
        </span>
      </Tooltip>
      <BodyText>$25,855.90</BodyText>
      <br />
      <CopyToClipboard
        copyContent={sampleCode || ''}
        background="#F5F7F8"
        includeCopyButton={true}
      />
    </STypography>
  </ThemeProvider>
);
