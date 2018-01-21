export const loadFormData = (practice, form) =>
  configTree[practice] &&
  configTree[practice][form] &&
  configTree[practice][form].fields
    ? configTree[practice][form].fields
    : [];

export const loadFormMeta = (practice, form) =>
  configTree[practice] &&
  configTree[practice][form] &&
  configTree[practice][form].meta
    ? configTree[practice][form].meta
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
          col: 3
        },
        {
          type: "text",
          label: "First Name",
          placeHolder: "Jimmy",
          required: true,
          col: 3
        },
        {
          type: "text",
          label: "First Name",
          placeHolder: "Jimmy",
          required: true,
          col: 3
        },
        {
          type: "text",
          label: "First Name",
          placeHolder: "Jimmy",
          required: true,
          col: 3
        }
      ]
    }
  }
};
