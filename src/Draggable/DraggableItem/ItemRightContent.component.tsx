import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { Themes } from '../../themes';

export type Props = Partial<DraggableProps>;

const SItemRightContent = styled.div`
  position: relative;
  border-left: 1px solid
    ${(props: Props) => props.theme.colors[props.bordercolor!]};
  color: ${(props: Props) =>
    props.theme.styles[props.draggablestyle!].reverseText};
  background-color: ${(props: Props) =>
    props.theme.styles[props.draggablestyle!].flood};
  cursor: pointer;
  padding: ${(props: Props) =>
    `calc(${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } / 2)`};
`;

export const ItemRightContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
    { key: 'theme', defaultVal: Themes.defaultTheme },
  ];
  const { theme, ...newProps }: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SItemRightContent {...newProps} key={props.color}>
        {props.children}
      </SItemRightContent>
    </ThemeProvider>
  );
};

export default ItemRightContent;
