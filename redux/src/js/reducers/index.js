import { ADD_ARTICLE } from "../constants/action-types";

// this is where we handle redux state

const initialState = {
  articles: []
};

// pass initialState as a default param
function rootReducer(state = initialState, action) {
  
  // if the action type is ADD_ARTICLE
  if (action.type === ADD_ARTICLE) {
    // return a new state with Object.assign (new JavaScript object)
    // this way we can keep the original state unaltered
    return Object.assign({}, state, {
      // then we add to the new array
      articles: state.articles.concat(action.payload)
    })
  }
  // our resulting state is a copy of the initial state
  return state;
}

export default rootReducer;