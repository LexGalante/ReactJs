import { createStore } from "redux";
import reducers from "./reducers";

export default function reduxStore(state = {}) {
    return createStore(reducers, state);
}
