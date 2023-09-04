export const useGqlQuery = (queryString: any, variables: any) => {
  const data = useState("data", () => null);
  const error = useState("error", () => null);

  const executeQuery = () => {
    const { data, error } = useLazyAsyncQuery({
      query: queryString,
      variables: variables,
    });
    data.value = data;
    error.value = error as any;
  };

  return {
    executeQuery,
    data,
    error,
  };
};
