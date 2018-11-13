import * as React from 'react';

export interface Props {
  /** this dictates the content of the panel  */
  children?: React.ReactNode;
  /** this dictates the title of the panel  */
  title: string;
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

export const Panel = (props: Props) => (
  <div style={{ border: `1px solid ${props.borderColor || '#eee'}` }}>
    <div style={{ background: props.titleBg }}>{props.title}</div>
  </div>
);

// export const Panel = (props: Props) => styled(basePanel)`
//   background: "pink";
// `;
