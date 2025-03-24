import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Title } from '@typography';
import { KeyboardArrowDownIcon, KeyboardArrowRightIcon } from '@icons';
import { getPropsWithDefaults } from '@utils';

export type PanelHeaderProps = React.PropsWithChildren<{
  /**
   * The name of the panel
   *
   * @default ''
   * */
  name?: string;
  /**
   * The title of the panel
   *
   * @default ''
   * */
  title?: string;
  /**
   * Set PanelHeader Style
   *
   *  @default 'primary'
   */
  panelStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Set PanelHeader Icon position
   *
   *  @default 'right'
   */
  iconPosition?: 'right' | 'left';
  /**
   * Whether the panel is collapsed or not
   *
   *  @default 'false'
   */
  isCollapsed?: boolean;
  /**
   * Toggle panel body
   *
   *  @default 'void'
   */
  collapsedIcon?: React.ReactElement;
  expandedIcon?: React.ReactElement;
  toggleItem?(event: React.MouseEvent<HTMLElement>, theme: any): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SPanelHeader = styled.div<PanelHeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.panel.header.padding};
  color: ${(props) => props.theme.panel.headerColor};
  background: ${(props) => props.theme.panel.headerBackgroundColor};
  border: ${(props) =>
    `${props.theme.panel.header.borderWidth} solid
    ${props.theme.panel.headerBorderColor}`};
  &:hover {
    cursor: ${(props) =>
      typeof props.isCollapsed !== 'undefined' ? 'pointer' : 'auto'};
  }
`;

const SPanelTitle = styled(Title)`
  margin: 0;
`;

type IconPosition = 'right' | 'left' | undefined;
type CollapseIconProps = {
  iconPosition: IconPosition;
};
const SExpandIcon = styled(KeyboardArrowDownIcon)<CollapseIconProps>`
  float: ${(props) => props.iconPosition};
  color: ${(props) => props.theme.colors.primary};
`;

const SCollapseIcon = styled(KeyboardArrowRightIcon)<CollapseIconProps>`
  float: ${(props) => props.iconPosition};
  color: ${(props) => props.theme.colors.primary};
`;

const ChevronImage: Function = (
  isCollapsed: boolean | undefined,
  iconPosition?: 'right' | 'left',
  collapsedIcon?: any,
  expandedIcon?: any,
) =>
  isCollapsed
    ? collapsedIcon || (
        <SCollapseIcon iconPosition={iconPosition} width={24} height={24} />
      )
    : expandedIcon || (
        <SExpandIcon iconPosition={iconPosition} width={24} height={24} />
      );

const defaultProps = {
  panelStyle: 'primary',
  toggleItem: () => {},
  isCollapsed: undefined,
} satisfies Partial<PanelHeaderProps>;

export const PanelHeader = (props: PanelHeaderProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    theme,
    toggleItem,
    name,
    title,
    collapsedIcon,
    expandedIcon,
    iconPosition,
    isCollapsed,
    ...rest
  } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SPanelHeader onClick={(e: any) => toggleItem!(e, theme)} {...rest}>
        <SPanelTitle size={20}>
          {name && (
            <b>
              {name}
              {title ? ':' : ''}
            </b>
          )}{' '}
          {title}{' '}
        </SPanelTitle>
        {typeof isCollapsed !== 'undefined'
          ? ChevronImage(isCollapsed, iconPosition, collapsedIcon, expandedIcon)
          : ''}
      </SPanelHeader>
    </ThemeProvider>
  );
};
