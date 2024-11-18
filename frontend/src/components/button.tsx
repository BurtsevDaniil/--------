import styled from "styled-components";

export const CustomButton = styled.button<{
  width?: "auto" | string;
  maxwidth?: string;
}>`
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : "150px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  max-height: 30px;
  height: 100%;
`;
