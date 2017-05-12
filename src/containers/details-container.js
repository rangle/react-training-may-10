import { connect } from 'react-redux';
import { RobotDetails } from '../components/robot-details';
import { createSelector } from 'reselect';

const mapStateToProps = (state) => {
  return {
    robots: state.robots,
  }
};

export default connect(mapStateToProps)(RobotDetails);
