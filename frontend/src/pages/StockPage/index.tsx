import { FC, useEffect, useState } from "react";
import { Page } from "../../components/page";
import { useAppSelector } from "../../store/store";
import { StocksContent } from "../../components/Stocks/stocksContent";
import { StocksControlPanel } from "../../components/Stocks/stocksControlPanel";
import { StockObject } from "../../const/types";

export const StockPage: FC = () => {
  const { stocks } = useAppSelector((state) => state.content);
  const [filtered, setFiltered] = useState<StockObject[] | undefined>(stocks);

  useEffect(() => {
    setFiltered(stocks);
  }, [stocks]);

  return (
    <Page>
      {!filtered ? (
        <h3>Пожалуйста, подождите. Остатки загружаются.</h3>
      ) : (
        <StocksContent stocks={filtered} />
      )}
      <StocksControlPanel setFiltered={setFiltered} />
    </Page>
  );
};
