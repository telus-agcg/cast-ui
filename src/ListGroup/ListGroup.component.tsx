import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { Collapse } from '../Collapse';
import { ic_keyboard_arrow_down as IKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Icon from 'react-icons-kit';

export type Props = {
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
   * Chevron alignment
   *
   * @default 'right'
   **/
  chevronAlignment?: 'left' | 'right';
  /**
   * Borders?
   *
   * @default true
   **/
  border?: boolean;
};

const SListGroup = styled.ul`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  border-radius: ${(props: Props) => props.theme.borders.radius};
  background-color: ${(props: Props) =>
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

const SListHeader = styled.li<Partial<Props>>`
  overflow: hidden;
  cursor: pointer;
  height: auto;
  border-bottom: ${(props: any) =>
    props.border ? `1px solid ${props.theme.colors.secondary}` : ''};
  background-color: ${(props: Props) =>
    props.isCollapsed
      ? props.theme.listGroup.theme[props.listGroupTheme!].backgroundColor
      : props.theme.colors.highlight200};
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.chevronAlignment === 'right' ? 'space-between' : 'flex-start'};
  position: relative;
`;

const SIcon = styled(Icon)<Partial<Props>>`
  position: absolute;
  left: ${(props: any) =>
    props.chevronAlignment === 'right' ? 'initial' : '0'};
  right: ${(props: any) =>
    props.chevronAlignment === 'right' ? '0' : 'initial'};
  color: ${(props: any) => props.theme.colors.primary};
`;
const SHeaderContent = styled.span`
  order: 2;
`;

const ChevronImage: Function = (
  isCollapsed: boolean | undefined,
  chevronAlignment,
) => {
  if (undefined === isCollapsed) {
    return null;
  }
  return isCollapsed ? (
    <SIcon icon={IKAR} size={24} chevronAlignment={chevronAlignment} />
  ) : (
    <SIcon icon={IKAD} size={24} chevronAlignment={chevronAlignment} />
  );
};

const initialState = {
  isCollapsed: true,
  collapsible: false,
  listGroupTheme: 'light',
  chevronAlignment: 'right',
  border: true,
};
type State = Readonly<typeof initialState>;

export class ListGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isCollapsed: true,
      collapsible: false,
      listGroupTheme: 'light',
      chevronAlignment: 'right',
      border: true,
    };
  }

  toggle() {
    if (this.props.onToggle instanceof Function) {
      this.props.onToggle();
      return;
    }
    if (!('isCollapsed' in this.props)) {
      this.setState({ isCollapsed: !this.state.isCollapsed });
    }
  }

  static defaultProps = {
    listGroupTheme: 'light',
    collapsible: false,
    theme: Themes.defaultTheme,
    chevronAlignment: 'right',
    border: true,
  };

  // readonly state: State = initialState;

  render() {
    const {
      collapsible,
      isCollapsed,
      chevronAlignment,
      name,
      theme,
      children,
      ...props
    } = this.props;
    const _isCollapsed =
      'isCollapsed' in this.props ? isCollapsed : this.state.isCollapsed;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SListGroup {...props}>
          {collapsible ? (
            <React.Fragment>
              <SListHeader
                isCollapsed={_isCollapsed}
                onClick={collapsible ? this.toggle : undefined}
                chevronAlignment={chevronAlignment}
                {...props}
              >
                <SHeaderContent>{name}</SHeaderContent>
                {ChevronImage(isCollapsed, chevronAlignment, {
                  ...props,
                })}
              </SListHeader>
              <Collapse isOpen={!_isCollapsed}>{children}</Collapse>
            </React.Fragment>
          ) : (
            [children]
          )}
        </SListGroup>
      </ThemeProvider>
    );
  }
}

export default ListGroup;
