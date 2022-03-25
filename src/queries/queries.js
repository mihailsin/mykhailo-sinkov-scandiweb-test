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
  OPTIONAL_QUERY: gql`
    query ByOptions($cat: String!) {
      category(input: { title: $cat }) {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
  `,
  PRODUCT_QUERY: gql`
    query ByProduct($prod: String! = "all") {
      product(id: $prod) {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  `,
};

export default queries;
