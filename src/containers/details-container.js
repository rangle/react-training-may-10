import { connect } from 'react-redux';
import { RobotDetails } from '../components/robot-details';
import { createSelector } from 'reselect';

const getRobotById = (robots, id) => {
  return robots;
}

const selectRobotById = createSelector(
  [
    state => state.robots,
    state => state.query,
  ],
  getRobotById,
);

const mapStateToProps = (state) => {
  return {
    robot: selectRobotById(state),
  }
};

export default connect(mapStateToProps)(RobotDetails);
