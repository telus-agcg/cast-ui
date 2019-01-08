import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Spinner Style
   *
   * @default 'default'
   **/
  btnStyle: string;
  /**
   * Select Spinner Size
   *
   * @default 'md'
   **/
  btnSize: string;
  /**
   * Adjust spinner size in pixels
   *
   * @default 40px
   **/
  size: number;
  /**
   * Adjust animation speed in seconds
   *
   * @default 2s
   **/
  animationSpeed: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSpinner1 = styled.button`
  background: ${(props: Props) => props.theme.styles[props.btnStyle].flood}
  border: 1px solid ${(props: Props) =>
    props.theme.styles[props.btnStyle].borderColor};
  padding: ${(props: Props) => props.theme.common[props.btnSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize].fontSize}
  font-weight: bold;
  color: ${(props: Props) => props.theme.styles[props.btnStyle].reverseText};
  &:hover {
    background: ${props => props.theme.styles[props.btnStyle].hoverFlood};
    border: 1px solid ${(props: Props) =>
      props.theme.styles[props.btnStyle].hoverFlood};
    cursor: pointer;
  }
  &:disabled {
    background: ${props => props.theme.styles[props.btnStyle].hoverFlood}
    border: 1px solid ${props => props.theme.styles[props.btnStyle].hoverFlood}
    cursor: not-allowed;
  }
`;
const SSpinner = styled.div`
  width: ${(props: Props) => `${props.size}px`}
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
  margin: 100px auto;

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: ${(props: Props) =>
      `sk-bounce ${props.animationSpeed}s infinite ease-in-out`};
    animation: ${(props: Props) =>
      `sk-bounce ${props.animationSpeed}s infinite ease-in-out`};
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  children,
  size = 40,
  animationSpeed = 2,
  theme,
}) => (
  <SSpinner size={size} animationSpeed={animationSpeed} theme={theme}>
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </SSpinner>
);
