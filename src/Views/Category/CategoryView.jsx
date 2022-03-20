import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";

const PRODUCTS_QUERY = gql`
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
`;

class CategoryView extends React.Component {
  render() {
    return (
      <Gallery>
        <Query query={PRODUCTS_QUERY}>
          {({ data, loading }) => {
            if (loading) return "loading...";
            return data.category.products.map(
              ({ name, brand, gallery }, idx) => {
                return <Card key={idx} product={{ name, brand, gallery }} />;
              }
            );
          }}
        </Query>
      </Gallery>
    );
  }
}

export default CategoryView;
