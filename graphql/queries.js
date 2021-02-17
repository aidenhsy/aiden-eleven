import { gql } from '@apollo/client';

export const GetCompanyById = gql`
  query Company($companyId: ID!) {
    getCompanyById(companyId: $companyId) {
      id
      name
      phone
    }
  }
`;
