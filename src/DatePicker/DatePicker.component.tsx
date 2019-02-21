import * as React from 'react';
import styled from 'styled-components';
import { Input } from '../';

type Props = {
  /**
   * Select DatePicker color. Must be a color defined in theme colors
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

const SDatePicker = styled.div`
  width: ${(props: Props) => `${props.size}px`}
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
`;

export const DatePicker: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  size = 40,
  animationSpeed = 2,
  transitionType = 'ease-in-out',
  theme,
}) => (
  <SDatePicker
    color={color}
    size={size}
    animationSpeed={animationSpeed}
    transitionType={transitionType}
    theme={theme}>
    <Input id="datepickerInput" type="text" inputSize="md" />
  </SDatePicker>
);
