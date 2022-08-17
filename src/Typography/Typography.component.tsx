import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, Header, Tooltip, Display, Title, Caption, Link } from '../';

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
      <p>Body text</p>
      <Caption>Caption</Caption>
      <Link href="https://www.tkxs.com" target="_blank">
        Standalone link
      </Link>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur{' '}
        <Link href="https://www.tkxs.com" target="_blank">
          link in text
        </Link>
        .
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
      <p>$25,855.90</p>
    </STypography>
  </ThemeProvider>
);
