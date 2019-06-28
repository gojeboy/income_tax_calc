import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { calculate_tax } from "../actions/taxAction";
import Moneyinput from "../layout/Moneyinput";

//material ui imports
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

class Inputs extends Component {
  state = this.props.income_info;

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => {
    e.preventDefault();

    this.props.calculate_tax(this.state);
  };

  render() {
    const {
      monthly_salary,
      provident_fund,
      pension_fund,
      ra_fund
    } = this.state;

    // console.log("This issa state: ", this.state);

    console.log(this.state);

    return (
      <FormControl fullWidth={true}>
        <div className="card-header">Income and Retirement Savings</div>

        <Moneyinput
          label="Enter your monthly gross salary R"
          id="monthly_salary"
          name="monthly_salary"
          value={monthly_salary}
          type="number"
          onChange={this.onChange}
        />
        <Moneyinput
          label="Enter your monthly provident fund constribution"
          id="provident_fund"
          name="provident_fund"
          value={provident_fund}
          type="number"
          onChange={this.onChange}
        />

        <Moneyinput
          label="Enter your monthly pension fund constribution"
          id="pension_fund"
          name="pension_fund"
          value={pension_fund}
          type="number"
          onChange={this.onChange}
        />

        <Moneyinput
          label="Enter your monthly retirement annuity fund constribution"
          id="ra_fund"
          name="ra_fund"
          value={ra_fund}
          type="number"
          onChange={this.onChange}
        />

        <Button onClick={this.onClick} variant="contained" color="primary">
          Calculate
        </Button>
      </FormControl>
    );
  }
}

Inputs.propTypes = {
  calculate_tax: PropTypes.func.isRequired
};

export default connect(
  null,
  { calculate_tax }
)(Inputs);
