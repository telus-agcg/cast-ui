import * as React from 'react';

import { Headline, SectionHeader, Button, Tooltip, Display, Title, SubTitle } from '../';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export const Typography: React.FunctionComponent<Props> = ({
  children,
  theme,
}) => (
  <div>
    <SectionHeader>Section header</SectionHeader>
    <Display>Display</Display>
    <Headline>Headline</Headline>
    <Title>Title</Title>
    <SubTitle>Etiam mauris tellus</SubTitle>
    <p>Etiam ullamcorper, metus sed luctus auctor,
      tortor lorem auctor quam, ut condimentum massa tellus at turpis.</p>
    <Button btnStyle="primary">Read More</Button>
    <br/>
    <br/>
    <br/>
    <Tooltip
      content="Tooltip text appears here">
        <span><Button btnStyle="primary" outline={true}>Read More</Button></span>
      </Tooltip>
  </div>
);
