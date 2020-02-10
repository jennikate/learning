// src/js/store/index.js

// this is where we setup to use redux store

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;