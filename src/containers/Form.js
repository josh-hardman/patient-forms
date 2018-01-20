import React, { Component } from "react";
import { loadForm } from "../config";
// Load config object

class Form extends Component {
  componentDidMount() {
    const { match } = this.props;
    console.log(loadForm(match.params.practice, match.params.form));
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <div>practice: {match.params.practice}</div>
        <div>form: {match.params.form}</div>
      </div>
    );
  }
}

export default Form;
