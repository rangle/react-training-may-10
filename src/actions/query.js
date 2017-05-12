export const searchAction = (query) => {
  return {
    type: 'SEARCH',
    payload: {
      searchTerm: query,
    }
  }
}