import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { Themes } from '../../themes';

export type Props = Partial<DraggableProps>;

const SParentMainContent = styled.div`
  width: 100%;
`;

export const ParentMainContent: React.FunctionComponent<Props> = ({
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
      <SParentMainContent {...newProps} key={props.color}>
        {props.children}
      </SParentMainContent>
    </ThemeProvider>
  );
};

export default ParentMainContent;
