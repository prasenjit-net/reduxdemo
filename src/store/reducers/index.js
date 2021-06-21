import { combineReducers } from "redux";
import { bankingReducer } from "./banking";
import { loginReducer } from "./login";
import { sudokuReducer } from "./sudoku";

const reducer = combineReducers({
    login: loginReducer,
    banking: bankingReducer,
    sudoku: sudokuReducer
});

export default reducer;