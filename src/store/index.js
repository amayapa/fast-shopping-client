import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { persistStore } from "redux-persist";
import reduxReset from "redux-reset";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware), reduxReset())
);

const persistor = persistStore(store);
const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch();

export { useSelector, useDispatch, persistor, store };
