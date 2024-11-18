import axios from "axios";
import { SRV2_ADDR } from "../../config/enviroment";

export const saveHistory = async (data) => {
    await axios.post(`http://${SRV2_ADDR}/history/add`, data, {headers:{"Content-Type" : "application/json"}});
}