import { getMealsCategories } from "./api";
import { getMeals } from "./api";

export const addDiaryAction = (payload) => {
  return {
    type: "ADD_DIARY",
    payload
  };
};
export const delDiaryAction = (payload) => {
  return {
    type: "DEL_DIARY",
    payload
  };
};

export const fetchMeals = (categoryFilter) => {
  return async (dispatch) => {
    const meals = await getMeals(categoryFilter);
    dispatch({
      type: "FETCH_MEALS",
      payload: meals
    });
  };
};

export const fetchMealsCategories = () => {
  return async (dispatch) => {
    const categories = await getMealsCategories();
    dispatch({
      type: "FETCH_MEALS_CATEGORIES",
      payload: categories
    });
  };
};
