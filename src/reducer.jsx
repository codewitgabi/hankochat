export default function reducer(state, action) {
  switch (action.type) {
    case "getUser":
      return state.user
    case "setUser":
      return { ...state, user: action.payload }
    default:
      return state
  }
}
