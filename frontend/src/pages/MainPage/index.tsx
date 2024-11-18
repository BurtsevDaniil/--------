import { FC, useRef, useState } from "react";
import { Page } from "../../components/page";
import { ControlPanelContainer } from "../../components/controlPanel";
import {
  ControlRow,
  InputField,
  InputFieldsContainer,
} from "../../components/contentContainer";
import { CustomButton } from "../../components/button";
import { makeRequest } from "../../utils/makeRequest";
import { API_URL_TWO } from "../../const/const";

export const MainPage: FC = () => {
  const [obj, setObj] = useState<Object | Object[]>({});
  const formRef = useRef<HTMLFormElement>(null);

  const getItemByPlu = async () => {
    const text = prompt("Введите plu товара");
    if (!text) {
      return;
    }
    const item = await makeRequest("item/getByPlu", { plu: text });
    setObj(item);
  };

  const getItemByName = async () => {
    const text = prompt("Введите название товара");
    if (!text) {
      return;
    }
    const item = await makeRequest("item/getByName", { name: text });
    setObj(item);
  };

  const getHistoryByShopId = async () => {
    const text = prompt("Введите id магазина");
    if (!text) {
      return;
    }
    const history = await makeRequest(
      "history/getByShopId",
      {
        shopId: Number(text),
      },
      API_URL_TWO
    );
    setObj(history);
  };

  const getHistoryByItemPlu = async () => {
    const text = prompt("Введите plu товара");
    if (!text) {
      return;
    }
    const history = await makeRequest(
      "history/getByItemPlu",
      {
        plu: text,
      },
      API_URL_TWO
    );
    setObj(history);
  };

  const getHistoryByDate = async () => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    if (!form.dateStarted.value || !form.dateEnded.value) {
      return;
    }
    const histories = await makeRequest(
      "history/getByDate",
      {
        dateStarted: new Date(form.dateStarted.value),
        dateEnded: new Date(form.dateEnded.value),
      },
      API_URL_TWO
    );
    setObj(histories);
  };

  return (
    <Page>
      <h2>Добро пожаловать в тестовое задание 1</h2>
      <h3>Тут можно проверить единичные запросы</h3>
      <ControlPanelContainer>
        <ControlRow>
          <CustomButton
            maxwidth="200px"
            onClick={() => {
              getItemByPlu();
            }}
          >
            Получить товар по plu
          </CustomButton>
          <CustomButton
            maxwidth="200px"
            onClick={() => {
              getItemByName();
            }}
          >
            Получить товар по названию
          </CustomButton>
        </ControlRow>
        <ControlRow>
          <CustomButton
            maxwidth="200px"
            onClick={() => {
              getHistoryByShopId();
            }}
          >
            Получить историю по shopId
          </CustomButton>
          <CustomButton
            maxwidth="200px"
            onClick={() => {
              getHistoryByItemPlu();
            }}
          >
            Получить историю по plu
          </CustomButton>
          <InputFieldsContainer ref={formRef}>
            <InputField type="date" name="dateStarted" />
            <InputField type="date" name="dateEnded" />
          </InputFieldsContainer>
          <CustomButton
            maxwidth="200px"
            onClick={() => {
              getHistoryByDate();
            }}
          >
            Получить историю по Date
          </CustomButton>
          <CustomButton maxwidth="200px" onClick={() => {}}>
            Получить историю по action
          </CustomButton>
        </ControlRow>
      </ControlPanelContainer>
      <div>{JSON.stringify(obj)}</div>
    </Page>
  );
};
