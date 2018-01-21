import React, { Component } from "react";
import { loadFormData, loadFormMeta } from "../config";
import Text from "../components/Text";
import v4 from "uuid";

class Form extends Component {
  state = {
    meta: {},
    data: []
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({
      meta: loadFormMeta(params.practice, params.form),
      data: loadFormData(params.practice, params.form)
    });
  }

  render() {
    const { match: { params } } = this.props;
    const { data, meta } = this.state;

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
