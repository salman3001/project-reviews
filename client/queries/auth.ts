export const authQuery = {
  adminSignin: (email: string, password: string) => ({
    str: gql`
      mutation {
        adminSignIn(adminSigninInput: { email: $email, password: $password }) {
          token
          user {
            firstName
          }
        }
      }
    `,
    variables: {
      email,
      password,
    },
  }),
};
