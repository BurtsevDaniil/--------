export interface ShopObject {
  id: number;
  name: string;
}

export const ShopObjectKeys: Array<keyof ShopObject> = ["id", "name"];

export interface ItemObject {
  plu: string;
  name: string;
}

export const ItemObjectKeys: Array<keyof ItemObject> = ["plu", "name"];

export type StockObject = {
  id: number;
  shop: number;
  item: string;
  remainder: number;
  orderedAmount: number;
};

export const StockObjectKeys: Array<keyof StockObject> = [
  "id",
  "item",
  "shop",
  "remainder",
  "orderedAmount",
];

export const Actions = {
  addRemainder: "add_remainder",
  increaseRemainder: "increase_remainder",
  decreaseRemainder: "decrease_remainder",
  placeOrder: "place_order",
  resolveOrder: "resolve_order",
};

export type HistoryObject = {
  id: number;
  shopId: number;
  plu: string;
  date: Date;
  action: typeof Actions;
};
