import { connect } from 'react-redux';
import { searchAction } from '../actions/query';
import { robotsFetchAction } from '../actions/robots';
import { CardsListView } from '../components/cards-list-view';
import { createSelector } from 'reselect';

const getFilteredRobots = (robots, query) => {
  return robots.filter(robot => {
    return robot.name
      .toLowerCase()
      .includes(query.toLowerCase());
  });
}

const filteredRobotsSelector = createSelector(
  [
    state => state.robots,
    state => state.query,
  ],
  getFilteredRobots,
);

const mapStateToProps = (state) => {
  return {
    robots: filteredRobotsSelector(state),
    query: state.query,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => dispatch(searchAction(query)),
    onLoadData: () => dispatch(robotsFetchAction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsListView);
