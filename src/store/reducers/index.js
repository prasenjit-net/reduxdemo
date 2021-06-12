import { combineReducers } from "redux";
import { bankingReducer } from "./banking";
import { loginReducer } from "./login";

const reducer = combineReducers({
    login: loginReducer,
    banking: bankingReducer
});

export default reducer;