import axios, { AxiosError } from "axios";
import {
  Actions,
  HistoryObject,
  ItemObject,
  ShopObject,
  StockObject,
} from "../const/types";
import { API_URL } from "../const/const";

type Requests = {
  "item/getAllItems": {
    req: {};
    res: ItemObject[];
  };
  "item/add": {
    req: { name: string };
    res: undefined;
  };
  "item/getByPlu": {
    req: { plu: string };
    res: ItemObject;
  };
  "item/getByName": {
    req: { name: string };
    res: ItemObject;
  };
  "shop/getAllShops": {
    req: {};
    res: ShopObject[];
  };
  "shop/add": {
    req: { name: string };
    res: {};
  };
  "stock/getAllStocks": {
    req: {};
    res: StockObject[];
  };
  "stock/add": {
    req: StockAddReq;
    res: {};
  };
  "stock/increase": {
    req: StockIncDecReq;
    res: {};
  };
  "stock/decrease": {
    req: StockIncDecReq;
    res: {};
  };
  "stock/getByPlu": {
    req: { plu: string };
    res: {};
  };
  "stock/getByShopId": {
    req: { id: number };
    res: {};
  };
  "history/getByShopId": {
    req: { shopId: number };
    res: HistoryObject;
  };
  "history/getByItemPlu": {
    req: { plu: string };
    res: HistoryObject;
  };
  "history/getByDate": {
    req: { dateStarted: Date; dateEnded: Date };
    res: HistoryObject;
  };
  "history/getByAction": {
    req: { action: typeof Actions };
    res: HistoryObject;
  };
};

export type StockAddReq = { shop: number; item: string; amount: number };
export type StockIncDecReq = { shop: number; item: string; amount: number };
export type StockGetByPlu = { plu: string };
export type StockGetByShopId = { id: number };

export type EndPoints = keyof Requests;
/**
 * Переопределение запроса для более удобной работы с ошибками и доступными endpoint.
 */
export const makeRequest = async <Method extends EndPoints>(
  req: Method,
  params: Requests[Method]["req"],
  url: string = API_URL
): Promise<Requests[Method]["res"]> => {
  try {
    const result = await axios.post(`${url}/${req}`, params);

    return result.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      switch (e.response?.status) {
        case 409:
          alert("Такой остаток уже существует");
          break;
        case 422:
          alert("Неправильный shopId/plu");
          break;
        case 400:
          alert("Остаток не может быть меньше 0");
          break;
        case 404:
          alert("Искомая запись не найдена");
          break;
      }
      console.log(e.response?.data);
    }
  }
};
