import { CALCULATE_TAX_RETURN } from "../actions/type";

const initialState = {
  monthly_user_info: {
    monthly_salary: 20000,
    provident_fund: 500,
    pension_fund: 500,
    ra_fund: 500
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_TAX_RETURN:
      console.log(action);
      return {
        ...state,
        monthly_user_info: action.payload
      };

    default:
      return state;
  }
}
