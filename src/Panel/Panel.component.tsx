import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../themes';

type Props = {
  /** this dictates the content of the panel  */
  children?: React.ReactNode;
  /** this dictates the title of the panel  */
  title?: string;
  /** this dictates the text color of the title
   *  @default '#333'
   */
  titleBg?: string;
  /** this dictates the background color of the title
   *  @default '#f3f3f3'
   */
  titleColor?: string;
  /** this dictates the text color of the title
   *  @default '#333'
   */
  bodyBg?: string;
  /** this dictates the background color of the body
   *  @default '#fff'
   */
  borderColor?: string;
  /** this dictates the border color of the panel
   *  @default '#eee'
   */
  collapse?: boolean;
  /** this dictates whether the panel is collapsed or not
   *  @default 'false'
   */
};
const PanelWrapper = styled.div`
  border: 1px solid ${(props: Props) => props.borderColor || '#eee'};
  font-family: '"Open Sans", arial, sans-serif';
`;
const PanelHeader = styled.div`
  background: ${(props: Props) => props.titleBg};
  padding: 5px 8px;
  border-bottom: 1px solid ${(props: Props) => props.borderColor};
  font-size: 20px;
  color: ${(props: Props) => props.titleColor};
`;
const PanelBody = styled.div`
  background: ${(props: Props) => props.bodyBg};
  padding: 5px 8px;
  font-size: 16px;
  opacity: ${(props: Props) => (props.collapse ? 0 : 1)};
  transition: all 300ms ease-in-out;
  transform: ${(props: Props) => (props.collapse ? 'scaleY(0)' : 'scaleY(1)')};
`;

const initialState = { collapse: false };
type State = Readonly<typeof initialState>;

export class Panel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleToggleCollapse.bind(this);
  }
  state: State = { ...initialState, collapse: this.props.collapse || false };

  handleToggleCollapse() {
    const el: React.RefObject<HTMLDivElement> = React.createRef();
    if (el.current) {
      debugger;
      this.props.collapse
        ? expandSection(el.current)
        : collapseSection(el.current);
      this.setState({ collapse: !this.state.collapse });
    }
  }

  render() {
    return (
      <PanelWrapper>
        <PanelHeader
          titleBg={this.props.titleBg || defaultTheme.styles.default.flood}
          titleColor={this.props.titleColor || defaultTheme.styles.default.text}
          borderColor={
            this.props.borderColor || defaultTheme.styles.default.borderColor
          }
          onClick={e => this.handleToggleCollapse()}
        >
          {this.props.title}
        </PanelHeader>
        <PanelBody
          collapse={this.state.collapse}
          bodyBg={this.props.bodyBg || defaultTheme.styles.default.flood}
        >
          {this.props.children}
        </PanelBody>
      </PanelWrapper>
    );
  }
}

function collapseSection(element: HTMLElement) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });
}

function expandSection(element: HTMLElement) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function (e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee());

    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });
}
