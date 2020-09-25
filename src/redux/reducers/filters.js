const InitialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = InitialState, action) => {
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
