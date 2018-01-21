import React, { Component } from "react";
import { loadFormData, loadFormMeta } from "../config";
import Text from "../components/Text";
import v4 from "uuid";

class Form extends Component {
  state = {
    meta: loadFormMeta(
      this.props.match.params.practice,
      this.props.match.params.form
    ),
    data: loadFormData(
      this.props.match.params.practice,
      this.props.match.params.form
    )
  };

  render() {
    const { match: { params } } = this.props;
    const { data, meta } = this.state;
    console.log(data);
    return (
      <form>
        {data.map((field, i) => {
          if (field.type === "text")
            return <Text key={i} id={v4()} {...field} />;

          return null;
        })}
      </form>
    );
  }
}

export default Form;
