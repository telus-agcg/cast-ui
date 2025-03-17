import type { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
}

const GoodButton = styled.button`
  padding: 1rem;
  background: red;
`;

export const TestButton = ({ children }: ButtonProps): ReactNode => {
  return <GoodButton>{children}</GoodButton>;
};
