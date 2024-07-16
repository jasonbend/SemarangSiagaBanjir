import { createStore } from "redux";
import { aboutReducer } from "./reducers/aboutReducer";

const store = createStore(aboutReducer);

export default store;
