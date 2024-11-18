import { Route, Routes } from "react-router-dom";
import { routes } from "./const/routes";
import { makeRequest } from "./utils/makeRequest";
import {
  setStoredItems,
  setStoredShops,
  setStoredStocks,
} from "./store/content";
import { useEffect } from "react";
import { useAppDispatch } from "./store/store";

const App = () => {
  const dispatch = useAppDispatch();
  const getItems = async () => {
    const items = await makeRequest("item/getAllItems", {});
    if (!items) {
      return;
    }
    dispatch(setStoredItems(items));
  };
  const getShops = async () => {
    const shops = await makeRequest("shop/getAllShops", {});
    if (!shops) {
      return;
    }
    dispatch(setStoredShops(shops));
  };
  const getStocks = async () => {
    const stocks = await makeRequest("stock/getAllStocks", {});
    if (!stocks) {
      return;
    }
    dispatch(setStoredStocks(stocks));
  };

  useEffect(() => {
    getItems();
    getShops();
    getStocks();
  }, []);
  return (
    <>
      <Routes>
        {routes.map(({ path, component }, i) => (
          <Route element={component} key={i} path={path} />
        ))}
      </Routes>
    </>
  );
};

export default App;
