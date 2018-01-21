import React, { Component } from "react";
import { loadFormConfig } from "../config";
import Text from "../components/Text";
import v4 from "uuid";

class Form extends Component {
  state = {};

  render() {
    const { match: { params: { practice, form } } } = this.props;

    const config = loadFormConfig(practice, form);

    console.log(config);

    return (
      <form>
        {config.fields.map((field, i) => {
          if (field.type === "text")
            return (
              <Text
                key={i}
                id={v4()}
                value="value"
                onChange={() => console.log("clicky")}
                {...field}
              />
            );

          return null;
        })}
      </form>
    );
  }
}

export default Form;
