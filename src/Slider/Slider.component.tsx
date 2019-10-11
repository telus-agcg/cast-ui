import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import InputRange, { InputRangeProps } from 'react-input-range'
import 'react-input-range/lib/css/index.css'

export interface Props extends InputRangeProps {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SInputRangeWrapper = styled.div`
  margin-bottom: 40px;
  .input-range {
    height: 18px;
  }
  .input-range__slider {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    width: 12px;
    height: 12px;
  }
  .input-range__track--active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .input-range__label--min .input-range__label-container,
  .input-range__label--max .input-range__label-container {
    display: none;
  }
  .input-range__label-container {
    color: ${({ theme }) => theme.typography.color};
  }
`

export const Slider = ({theme, ...props}: Props) => 
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SInputRangeWrapper>
      <InputRange {...props}/>
    </SInputRangeWrapper>
  </ThemeProvider>
;

export default Slider;
