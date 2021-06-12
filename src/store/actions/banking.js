const DEPOSIT_ACTION = { type: "DEPOSIT" };
const WITHDRAW_ACTION = { type: "WITHDRAW" };
const CLEAR_ACTION = { type: "CLEAR" };

export const createDepositAction = (amount) => {
  return { ...DEPOSIT_ACTION, amount };
};

export const createWithdrawAction = (amount) => {
  return { ...WITHDRAW_ACTION, amount };
};

export const createClearAction = () => {
  return { ...CLEAR_ACTION };
};
