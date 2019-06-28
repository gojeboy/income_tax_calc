import React, { Component } from "react";
import PropTypes from "prop-types";

//material-ui imports
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

class Moneyinput extends Component {
  render() {
    const { label, id, name, value, type, onChange } = this.props;
    return (
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
        />
      </FormControl>
    );
  }
}

Moneyinput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Moneyinput;
