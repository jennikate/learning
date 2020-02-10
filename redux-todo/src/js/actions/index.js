//this is where we define our redux actions
// you should have set the 'type' in action-types, and then import it to here

import { ADD_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}