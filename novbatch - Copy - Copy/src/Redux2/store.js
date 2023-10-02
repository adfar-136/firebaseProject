import { createStore } from "redux";
import backgroundReducer from "./reducer";

const storee = createStore(backgroundReducer);
export default storee