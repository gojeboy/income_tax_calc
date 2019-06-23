import React, { Component, Fragment, lazy, Suspense } from "react";
import { calculate_tax_bracket } from "../computations/computations";
import { connect } from "react-redux";
import Inputs from "./Inputs";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { ANNUAL_TFSA_LIMIT } from "../constants/contants";
import MoneyOutput from "../layout/MoneyOutput";
import Moneyinput from "../layout/Moneyinput";
import FormControl from "@material-ui/core/FormControl";
class TaxInput extends Component {
  calculate_tfsa_constribution = rebate => {
    if (ANNUAL_TFSA_LIMIT - rebate < 0) {
      return {
        tfsa_conrtibution_from_rebate: ANNUAL_TFSA_LIMIT,
        tfsa_conrtibution_remaining: 0,
        excess: rebate - ANNUAL_TFSA_LIMIT
      };
    } else {
      return {
        tfsa_conrtibution_from_rebate: rebate,
        tfsa_conrtibution_remaining: ANNUAL_TFSA_LIMIT - rebate,
        excess: 0
      };
    }
  };
  render() {
    const { income_info_input } = this.props;

    const tax_bracket = calculate_tax_bracket(income_info_input);
    const {
      original_paye,
      deduceted_paye,
      original_income_per_month,
      rebate,
      retirement_savings_rate
    } = tax_bracket;

    const new_tfsa_saving = this.calculate_tfsa_constribution(rebate);

    const {
      tfsa_conrtibution_from_rebate,
      tfsa_conrtibution_remaining,
      excess
    } = new_tfsa_saving;

    return (
      <div>
        <Inputs income_info={income_info_input} />
        <h2>Tax Calculator</h2>
        {/* <MoneyOutput
          label="Net Income: "
          value={original_income_per_month}
          prefix="R"
          suffix=""
        /> */}
        <FormControl className="form-container">
          <Moneyinput
            label="Net Income: "
            id="net_salary"
            name="net_salary"
            value={original_income_per_month}
            type="number"
          />
          <Moneyinput
            label="Tax Paid + UIF: "
            id="paye_uif"
            name="paye_uif"
            value={original_paye}
            type="number"
          />
          <Moneyinput
            label="Tax Paid + UIF: "
            id="paye_uif"
            name="paye_uif"
            value={original_paye}
            type="number"
          />
          <Moneyinput
            label="Tax Paid + UIF You were supposed to pay: "
            id="deduceted_paye"
            name="deduceted_paye"
            value={deduceted_paye}
            type="number"
          />
          <Moneyinput
            label="Because your retirement savings rate is "
            id="retirement_savings_rate"
            name="retirement_savings_rate"
            value={retirement_savings_rate}
            type="number"
          />
          <Moneyinput
            label="Your tax rebate will be: "
            id="rebate"
            name="rebate"
            value={rebate}
            type="number"
          />
          <Moneyinput
            label="TFSA constribution from rebate: "
            id="tfsa_conrtibution_from_rebate"
            name="tfsa_conrtibution_from_rebate"
            value={tfsa_conrtibution_from_rebate}
            type="number"
          />
          <Moneyinput
            label="TFSA constribution allowance you still have remaining monthly: "
            id="tfsa_conrtibution_remaining_pm"
            name="tfsa_conrtibution_remaining_pm"
            value={tfsa_conrtibution_remaining / 12}
            type="number"
          />
          OR
          <Moneyinput
            label="For the year: "
            id="tfsa_conrtibution_remaining"
            name="tfsa_conrtibution_remaining"
            value={tfsa_conrtibution_remaining}
            type="number"
          />
          <Moneyinput
            label="Access cash from rebate "
            id="excess"
            name="excess"
            value={excess}
            type="number"
          />
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  income_info_input: state.tax.monthly_user_info
});
TaxInput.propTypes = {
  income_info_input: PropTypes.object.isRequired,
  calculate_tax_bracket: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { calculate_tax_bracket }
)(TaxInput);
