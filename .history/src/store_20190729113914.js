import { createStore } from "redux";
import reducers from "./reducers";

export default function configureStore(state = {}) {
    return createStore(reducers, state);
}
