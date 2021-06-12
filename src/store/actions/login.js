const LOGIN_ACTION = { type: "LOGIN" };
const LOGOUT_ACTION = { type: "LOGOUT" };

export const createLoginAction = (username) => {
  return { ...LOGIN_ACTION, username };
};

export const createLogoutAction = () => {
  return { ...LOGOUT_ACTION };
};
