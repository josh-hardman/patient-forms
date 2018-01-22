import React, { Component } from "react";
import { loadFormConfig } from "../config";
import Text from "../components/Text";
import v4 from "uuid";

class Form extends Component {
  state = {};

  updateValue = e => {
    const id = e.target.getAttribute("data-index");
    const label = e.target.getAttribute("data-label");
    const value = e.target.value;
    this.setState({
      [id]: {
        label,
        value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { match: { params: { practice, form } } } = this.props;
    const config = loadFormConfig(practice, form);
    const id = v4();

    return (
      <form onSubmit={this.submitForm}>
        {config.fields.map((field, i) => {
          if (field.type === "text")
            return (
              <Text
                key={i}
                index={i}
                id={id}
                value={this.state[id]}
                onChange={this.updateValue}
                valid={true}
                {...field}
              />
            );

          return null;
        })}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
