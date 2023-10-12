import { User } from "./types/Props";


export const initState = {
  user: null,
};

type ACTION_TYPE = 
  | { type: "getUser" }
  | { type: "setUser", payload: User }


export default function reducer(state: typeof initState, action: ACTION_TYPE) {
  switch (action.type) {
    case "getUser":
      return state.user
    case "setUser":
      return { ...state, user: action.payload }
    default:
      return state
  }
}
