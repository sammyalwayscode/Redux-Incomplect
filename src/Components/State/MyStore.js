import { createStore } from "redux";
import { reducer } from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const MyStore = createStore(reducer, composeWithDevTools());
