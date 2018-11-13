import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  /** this dictates the content of the panel  */
  children?: React.ReactNode;
  /** this dictates the title of the panel  */
  title?: string;
  /** this dictates the background color of the title
   *  @default '#fff'
   */
  titleBg?: string;
  /** this dictates the background color of the body
   *  @default '#fff'
   */
  bodyBg?: string;
  /** this dictates the border color of the panel
   *  @default '#eee'
   */
  borderColor?: string;
}
const PanelWrapper = styled.div`
  border: 1px solid ${(props: Props) => props.borderColor || '#eee'};
`;
const PanelHeader = styled.div`
  background: ${(props: Props) => props.titleBg};
  padding: 5px 8px;
  border-bottom: 1px solid #eee;
  font-size: 20px;
`;
const PanelBody = styled.div`
  background: ${(props: Props) => props.bodyBg};
  padding: 5px 8px;
  font-size: 16px;
`;

export const Panel = (props: Props) => {
  return (
    <PanelWrapper>
      <PanelHeader titleBg={props.titleBg}>{props.title}</PanelHeader>
      <PanelBody bodyBg={props.bodyBg}>{props.children}</PanelBody>
    </PanelWrapper>
  );
};
