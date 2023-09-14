import { defineStore } from "pinia";
import useToastStore from "./useTostStore";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  permissions: number[];
  role: string;
}

const useAuthStore = defineStore("Auth", () => {
  const user = useState<null | User>("user", () => null);
  const tost = useToastStore();
  const { onLogin, onLogout } = useApollo();

  function login(): {
    loading: Ref<boolean>;
    loginMutation: (variables: any, resetFn: () => void) => Promise<void>;
  } {
    const loginQuery = gql`
      mutation ($input: AdminSininInput!) {
        adminSignIn(adminSigninInput: $input) {
          token
          user {
            firstName
            lastName
            email
            role
            permissions
          }
        }
      }
    `;

    const { mutate, loading } = useMutation(loginQuery);

    const loginMutation = async (variables: any, resetFn: () => void) => {
      try {
        const result = await mutate(variables());
        onLogin(result?.data.adminSignIn?.token);
        user.value = result?.data?.adminSignIn?.user;
        resetFn();
        tost.fireTost("Login Successfull", "success");
        navigateTo("/admin");
      } catch (error) {
        tost.fireTost("Login Failed check your credentials", "error");
        resetFn();
      }
    };

    return {
      loading: loading,
      loginMutation,
    };
  }

  function logout() {
    onLogout();
    user.value = null;
    tost.fireTost("Logout Successfull", "success");
  }

  async function sendForgotPasswordLink(to: string) {
    const query = gql`
      query ($to: String!) {
        sendForgotPasswordEmail(to: $to)
      }
    `;

    try {
      const data = await useAsyncQuery({ query });
      tost.fireTost("Password Rest Email Sent!", "success");
      navigateTo("/reset-password");
    } catch (error) {
      tost.fireTost(
        "Failed to send password reset link. Please contact support team",
        "error"
      );
    }
  }

  return {
    user,
    login,
    logout,
  };
});

export default useAuthStore;
