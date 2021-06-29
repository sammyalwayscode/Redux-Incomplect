import { actionType } from "./ActionType";

const initalstate = {
  movieDataBase: [],
  watchList: [],
  currentState: null,
};

export const MovieReducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TO_WATCHLIST:
      //Checking if the item is in the watchlist
      const item = state.movieDataBase.find((el) => el.id === payload.id);
      //if it is there show true if not show false
      const inWatch = state.watchList.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        watchList: inWatch
          ? //If true add +1 to the value
            state.watchList.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : //if it is flase add a new item to the watchlist
            [...state.watchList, { ...item, qty: 1 }],
      };

    case actionType.REMOVE_MOVIE:
      return {
        ...state,
        watchList: state.watchList.filter((item) => item !== payload.id),
      };

    case actionType.ADJUST_MOVIE_QTY:
      return {
        ...state,
        watchList: state.watchList.map((item) =>
          item.id === payload.id ? { ...item, qty: payload.qty } : item
        ),
      };

    case actionType.ADD_MOVIE:
      return {
        ...state,
        movieDataBase: payload,
      };

    case actionType.VIEW_SINGLE_MOVIE:
      return {
        ...state,
        currentState: payload,
      };

    default:
      return state;
  }
};
