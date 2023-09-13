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

  async function login(variables: any) {
    try {
      const result = await mutate(variables());
      onLogin(result?.data.adminSignIn?.token);
      user.value = result?.data?.adminSignIn?.user;
      tost.fireTost("Login Successfull", "success");
      navigateTo("/admin");
    } catch (error) {
      tost.fireTost("Login Failed check your credentials", "error");
    }
  }

  function logout() {
    onLogout();
    user.value = null;
    tost.fireTost("Logout Successfull", "success");
  }

  return {
    user,
    login,
    logout,
    loading,
  };
});

export default useAuthStore;
