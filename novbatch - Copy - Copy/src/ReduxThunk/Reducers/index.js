import { combineReducers } from "redux";
import moneyReducer from "./reducer";

const reducers= combineReducers({
    money:moneyReducer,
})
export default reducers