import { CALCULATE_TAX_RETURN, BUDGET_EXPENSES } from "./type";

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
