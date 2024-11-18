import { FC } from "react";
import { StockObject, StockObjectKeys } from "../../const/types";
import {
  ContentCell,
  ContentContainer,
  ContentHeader,
  ContentRow,
} from "../contentContainer";

type StocksContentProps = {
  stocks: StockObject[];
};

export const StocksContent: FC<StocksContentProps> = ({ stocks }) => {
  return (
    <ContentContainer>
      <thead>
        <ContentHeader headers={StockObjectKeys} />
      </thead>
      {stocks.map((stock, i) => (
        <tbody key={i}>
          <ContentRow>
            <ContentCell>{stock.id}</ContentCell>
            <ContentCell>{stock.item}</ContentCell>
            <ContentCell>{stock.shop}</ContentCell>
            <ContentCell>{stock.remainder}</ContentCell>
            <ContentCell>
              {!stock.orderedAmount ? 0 : stock.orderedAmount}
            </ContentCell>
          </ContentRow>
        </tbody>
      ))}
    </ContentContainer>
  );
};
