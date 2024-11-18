import { FC } from "react";
import { ControlPanelContainer } from "../controlPanel";
import { CustomButton } from "../button";
import { makeRequest } from "../../utils/makeRequest";
import { useAppDispatch } from "../../store/store";
import { setStoredItems } from "../../store/content";
import { ControlRow, CustomWrap } from "../contentContainer";

export const ItemsControlPanel: FC = () => {
  const dispatch = useAppDispatch();
  const handleAdd = async () => {
    const text = prompt("Пожалуйста, введите название продукта.");
    if (!text) {
      return;
    }
    await makeRequest("item/add", { name: text });
    const items = await makeRequest("item/getAllItems", {});
    if (!items) {
      return;
    }
    dispatch(setStoredItems(items));
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
