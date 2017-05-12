import queryReducer from './query';

describe('Query Reducer', () => {
  it('should update on SEARCH', () => {
    const state = queryReducer('', {
      type: 'SEARCH',
      payload: { searchTerm: 'Ervin' },
    });

    expect(state).toEqual('Ervin');
  });
});
