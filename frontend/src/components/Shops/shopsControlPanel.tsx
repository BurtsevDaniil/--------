import { FC } from "react";
import { ControlPanelContainer } from "../controlPanel";
import { CustomButton } from "../button";
import { makeRequest } from "../../utils/makeRequest";
import { useAppDispatch } from "../../store/store";
import { setStoredShops } from "../../store/content";
import { ControlRow, CustomWrap } from "../contentContainer";

export const ShopsControlPanel: FC = () => {
  const dispatch = useAppDispatch();
  const handleAdd = async () => {
    const text = prompt("Пожалуйста, введите название магазина.");
    if (!text) {
      return;
    }
    await makeRequest("shop/add", { name: text });
    const shops = await makeRequest("shop/getAllShops", {});
    if (!shops) {
      return;
    }
    dispatch(setStoredShops(shops));
  };
  return (
    <ControlPanelContainer>
      <CustomWrap>
        <ControlRow>
          <CustomButton onClick={() => handleAdd()}>Add</CustomButton>
        </ControlRow>
      </CustomWrap>
    </ControlPanelContainer>
  );
};
