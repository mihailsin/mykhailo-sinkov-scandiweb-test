import { gql } from "@apollo/client";

const queries = {
  ALL_PRODUCTS_QUERY: gql`
    {
      category {
        name
        products {
          name
          brand
          gallery
        }
      }
    }
  `,
  CURRENCY_QUERY: gql`
    {
      currencies {
        label
        symbol
      }
    }
  `,

  CATEGORIES_QUERY: gql`
    {
      categories {
        name
      }
    }
  `,

  PRODUCTS_BY_CATEGORY_QUERY: gql`
    query ByCategory($cat: String!) {
      category(input: { title: $cat }) {
        name
        products {
          name
          brand
          gallery
        }
      }
    }
  `,
};

export default queries;
