import { ItemPage } from "../pages/ItemPage";
import { MainPage } from "../pages/MainPage";
import { ShopPage } from "../pages/ShopPage";
import { StockPage } from "../pages/StockPage";

export type RouteAlias = "shops" | "items" | "stocks" | "main";

export interface Route {
  path: string;
  component: React.ReactElement;
  alias: RouteAlias;
}

export const routes: Route[] = [
  {
    path: "/",
    component: <MainPage />,
    alias: "main",
  },
  {
    path: "/shops",
    component: <ShopPage />,
    alias: "shops",
  },
  {
    path: "/items",
    component: <ItemPage />,
    alias: "items",
  },
  {
    path: "/stocks",
    component: <StockPage />,
    alias: "stocks",
  },
];
