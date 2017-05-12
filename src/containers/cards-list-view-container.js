import { connect } from 'react-redux';
import { searchAction } from '../actions/query';
import { robotsFetchAction } from '../actions/robots';
import { CardsListView } from '../components/cards-list-view';

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
