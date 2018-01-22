import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Text from "./Text";

class Email extends Component {
  validateEmail = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  render() {
    const { value } = this.props;
    return <Text {...this.props} valid={this.validateEmail(value)} />;
  }
}

export default Email;
