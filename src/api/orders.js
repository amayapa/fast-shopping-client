import axios from "axios";
import { API_PATH } from "../config";

export const finishOrder = async (order) =>
  await axios.post(`${API_PATH}/orders`, order);
