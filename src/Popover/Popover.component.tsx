import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button.component';

type Props = Partial<{
  visible: boolean;
  btnToggle: boolean;
  children: any;
  theme: any;
  onToggle: any;
}>;

type RenderChildren = (props: Props) => JSX.Element;

const PopoverContext = React.createContext<Props | null>(null);

const SPopover = styled.div`
  position: relative;
  border-radius: ${(props: Props) => props.theme.borders.radius}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  .popover-toggle {
    padding: 8px 5px;
    width: 100%;
    border: ${(props: Props) =>
      `${props.theme.borders.width} solid ${props.theme.popover.borderColor}`}
    $:hover {
      cursor: pointer;
    }
  }
  .popover-content {
    position: absolute;
    width: 100%;
    padding: 8px 5px;
    background: ${(props: Props) => props.theme.popover.background}
    border: ${(props: Props) =>
      `${props.theme.borders.width} solid ${props.theme.popover.borderColor}`}
  }
`;

const PopoverConsumer = (props: Props) => {
  return (
    <PopoverContext.Consumer>
      {(context: Props) => {
        if (!context) {
          throw new Error(
            'Popover compound components must be rendered within the Popover component.',
          );
        }
        return props.children(context);
      }}
    </PopoverContext.Consumer>
  );
};

class Popover extends React.Component<Props> {
  isControlled() {
    return this.props.onToggle !== undefined;
  }

  togglePopover = (e: any) => {
    e.preventDefault();
    if (this.isControlled()) {
      this.props.onToggle(this.state.visible);
    } else {
      this.setState({
        visible: !this.state.visible,
      });
    }
  }

  state = {
    visible: this.props.visible,
    btnToggle: this.props.btnToggle || false,
    onToggle: this.togglePopover,
  };

  static Toggle: RenderChildren = ({ children }) => (
    <PopoverConsumer>
      {(contextValue: Props) =>
        contextValue.btnToggle ? (
          <Button
            onClick={e => contextValue.onToggle(e)}
            btnStyle="primary"
            btnSize="md"
          >
            {children}, I'm a button
          </Button>
        ) : (
          <div
            onClick={(e: any) => {
              contextValue.onToggle(e);
            }}
            className="popover-toggle"
          >
            {children}
          </div>
        )
      }
    </PopoverConsumer>
  )
  static Content: RenderChildren = ({ children }) => (
    <PopoverConsumer>
      {(contextValue: Props) =>
        contextValue && contextValue.visible ? (
          <div className="popover-content">{children}</div>
        ) : null
      }
    </PopoverConsumer>
  )

  public render() {
    return (
      <PopoverContext.Provider
        value={{
          visible: this.props.visible,
          btnToggle: this.props.btnToggle,
          onToggle: this.isControlled()
            ? this.props.onToggle
            : this.state.onToggle,
        }}
      >
        <SPopover className="popover" {...this.props}>
          {this.props.children}
        </SPopover>
      </PopoverContext.Provider>
    );
  }
}

export default Popover;
