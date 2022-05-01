import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";

export const changeCategoryHandler = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const changeDifficultyHandler = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const changeTypeHandler = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const changeAmountHandler = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const changeScoreHandler = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
