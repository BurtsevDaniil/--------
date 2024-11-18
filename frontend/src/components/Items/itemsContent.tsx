import { FC } from "react";
import { ItemObject, ItemObjectKeys } from "../../const/types";
import {
  ContentCell,
  ContentContainer,
  ContentHeader,
  ContentRow,
} from "../contentContainer";

type ItemsContentProps = {
  items: ItemObject[];
};

export const ItemsContent: FC<ItemsContentProps> = ({ items }) => {
  return (
    <ContentContainer>
      <thead>
        <ContentHeader headers={ItemObjectKeys} />
      </thead>
      {items.map((item, i) => (
        <tbody key={i}>
          <ContentRow>
            <ContentCell>{item.plu}</ContentCell>
            <ContentCell>{item.name}</ContentCell>
          </ContentRow>
        </tbody>
      ))}
    </ContentContainer>
  );
};
