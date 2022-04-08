import { createStore } from "redux";
import { reducerR } from "./reducer";
export const store = createStore(reducerR);