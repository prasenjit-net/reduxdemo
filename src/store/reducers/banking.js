const initialValue = {
  balance: 0,
};

export const bankingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.amount };
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.amount };
    case "CLEAR":
      return { ...state, balance: 0 };
    default:
      return state;
  }
};
