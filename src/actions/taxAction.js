import { CALCULATE_TAX_RETURN } from "./type";

export const calculate_tax = monthly_user_info => {
  console.log("about to dispatch action with: ", monthly_user_info);
  return {
    type: CALCULATE_TAX_RETURN,
    payload: monthly_user_info
  };
};
