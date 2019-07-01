import {
  CALCULATE_TAX_RETURN,
  BUDGET_EXPENSES,
  ADD_EXPENSE,
  ADD_SAVINGS,
  ADD_DEBT
} from "./type";

export const calculate_tax = monthly_user_info => {
  console.log("about to dispatch action with: ", monthly_user_info);
  return {
    type: CALCULATE_TAX_RETURN,
    payload: monthly_user_info
  };
};

export const budget_expenses = net_income_saving => {
  console.log("about to dispatch action with: ", net_income_saving);
  return {
    type: BUDGET_EXPENSES,
    payload: net_income_saving
  };
};

export const add_expense = expense => {
  console.log("new expense: ", expense);

  return {
    type: ADD_EXPENSE,
    payload: expense
  };
};

export const add_saving = saving => {
  console.log("new expense: ", saving);

  return {
    type: ADD_SAVINGS,
    payload: saving
  };
};

export const add_debt = debt => {
  console.log("new expense: ", debt);

  return {
    type: ADD_DEBT,
    payload: debt
  };
};
