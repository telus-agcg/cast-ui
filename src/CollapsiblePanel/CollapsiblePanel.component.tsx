import React, { useState, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { KeyboardArrowDownIcon, KeyboardArrowRightIcon } from '@icons';

interface CollapsiblePanelProps {
  title: string;
  endContent?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

const PanelContainer = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  padding: 4px;
  background-color: ${(props: any) => props.theme.CollapsiblePanel.background} ;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 18px;
`;

const EndContentWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 0px 20px;
  font-size: 14px;
`;

const ArrowDownIcon = styled(KeyboardArrowDownIcon)`
  color: ${(props) => props.theme.colors.primary};
`
const ArrowRightIcon = styled(KeyboardArrowRightIcon)`
  color: ${(props) => props.theme.colors.primary};
`

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({
  title,
  endContent,
  children,
  defaultOpen
}) => {

  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <PanelContainer>
      <Header onClick={togglePanel}>
        <TitleGroup>
          {isOpen ? <ArrowDownIcon width={24} height={24} /> : <ArrowRightIcon width={24} height={24}/>}
          <span>{title}</span>
        </TitleGroup>
        {endContent && (
          <EndContentWrapper onClick={(e) => e.stopPropagation()}>
            {endContent}
          </EndContentWrapper>
        )}
      </Header>
      {isOpen && <Content>{children}</Content>}
    </PanelContainer>
  );
};

export default CollapsiblePanel;
