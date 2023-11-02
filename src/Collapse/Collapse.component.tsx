import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const COLLAPSED = 'collapsed';
const COLLAPSING = 'collapsing';
const EXPANDING = 'expanding';
const EXPANDED = 'expanded';

export type Props = {
  isOpen?: boolean;
  children?: any;
  onInit?: any;
  onChange?: any;
  className?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type State = {
  collapseState: any;
  collapseStyle: any;
  hasReversed: boolean;
};

const CWrapper = styled.div`
  .collapse-css-transition {
    overflow: hidden;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

function getHeight(content) {
  return content ? `${content.scrollHeight}px` : '0px';
}

function nextFrame(callback: any) {
  // Ensure it is always visible on collapsing, afterFrame didn't work
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

function isMoving(collapseState: any) {
  return collapseState === EXPANDING || collapseState === COLLAPSING;
}

function getCollapseHeight() {
  return '0px';
}

function getCollapseVisibility(props: Props) {
  return 'hidden';
}

export class Collapse extends React.Component<Props, any> {
  state: State;
  content: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      collapseState: EXPANDED,
      collapseStyle: {
        height: getCollapseHeight(),
        visibility: getCollapseVisibility(props),
      },
      hasReversed: false,
    };
  }

  // Detect a new collapse state from props.isOpen change
  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      hasReversed: props.isOpen
        ? state.collapseState === COLLAPSING
        : state.collapseState === EXPANDING,
      collapseState: props.isOpen ? EXPANDING : COLLAPSING,
    };
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.setExpanding();
    }
    this.onCallback(this.props.onInit);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.collapseState === prevState.collapseState) return;
  }

  handleState = content => {
    if (!content) return;
    switch (this.state.collapseState) {
      case EXPANDING:
        this.setExpanding();
        break;
      case COLLAPSING:
        this.setCollapsing();
        break;
      case EXPANDED:
        this.setExpanded();
        break;
      case COLLAPSED:
        this.setCollapsed();
        break;
      // no default
    }
  };

  onTransitionEnd = ({
    target,
    propertyName,
  }: {
    target: any;
    propertyName: any;
  }) => {
    if (target === this.content && propertyName === 'height') {
      switch (this.state.collapseState) {
        case EXPANDING:
          this.setState({ collapseState: EXPANDED });
          break;
        case COLLAPSING:
          this.setState({ collapseState: COLLAPSED });
          break;
        // no default
      }
    }
  };

  onCallback = (callback: any) => {
    callback &&
      callback({
        ...this.state,
        isMoving: isMoving(this.state.collapseState),
      });
  };

  setCollapsed = () => {
    if (!this.content) return;
    nextFrame(() => {
      this.setState(
        {
          collapseStyle: {
            height: getCollapseHeight(),
            visibility: getCollapseVisibility(this.props),
          },
        },
        () => this.onCallback(this.props.onChange),
      );
    });
  };

  setCollapsing = () => {
    if (!this.content) return;
    nextFrame(() => {
      if (this.content) {
        const height = getCollapseHeight();
        if (height !== this.content.style.height) {
          this.setState(
            {
              collapseStyle: {
                height,
                visibility: '',
              },
            },
            () => this.onCallback(this.props.onChange),
          );
        }
      }
    });
  };

  setExpanding = () => {
    nextFrame(() => {
      if (this.content) {
        const height = getHeight(this.content);
        if (height !== this.content.style.height) {
          this.setState(
            {
              collapseStyle: {
                height,
                visibility: '',
              },
            },
            () => this.onCallback(this.props.onChange),
          );
        }
      }
    });
  };

  setExpanded = () => {
    if (!this.content) return;
    nextFrame(() => {
      this.setState(
        {
          collapseStyle: {
            height: '',
            visibility: '',
          },
        },
        () => this.onCallback(this.props.onChange),
      );
    });
  };

  render() {
    const {
      className,
      children,
      onInit,
      onChange,
      isOpen,
      theme,
      ...props
    } = this.props;

    const transition = 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)';

    const style = {
      transition,
      ...this.state.collapseStyle,
    };

    const collapseClassName = `${className || 'collapse-css-transition'} --is-${
      this.state.collapseState
    }`;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <CWrapper>
          <div
            ref={(element: any) => {
              this.content = element;
              this.handleState(this.content);
            }}
            style={style}
            className={collapseClassName}
            onTransitionEnd={this.onTransitionEnd}
            {...props}
          >
            {children}
          </div>
        </CWrapper>
      </ThemeProvider>
    );
  }
}
