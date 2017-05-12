import React, { Component } from 'react';
import CardsListViewContainer from './cards-list-view-container';
import { robotsFetchAction } from '../actions/robots';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import DetailsContainer from './details-container';

class App extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={CardsListViewContainer}/>
        <Route path="/details/:id" component={DetailsContainer}/>
      </div>
    );
  }
}

export default connect(
  null, {
  onLoadData: robotsFetchAction,
})(App);
