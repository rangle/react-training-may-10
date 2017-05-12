const robotsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ROBOTS_FETCH':
      return action.payload.results;
    default:
      return state;
  }
}

export default robotsReducer