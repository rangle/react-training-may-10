import { getRobots } from '../util/api';

export const robotsFetchAction = () => {
  return (dispatch) => {
    dispatch({ type: 'ROBOTS_FETCH_PENDING' });

    getRobots()
      .then((robots) => dispatch({
        type: 'ROBOTS_FETCH',
        payload: {
          results: robots,
        },
      }))
      .catch(dispatch({ type: 'ROBOTS_FETCH_FAILED' }))
  }
}