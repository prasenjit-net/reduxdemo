import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import { save, load } from "redux-localstorage-simple";

const saveMiddleware = save();
const loadMiddleware = load();
const store = createStore(
  reducer,
  loadMiddleware,
  composeWithDevTools(applyMiddleware(saveMiddleware))
);

export default store;
