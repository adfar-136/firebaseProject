import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

const storeee = createStore(reducers,applyMiddleware(thunk));
export default storeee