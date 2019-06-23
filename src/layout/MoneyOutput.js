import React, { Component } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Grid";
import Moneyinput from "./Moneyinput";

class MoneyOutput extends Component {
  render() {
    const { label, value, prefix, suffix } = this.props;
    return (
      //   <Grid>
      //     <label>{label} </label>
      //     <Input
      //       value={value}
      //       //   thousandSeparator={true}
      //       //   prefix={prefix}
      //       //   suffix={suffix}
      //       //   decimalScale={2}
      //     />
      //   </Grid>

      <Moneyinput />
    );
  }
}

MoneyOutput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired
};
export default MoneyOutput;
