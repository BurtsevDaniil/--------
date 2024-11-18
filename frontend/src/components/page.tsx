import { FC } from "react";
import styled from "styled-components";
import { Navigation } from "./navigation";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

type PageProps = {
  children: React.ReactNode;
};
export const Page: FC<PageProps> = ({ children }) => {
  return (
    <PageContainer>
      <Navigation />
      {children}
    </PageContainer>
  );
};
