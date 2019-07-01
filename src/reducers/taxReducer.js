import {
  CALCULATE_TAX_RETURN,
  BUDGET_EXPENSES,
  ADD_EXPENSE,
  ADD_SAVINGS,
  ADD_DEBT
} from "../actions/type";

const initialState = {
  monthly_user_info: {
    monthly_salary: 20000,
    provident_fund: 500,
    pension_fund: 595,
    ra_fund: 1000
  },
  expenses: [],
  savings: [],
  debts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_TAX_RETURN:
      return {
        ...state,
        monthly_user_info: action.payload
      };
    case BUDGET_EXPENSES:
      return {
        ...state,
        net_income_savings: action.payload
      };

    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };

    case ADD_SAVINGS:
      return {
        ...state,
        savings: [action.payload, ...state.savings]
      };

    case ADD_DEBT:
      return {
        ...state,
        debts: [action.payload, ...state.debts]
      };

    default:
      return state;
  }
}
