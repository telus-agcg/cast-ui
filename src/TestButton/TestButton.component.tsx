import type { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  num: number;
}

const GoodButton = styled.button`
  padding: 1rem;
  background: red;
`;

export const TestButton = ({ num }: ButtonProps): ReactNode => {
  return <GoodButton>{num}</GoodButton>;
};
