import React from 'react'
import { connect } from 'react-redux'

//mapStateToProps allows us to connect state.articles (from our redux store) with this component
const mapStateToProps = state => {
  return { articles: state.articles }
}

// this receives the prop articles, which is a copy of the articles array from the Redux state
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(elem => (
      <li key={elem.id}>{elem.title}</li>
    ))}
  </ul>
)

// List is the result of connecting teh stateless component ConnectedList with the Redux store
const List = connect(mapStateToProps)(ConnectedList)

export default List

//remember state in redux comes from the reducers