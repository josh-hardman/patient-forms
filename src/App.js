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

// import React, { Component } from "react";
// import styled from "styled-components";

// const FormWrapper = styled.div`padding: 36px;`;

// export default class Example extends Component {
//   render() {
//     return (
//       <FormWrapper>
//         <form>
//           <div class="form-row">
//             <div class="col-md-4 mb-3">
//               <label for="validationServer01">First name</label>
//               <input
//                 type="text"
//                 class="form-control is-valid"
//                 id="validationServer01"
//                 placeholder="First name"
//                 value="Mark"
//                 required
//               />
//             </div>
//             <div class="col-md-4 mb-3">
//               <label for="validationServer02">Last name</label>
//               <input
//                 type="text"
//                 class="form-control is-valid"
//                 id="validationServer02"
//                 placeholder="Last name"
//                 value="Otto"
//                 required
//               />
//             </div>
//             <div class="col-md-4 mb-3">
//               <label for="validationServerUsername">Username</label>
//               <div class="input-group">
//                 <div class="input-group-prepend">
//                   <span class="input-group-text" id="inputGroupPrepend3">
//                     @
//                   </span>
//                 </div>
//                 <input
//                   type="text"
//                   class="form-control is-invalid"
//                   id="validationServerUsername"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend3"
//                   required
//                 />
//                 <div class="invalid-feedback">Please choose a username.</div>
//               </div>
//             </div>
//           </div>
//           <div class="form-row">
//             <div class="col-md-6 mb-3">
//               <label for="validationServer03">City</label>
//               <input
//                 type="text"
//                 class="form-control is-invalid"
//                 id="validationServer03"
//                 placeholder="City"
//                 required
//               />
//               <div class="invalid-feedback">Please provide a valid city.</div>
//             </div>
//             <div class="col-md-3 mb-3">
//               <label for="validationServer04">State</label>
//               <input
//                 type="text"
//                 class="form-control is-invalid"
//                 id="validationServer04"
//                 placeholder="State"
//                 required
//               />
//               <div class="invalid-feedback">Please provide a valid state.</div>
//             </div>
//             <div class="col-md-3 mb-3">
//               <label for="validationServer05">Zip</label>
//               <input
//                 type="text"
//                 class="form-control is-invalid"
//                 id="validationServer05"
//                 placeholder="Zip"
//                 required
//               />
//               <div class="invalid-feedback">Please provide a valid zip.</div>
//             </div>
//           </div>

//           <button class="btn btn-primary" type="submit">
//             Submit form
//           </button>
//         </form>
//       </FormWrapper>
//     );
//   }
// }
