export const loadForm = (practice, form) => configTree[practice][form];

const configTree = {
  "my-dental": {
    "new-patient": {
      logo: "Awesome Logo",
      email: "jhardman0830@gmail.com",
      fields: [
        //  responsive width
        //  group by row
        //  alignment
        //  field type
        {
          type: "text",
          label: "First Name",
          placeholder: "Jimmy",
          required: true
        }
      ]
    }
  }
};
