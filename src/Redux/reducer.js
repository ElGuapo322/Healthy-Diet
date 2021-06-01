import { combineReducers } from "redux";
import { diaryReducer } from "./DiaryReducer";
import { mealsReducer } from "./mealsReducer";

export default combineReducers({
  diaryReducer: diaryReducer,
  meals: mealsReducer
});
