import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { KeyboardArrowDownIcon, KeyboardArrowRightIcon } from '@icons';
import { Collapse } from '../Collapse/Collapse.component';
import { Themes } from '@themes';

export type ListGroupProps = {
  /**
   * The content of the list group
   *
   * @default null
   * */
  children?: any;
  /**
   * The name of the listGroup
   *
   * @default ''
   * */
  name?: any;
  /**
   * Whether the listGroup is collapsible or not
   *
   *  @default false
   */
  collapsible?: boolean;
  /**
   * Whether the listGroup is collapsed or not
   *
   *  @default false
   */
  isCollapsed?: boolean;
  /**
   * onToggle function
   */
  onToggle?: () => void;
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'light'
   **/
  listGroupTheme?: 'light' | 'dark';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Borders?
   *
   * @default true
   **/
  border?: boolean;
};

const SListGroup = styled.ul<ListGroupProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  border-radius: ${(props) => props.theme.borders.radius};
  background-color: ${(props) =>
    props.theme.listGroup.theme[props.listGroupTheme!].backgroundColor};
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  li {
    padding: 15px 30px;
    border-bottom: ${(props: any) =>
      props.border ? `1px solid ${props.theme.colors.secondary}` : ''};
  }
  ul li {
    padding-left: 60px;
  }
  ul ul li {
    padding-left: 90px;
  }
  ul ul ul li {
    padding-left: 120px;
  }
  .collapse-css-transition li {
    padding-left: 60px;
  }
  .collapse-css-transition ul li {
    padding-left: 60px;
  }
  .collapse-css-transition ul .collapse-css-transition li {
    padding-left: 90px;
  }
  .collapse-css-transition
    ul
    .collapse-css-transition
    ul
    .collapse-css-transition
    li {
    padding-left: 120px;
  }
`;

const SListHeader = styled.li<Partial<ListGroupProps>>`
  overflow: hidden;
  cursor: pointer;
  height: auto;
  border-bottom: ${(props: any) =>
    props.border ? `1px solid ${props.theme.colors.secondary}` : ''};
  background-color: ${(props) =>
    props.isCollapsed
      ? props.theme.listGroup.theme[props.listGroupTheme!].backgroundColor
      : props.theme.colors.primaryBackground};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const HoverIcon = styled.span`
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props: any) => props.theme.colors.lt800};
  }
  position: absolute;
  left: 0;
  right: initial;
`;

const SHeaderContent = styled.span`
  order: 2;
`;

const ChevronImage: Function = (isCollapsed: boolean | undefined) => {
  if (undefined === isCollapsed) {
    return null;
  }
  return isCollapsed ? (
    <HoverIcon>
      <KeyboardArrowRightIcon height={24} width={24} />
    </HoverIcon>
  ) : (
    <HoverIcon>
      <KeyboardArrowDownIcon height={24} width={24} />
    </HoverIcon>
  );
};

const defaultProps = {
  listGroupTheme: 'light',
  collapsible: false,
  border: true,
  theme: Themes.canopyTheme,
} satisfies Partial<ListGroupProps>;

export const ListGroup = (props: ListGroupProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const [collapsed, setCollapsed] = React.useState(false);
  const { theme, onToggle, collapsible, isCollapsed, name, children, ...rest } =
    propsWithDefaults;

  const dependOnProps = 'isCollapsed' in propsWithDefaults;

  const toggle = () => {
    if (onToggle instanceof Function) {
      onToggle();
      return;
    }
    if (!('isCollapsed' in propsWithDefaults)) {
      setCollapsed((prevState) => !prevState);
    }
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SListGroup {...rest}>
        {collapsible ? (
          <React.Fragment>
            <SListHeader
              isCollapsed={dependOnProps ? isCollapsed : collapsed}
              onClick={collapsible ? toggle : undefined}
              {...props}
            >
              <SHeaderContent>{name}</SHeaderContent>
              {ChevronImage(dependOnProps ? isCollapsed : collapsed)}
            </SListHeader>
            <Collapse isOpen={dependOnProps ? !isCollapsed : !collapsed}>
              {children}
            </Collapse>
          </React.Fragment>
        ) : (
          [children]
        )}
      </SListGroup>
    </ThemeProvider>
  );
};
