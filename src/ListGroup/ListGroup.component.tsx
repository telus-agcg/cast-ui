import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { Collapse } from '../Collapse';

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
   * From chevron alignment
   *
   * @default 'right'
   **/
  chevronAlignment?: 'left' | 'right';
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
  height: auto;
  border-bottom: 1px solid ${(props: Props) => props.theme.colors.secondary};
  background-color: ${(props: Props) =>
    props.theme.listGroup.theme[props.listGroupTheme!].backgroundColor};
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.chevronAlignment == 'right' ? 'space-between' : 'flex-start'};
`;

/* tslint:disable:max-line-length */
const SExpandIcon = styled.div<Partial<Props>>`
  float: ${(props: any) => props.chevronAlignment};
  padding: 0;
  margin: -10px 0 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 28px;
  height: 20px;
  background-size: 28px;
  background-repeat: no-repeat;
  order: ${(props: any) => (props.chevronAlignment == 'right' ? '2' : '1')};
`;

const SCollapseIcon = styled.div<Partial<Props>>`
  padding: 0;
  margin: -10px 0 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMzU3YmRmIiBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  border: 0;
  -webkit-appearance: none;
  text-shadow: none;
  opacity: 1;
  -ms-filter: none;
  filter: none;
  outline: none;
  width: 28px;
  height: 20px;
  background-size: 28px;
  background-repeat: no-repeat;
  order: ${(props: any) => (props.chevronAlignment == 'right' ? '2' : '1')};
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
    <SCollapseIcon chevronAlignment={chevronAlignment} />
  ) : (
    <SExpandIcon chevronAlignment={chevronAlignment} />
  );
};

const initialState = {
  isCollapsed: true,
  collapsible: false,
  listGroupTheme: 'light',
  chevronAlignment: 'right',
};
type State = Readonly<typeof initialState>;

export class ListGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isCollapsed: false,
      collapsible: false,
      listGroupTheme: 'light',
      chevronAlignment: 'right',
    };
  }

  toggle() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  static defaultProps = {
    listGroupTheme: 'light',
    collapsible: false,
    isCollapsed: false,
    theme: Themes.defaultTheme,
    chevronAlignment: 'right',
  };

  readonly state: State = initialState;

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
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SListGroup {...props}>
          {collapsible ? (
            <React.Fragment>
              <SListHeader
                {...props}
                onClick={collapsible ? this.toggle : undefined}
                chevronAlignment={chevronAlignment}
              >
                <SHeaderContent>{name}</SHeaderContent>
                {ChevronImage(this.state.isCollapsed, chevronAlignment)}
              </SListHeader>
              <Collapse isOpen={this.state.isCollapsed}>{children}</Collapse>
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
