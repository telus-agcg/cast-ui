import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { Themes } from '../../themes';

export type Props = Partial<DraggableProps>;

const SItemMainContent = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props: Props) => props.theme.common[props.gutterSize!].padding};
`;

export const ItemMainContent: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'gutterSize', defaultVal: 'md' },
    { key: 'theme', defaultVal: Themes.defaultTheme },
  ];
  const { theme, ...newProps }: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SItemMainContent {...newProps} key={props.color}>
        {props.children}
      </SItemMainContent>
    </ThemeProvider>
  );
};

export default ItemMainContent;
