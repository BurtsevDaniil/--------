import { FC } from "react";
import { Page } from "../../components/page";
import { ItemsContent } from "../../components/Items/itemsContent";
import { ItemsControlPanel } from "../../components/Items/itemsControlPanel";
import { useAppSelector } from "../../store/store";

export const ItemPage: FC = () => {
  const { items } = useAppSelector((state) => state.content);

  return (
    <Page>
      {!items ? (
        <h3>Пожалуйста, подождите. Магазины загружаются.</h3>
      ) : (
        <ItemsContent items={items} />
      )}
      <ItemsControlPanel />
    </Page>
  );
};
