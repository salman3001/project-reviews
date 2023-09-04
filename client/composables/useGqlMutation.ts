export const useGqlMutation = (queryString: any) => {
  const data = useState("data", () => null);
  const error = useState("error", () => null);

  const executeQuery = async () => {
    const { data, error } = await useMutation(queryString);
    data.value = data;
    error.value = error as any;
  };

  return {
    executeQuery,
    data,
    error,
  };
};
