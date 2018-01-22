export const loadFormConfig = (practice, data) =>
  configTree[practice] && configTree[practice][data]
    ? configTree[practice][data]
    : {};

const configTree = {
  "my-dental": {
    "new-patient": {
      meta: {
        logo: "Awesome Logo",
        email: "jhardman0830@gmail.com"
      },
      data: [
        {
          type: "text",
          label: "First Name",
          placeHolder: "First Name",
          required: true,
          col: 4
        },
        {
          type: "email",
          label: "Email",
          placeHolder: "Email",
          required: true,
          col: 4
        }
        // {
        //   type: "date",
        //   label: "Birthdate",
        //   required: true,
        //   col: 4
        // },
        // {
        //   type: "number",
        //   label: "Favorite Number",
        //   required: true,
        //   col: 4
        // }
      ]
    }
  }
};
