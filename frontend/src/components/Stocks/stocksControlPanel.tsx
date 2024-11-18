import { FC, useRef, useState } from "react";
import { ControlPanelContainer } from "../controlPanel";
import { CustomButton } from "../button";
import { makeRequest, StockIncDecReq } from "../../utils/makeRequest";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setStoredStocks } from "../../store/content";
import {
  ItemObjectKeys,
  ShopObjectKeys,
  StockObject,
  StockObjectKeys,
} from "../../const/types";
import {
  CustomWrap,
  ControlRow,
  InputFieldsContainer,
  InputField,
  FilterMenu,
} from "../contentContainer";

type CustomFormType = HTMLFormElement & {
  shopId: HTMLInputElement;
  plu: HTMLInputElement;
  amount: HTMLInputElement;
};

type CustomOptData = undefined | typeof ShopObjectKeys | typeof ItemObjectKeys;

type CustomFieldData = undefined | number[] | string[];

type StocksControlPanelProps = {
  setFiltered: React.Dispatch<React.SetStateAction<StockObject[] | undefined>>;
};

export const StocksControlPanel: FC<StocksControlPanelProps> = ({
  setFiltered,
}) => {
  const addFormRef = useRef<CustomFormType>(null);
  const increaseFormRef = useRef<CustomFormType>(null);
  const selectFormRef = useRef<HTMLSelectElement>(null);
  const selectDataFormRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();
  const { stocks } = useAppSelector((state) => state.content);
  const [filterSelectOpts, setFilterSelectOpts] = useState<CustomOptData>();
  const [filterFieldData, setFilterFieldData] = useState<CustomFieldData>();

  const onAddClick = async () => {
    const form = addFormRef.current;
    if (!form) {
      return;
    }
    const createData: StockIncDecReq = {
      item: form.plu.value,
      amount: Number(form.amount.value),
      shop: Number(form.shopId.value),
    };

    await makeRequest("stock/add", createData);
    const stocks = await makeRequest("stock/getAllStocks", {});
    if (!stocks) {
      return;
    }
    dispatch(setStoredStocks(stocks));
  };

  const onIncDecClick = async (type: "inc" | "dec") => {
    const form = increaseFormRef.current;
    if (!form) {
      return;
    }
    const incDecData: StockIncDecReq = {
      item: form.plu.value,
      amount: Number(form.amount.value),
      shop: Number(form.shopId.value),
    };
    if (type === "inc") {
      await makeRequest("stock/increase", incDecData);
    } else {
      await makeRequest("stock/decrease", incDecData);
    }

    const stocks = await makeRequest("stock/getAllStocks", {});
    if (!stocks) {
      return;
    }
    dispatch(setStoredStocks(stocks));
  };

  const onFilterClick = () => {
    const data = selectDataFormRef.current;
    const form = selectFormRef.current;
    if (!data || !form || !stocks) {
      return;
    }
    console.log(data.value);
    switch (form.value) {
      case "id":
        setFiltered(
          stocks.filter((stock) => {
            return stock.id === Number(data.value);
          })
        );
        break;
      case "item":
        setFiltered(
          stocks.filter((stock) => {
            return stock.item === data.value;
          })
        );
        break;
      case "shop":
        setFiltered(
          stocks.filter((stock) => {
            return stock.shop === Number(data.value);
          })
        );
        break;
      case "remainder":
        setFiltered(
          stocks.filter((stock) => {
            return stock.remainder === Number(data.value);
          })
        );
        break;
      case "orderedAmount":
        setFiltered(
          stocks.filter((stock) => {
            return (
              stock.orderedAmount ===
              (Number(data.value) !== 0 ? Number(data.value) : undefined)
            );
          })
        );
        break;
    }
  };

  const onFilterChange = () => {
    const form = selectFormRef.current;
    if (!stocks || !form) {
      return;
    }
    switch (form.value) {
      case "id":
        setFilterSelectOpts(undefined);
        setFilterFieldData(stocks.map((stock) => stock.id));
        break;
      case "item":
        setFilterSelectOpts(ItemObjectKeys);
        setFilterFieldData(stocks.map((stock) => stock.item));
        break;
      case "shop":
        setFilterSelectOpts(ShopObjectKeys);
        setFilterFieldData(stocks.map((stock) => stock.shop));
        break;
      case "remainder":
        setFilterSelectOpts(undefined);
        setFilterFieldData([
          ...new Set(stocks.map((stock) => stock.remainder)),
        ]);
        break;
      case "orderedAmount":
        setFilterSelectOpts(undefined);
        setFilterFieldData([
          ...new Set(stocks.map((stock) => stock.orderedAmount ?? 0)),
        ]);
        break;
    }
  };

  return (
    <ControlPanelContainer>
      {stocks && (
        <CustomWrap>
          <ControlRow>
            <InputFieldsContainer ref={addFormRef}>
              <InputField
                type="number"
                placeholder="Введите id магазина"
                name="shopId"
              />
              <InputField
                type="text"
                placeholder="Введите plu товара"
                name="plu"
              />
              <InputField
                type="number"
                placeholder="Введите размер остатка"
                name="amount"
              />
            </InputFieldsContainer>
            <CustomButton onClick={() => onAddClick()}>
              Создать остаток
            </CustomButton>
          </ControlRow>
          <ControlRow>
            <InputFieldsContainer ref={increaseFormRef}>
              <FilterMenu name="shopId">
                {stocks.map((stock, i) => (
                  <option key={i} value={stock.shop}>
                    {stock.shop}
                  </option>
                ))}
              </FilterMenu>
              <FilterMenu name="plu">
                {stocks.map((stock, i) => (
                  <option key={i} value={stock.item}>
                    {stock.item}
                  </option>
                ))}
              </FilterMenu>
              <InputField
                type="number"
                placeholder="На сколько увеличить"
                name="amount"
              />
            </InputFieldsContainer>
            <CustomButton onClick={() => onIncDecClick("inc")}>
              Увеличить остаток
            </CustomButton>
            <CustomButton onClick={() => onIncDecClick("dec")}>
              Уменьшить остаток
            </CustomButton>
          </ControlRow>
          <ControlRow>
            <InputFieldsContainer>
              <FilterMenu ref={selectFormRef} onChange={() => onFilterChange()}>
                {StockObjectKeys.map((key, i) => (
                  <option value={key} key={i}>
                    {key}
                  </option>
                ))}
              </FilterMenu>
              {filterSelectOpts && (
                <FilterMenu>
                  {filterSelectOpts.map((opt, i) => (
                    <option value={opt} key={i}>
                      {opt}
                    </option>
                  ))}
                </FilterMenu>
              )}
              {filterFieldData && (
                <FilterMenu ref={selectDataFormRef}>
                  {filterFieldData.map((opt, i) => (
                    <option value={opt} key={i}>
                      {opt}
                    </option>
                  ))}
                </FilterMenu>
              )}
            </InputFieldsContainer>
            <CustomButton onClick={() => onFilterClick()}>
              Применить фильтр
            </CustomButton>
            <CustomButton onClick={() => setFiltered(stocks)}>
              Сбросить фильтр
            </CustomButton>
          </ControlRow>{" "}
        </CustomWrap>
      )}
    </ControlPanelContainer>
  );
};
