import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  backgroundColor?: string;
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'blue'
   **/
  borderColor?: string;
  /**
   * Adjust spinner size in pixels
   *
   * @default 50
   **/
  size?: number;
  /**
   * Set border width
   *
   * @default 3
   **/
  borderWidth?: number;
  /**
   * Adjust animation speed in seconds
   *
   * @default 1
   **/
  animationSpeed?: number;
  /**
   * Set transition type
   *
   * @default 'linear'
   **/
  transitionType?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSpinner = styled.div`
  width: ${(props: Props) => `${props.size}px`}
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
  margin: auto; 
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props: Props) => `${props.size}px`}
    height: ${(props: Props) => `${props.size}px`};
    margin-top: ${(props: Props) => `-${props.size! / 2}px`};
    margin-left: ${(props: Props) => `-${props.size! / 2}px`};
    border-radius: 50%;
    border: ${(props: Props) =>
      `${props.borderWidth}px solid
      ${props.theme.colors[props.backgroundColor!] ||
        props.backgroundColor!.toString()}`};
    border-top-color: ${(props: Props) =>
      `${props.theme.colors[props.borderColor!] ||
        props.borderColor!.toString()}`};
    animation: ${(props: Props) =>
      `spinner ${props.animationSpeed}s ${props.transitionType} infinite`};
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  backgroundColor = 'lightGray',
  borderColor = 'blue',
  borderWidth = 3,
  size = 50,
  animationSpeed = 1,
  transitionType = 'linear',
  ...props
}) => (
  <SSpinner
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    borderWidth={borderWidth}
    size={size}
    animationSpeed={animationSpeed}
    transitionType={transitionType}
    {...props}
  />
);
