import { FC } from "react";
import { routes } from "../const/routes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "./button";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin: 0 0 10px 0;
`;

export const Navigation: FC = () => {
  const navigate = useNavigate();
  return (
    <NavigationContainer>
      {routes.map(({ path, alias }, i) => (
        <CustomButton
          onClick={() => {
            navigate(path);
          }}
          key={i}
        >
          to {alias}
        </CustomButton>
      ))}
    </NavigationContainer>
  );
};
