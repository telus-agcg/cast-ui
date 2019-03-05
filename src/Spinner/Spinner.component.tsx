import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Spinner color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
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
   * Select transition type
   *
   * @default 'ease-in-out'
   **/
  transitionType: string;
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
    margin-top: ${(props: Props) => `-${props.size / 2}px`};
    margin-left: ${(props: Props) => `-${props.size / 2}px`};
    border-radius: 50%;
    border: 1px solid #ccc;
    border-top-color: #07d;
    animation: spinner .6s linear infinite;
  }

    
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  size = 40,
  animationSpeed = 2,
  transitionType = 'ease-in-out',
  theme,
}) => (
  <SSpinner
    color={color}
    size={size}
    animationSpeed={animationSpeed}
    transitionType={transitionType}
    theme={theme}
  />
);
