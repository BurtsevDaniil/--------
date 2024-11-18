import { FC } from "react";
import { ShopObject, ShopObjectKeys } from "../../const/types";
import {
  ContentCell,
  ContentContainer,
  ContentHeader,
  ContentRow,
} from "../contentContainer";

type ShopsContentProps = {
  shops: ShopObject[];
};

export const ShopsContent: FC<ShopsContentProps> = ({ shops }) => {
  return (
    <ContentContainer>
      <thead>
        <ContentHeader headers={ShopObjectKeys} />
      </thead>
      {shops.map((shop, i) => (
        <tbody key={i}>
          <ContentRow>
            <ContentCell>{shop.id}</ContentCell>
            <ContentCell>{shop.name}</ContentCell>
          </ContentRow>
        </tbody>
      ))}
    </ContentContainer>
  );
};
