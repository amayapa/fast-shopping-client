import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductsReducer from "./products/products.reducer";
import OrderReducer from "./order/order.reducer";
import OrderlineReducer from "./orderline/orderline.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

export default persistCombineReducers(persistConfig, {
  products: ProductsReducer,
  order: OrderReducer,
  orderlines: OrderlineReducer,
});
