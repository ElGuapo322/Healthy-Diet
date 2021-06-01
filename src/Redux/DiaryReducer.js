const initialState = {
  diaries: {},
  count: 0
};

export const diaryReducer = (state = initialState, action) => {
  let date = new Date();
  const diariesKeys = Object.keys(state.diaries);
  let diaryDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  switch (action.type) {
    case "ADD_DIARY":
      if (diariesKeys.length && diariesKeys.includes(diaryDate)) {
        const keyToUpdate = diariesKeys.filter((item) => item === diaryDate);
        return {
          ...state,
          diaries: {
            ...state.diaries,
            [keyToUpdate]: [...state.diaries[keyToUpdate], action.payload]
          }
        };
      }

      return {
        ...state,
        diaries: { ...state.diaries, [diaryDate]: [action.payload] }
      };

    case "DEL_DIARY":
      const newState = state.diaries[action.payload.name].filter(
        (i) => !(i.id == action.payload.id)
      );
      if (newState.length === 0) {
        const { [action.payload.name]: remove, ...newDiaries } = state.diaries;
        return { ...state, diaries: { ...newDiaries } };
      }
      return {
        ...state,
        diaries: {
          [action.payload.name]: newState
        }
      };
    default:
      return state;
  }
};
