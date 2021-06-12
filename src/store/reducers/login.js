const initState = { authenticated: false };

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, authenticated: true, username: action.username };
    case "LOGOUT":
      return { ...state, authenticated: false, username: null };
    default:
      return state;
  }
};
