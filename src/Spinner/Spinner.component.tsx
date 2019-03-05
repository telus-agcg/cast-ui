import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  backgroundColor: string;
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'red'
   **/
  borderColor: string;
  /**
   * Adjust spinner size in pixels
   *
   * @default 40px
   **/
  size: number;
  /**
   * Set border width
   *
   * @default '2'
   **/
  borderWidth: number;
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
    border: ${(props: Props) =>
      `${props.borderWidth}px solid
      ${props.theme.colors[props.borderColor!] ||
        props.borderColor!.toString()}`};
    border-top-color: #07d;
    animation: spinner .6s linear infinite;
  }

    
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  backgroundColor = 'lightGray',
  borderColor = 'red',
  borderWidth = 2,
  size = 40,
  animationSpeed = 2,
  transitionType = 'ease-in-out',
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
