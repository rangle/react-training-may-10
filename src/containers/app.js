import React, { Component } from 'react';
import { CardsContainer } from './cards-container';
import { connect } from 'react-redux';
import { searchAction } from '../actions/query';
import { robotsFetchAction } from '../actions/robots';


const getFilteredRobots = (robots, query) => {
  return robots.filter(robot => {
    return robot.name
      .toLowerCase()
      .includes(query.toLowerCase());
  });
}

const mapStateToProps = (state) => {
  return {
    robots: state.robots,
    query: state.query,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => dispatch(searchAction(query)),
    onLoadData: () => dispatch(robotsFetchAction()),
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const { robots, query, onSearch } = this.props;

    return (
      <CardsContainer
        robots={getFilteredRobots(robots, query)}
        query={query}
        onSearch={onSearch}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);