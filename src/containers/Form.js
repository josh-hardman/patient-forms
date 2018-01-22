import React, { Component } from "react";
import { loadFormConfig } from "../config";
import Text from "../components/Text";
import Date from "../components/Date";
import v4 from "uuid";
import styled from "styled-components";

const Wrapper = styled.div`padding: 8px;`;

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
      <Wrapper>
        <form className="form-row" onSubmit={this.submitForm}>
          {config.data.map(({ type, ...rest }, i) => {
            if (type === "text" || type === "date" || type === "number")
              return (
                <Text
                  key={i}
                  type={type}
                  index={i}
                  id={id}
                  value={this.state[id]}
                  onChange={this.updateValue}
                  valid={true}
                  {...rest}
                />
              );

            return null;
          })}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </Wrapper>
    );
  }
}

export default Form;
