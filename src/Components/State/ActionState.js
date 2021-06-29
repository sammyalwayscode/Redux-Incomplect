import { actionType } from "./ActionType";

export const addMovie = (watch) => {
  return {
    type: actionType.ADD_MOVIE,
    payload: watch,
  };
};
export const addToWatchList = (watchID) => {
  return {
    type: actionType.ADD_TO_WATCHLIST,
    payload: {
      id: watchID,
    },
  };
};
export const adjustMovie = (watchID, value) => {
  return {
    type: actionType.ADJUST_MOVIE_QTY,
    payload: {
      id: watchID,
      qty: value,
    },
  };
};

export const viewSingleMovie = (watch) => {
  return {
    type: actionType.VIEW_SINGLE_MOVIE,
    payload: {
      id: watch,
    },
  };
};

export const removeMovie = (watchID) => {
  return {
    type: actionType.REMOVE_MOVIE,
    payload: {
      id: watchID,
    },
  };
};
