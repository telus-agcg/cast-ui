import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, Display, Title, Caption, Link } from '../';

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

const BoldFont = styled.p`
  font-family: ${(props: Props) => props.theme.typography.fontBold.fontFamily};
`;

const MediumFont = styled.p`
  font-family: ${(props: Props) =>
    props.theme.typography.fontMedium.fontFamily};
`;

export const Typography: React.FunctionComponent<Props> = ({
  children,
  theme,
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STypography>
      <Display size={20}>Display Size 20</Display>
      <Display size={10}>Display Size 10</Display>
      <Title size={20}>Title Size 20</Title>
      <Title size={10}>Title Size 10</Title>
      <Header size={20}>Header Size 20</Header>
      <Header size={10}>Header Size 10</Header>
      <p>
        Etiam ullamcorper, metus sed luctus auctor, tortor lorem auctor quam, ut
        condimentum massa tellus at turpis.
      </p>
      <Caption>Use for hero images and website headers</Caption>
      <Link href="https://www.telus.com/agcg" target="_blank">
        Read More
      </Link>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur{' '}
        <Link href="https://www.telus.com/agcg" target="_blank">
          link in text
        </Link>
        .
      </p>
    </STypography>
    <MediumFont>This is the medium font</MediumFont>
    <BoldFont>This is the bold font</BoldFont>
  </ThemeProvider>
);
