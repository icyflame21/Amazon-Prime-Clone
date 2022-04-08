import { IS_AUTH } from "./action";
export const reducerR = (
  store = { isAuth: false, watchlist: [] },
  { type, payload }
) => {
  switch (type) {
    case IS_AUTH:
      return {
        ...store,
        isAuth: payload,
      };
    default:
      return store;
  }
};