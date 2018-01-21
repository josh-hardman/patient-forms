import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./containers/Form";

const App = () => (
  <Router>
    <div>
      <Route path="/:practice/:form" component={Form} />
    </div>
  </Router>
);

export default App;
