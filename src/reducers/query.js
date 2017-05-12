const queryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload.searchTerm || '';
    case 'ROBOTS_FETCH':
      return '';
    default:
      return state;
  }
};

export default queryReducer;
