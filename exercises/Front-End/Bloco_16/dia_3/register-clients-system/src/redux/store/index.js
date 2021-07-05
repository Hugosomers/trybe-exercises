import { createStore } from "redux";
import rootReducer from '../reducer';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootReducer, extension);

export default store;
