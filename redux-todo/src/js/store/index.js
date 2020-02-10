// src/js/store/index.js

// reducers produce the state of your application

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;