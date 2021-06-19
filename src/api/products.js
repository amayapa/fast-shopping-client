import axios from "axios";
import { API_PATH } from "../config";

const fetchAllProducts = async () => await axios.get(`${API_PATH}/products`);

export { fetchAllProducts };
