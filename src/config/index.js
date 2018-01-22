export const loadFormConfig = (practice, form) =>
  configTree[practice] && configTree[practice][form]
    ? configTree[practice][form]
    : {};

const configTree = {
  "my-dental": {
    "new-patient": {
      meta: {
        logo: "Awesome Logo",
        email: "jhardman0830@gmail.com"
      },
      fields: [
        {
          type: "text",
          label: "First Name",
          placeHolder: "Jimmy",
          required: true,
          col: 12
        },
        {
          type: "text",
          label: "Jen's name",
          placeHolder: "Jenny",
          required: true,
          col: 12
        }
      ]
    }
  }
};
