import {
  tax_brackets,
  primary_rebate,
  retirement_deductable_max
} from "../constants/contants";

function calculate_uif(gross_uif) {
  if (gross_uif > 148.72 * 12) {
    return 148.72 * 12;
  } else {
    return gross_uif;
  }
}
function calculate_tax(bracket, taxable_income, gross_annual_income) {
  const primary_paye =
    bracket.fixed_tax +
    (taxable_income - (bracket.min - 1)) * (bracket.tax_rate / 100);
  const paye = primary_paye - primary_rebate;

  const gross_uif = gross_annual_income * (1 / 100);
  const uif = calculate_uif(gross_uif);

  return paye + uif;
}

function calculate_deductables(provident_fund, pension_fund, ra_fund) {
  const total = provident_fund * 12 + pension_fund * 12 + ra_fund * 12;

  if (total > retirement_deductable_max) {
    return retirement_deductable_max;
  } else {
    return total;
  }
}
export const calculate_tax_bracket = monthly_user_info => {
  const {
    provident_fund,
    pension_fund,
    ra_fund,
    monthly_salary
  } = monthly_user_info;

  const deductables = calculate_deductables(
    provident_fund,
    pension_fund,
    ra_fund
  );

  const annual_income = monthly_salary * 12;
  const annual_income_after_deductables = annual_income - deductables;

  const normal_tax_bracket = tax_brackets.filter(bracket => {
    const { id, min, max, fixed_tax, tax_rate } = bracket;
    if (annual_income >= min && annual_income <= max) {
      return bracket;
    }
  });

  const deducated_tax_bracket = tax_brackets.filter(bracket => {
    const { id, min, max, fixed_tax, tax_rate } = bracket;
    if (
      annual_income_after_deductables >= min &&
      annual_income_after_deductables <= max
    ) {
      return bracket;
    }
  });

  const original_paye = calculate_tax(
    normal_tax_bracket[0],
    annual_income,
    annual_income
  );

  const deduceted_paye = calculate_tax(
    deducated_tax_bracket[0],
    annual_income_after_deductables,
    annual_income
  );
  const original_income_per_month = (annual_income - original_paye) / 12;

  const retirement_savings_rate = (deductables / annual_income) * 100;

  const return_object = {
    original_paye: original_paye,
    deduceted_paye: deduceted_paye,
    original_income_per_month: original_income_per_month,
    rebate: original_paye - deduceted_paye,
    retirement_savings_rate: retirement_savings_rate
  };

  return return_object;
};
