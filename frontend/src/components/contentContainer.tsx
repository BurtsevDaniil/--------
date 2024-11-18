import { FC } from "react";
import styled from "styled-components";

export const ContentContainer = styled.table`
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  border: 1px solid black;
`;

export const ContentRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentCell = styled.td`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  border: 1px solid;
`;

export const ContentHeaderCell = styled.th`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  border: 1px solid;
`;

export const CustomWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-self: center;
  width: 100%;
`;

export const InputFieldsContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InputField = styled.input``;

export const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FilterMenu = styled.select``;

export const ContentHeader: FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <ContentRow>
      {headers.map((header, i) => (
        <ContentHeaderCell key={i}>{header}</ContentHeaderCell>
      ))}
    </ContentRow>
  );
};
