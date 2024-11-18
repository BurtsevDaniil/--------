import { FC } from "react";
import { Page } from "../../components/page";
import { useAppSelector } from "../../store/store";
import { ShopsContent } from "../../components/Shops/shopsContent";
import { ShopsControlPanel } from "../../components/Shops/shopsControlPanel";

export const ShopPage: FC = () => {
  const { shops } = useAppSelector((state) => state.content);

  return (
    <Page>
      {!shops ? (
        <h3>Пожалуйста, подождите. Товары загружаются.</h3>
      ) : (
        <ShopsContent shops={shops} />
      )}
      <ShopsControlPanel />
    </Page>
  );
};
