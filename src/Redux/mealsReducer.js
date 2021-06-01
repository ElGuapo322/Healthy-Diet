const initialState = {
  meals: [],
  categories: []
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return { ...state, meals: action.payload };
    case "FETCH_MEALS_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
