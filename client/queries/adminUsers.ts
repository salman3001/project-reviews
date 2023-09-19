export const adminUserIndexQuery = gql`
  query (
    $page: Int!
    $perPage: Int!
    $sortBy: String
    $search: String
    $roleId: Int
  ) {
    adminUsers(
      findAllInput: {
        page: $page
        perPage: $perPage
        sortBy: $sortBy
        search: $search
        roleId: $roleId
      }
    ) {
      firstName
      lastName
      email
      phone
      isActive
      desc
      Address {
        address
        zip
      }
      Avatar {
        url_sm
      }
      role {
        name
      }
    }
    getAdminUserCount
  }
`;
