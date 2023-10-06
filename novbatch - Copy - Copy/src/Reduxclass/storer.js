import { createStore } from "redux";
import counterReducer from "./reducer";

const storer = createStore(counterReducer);
export default storer;