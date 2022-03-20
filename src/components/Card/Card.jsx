import React from "react";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { CardContainer, Thumb, Info } from "./Card.styled";

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

class Card extends React.Component {
  render() {
    return (
      <Query query={PRODUCTS_QUERY}>
        {({ data, loading }) => {
          if (loading) return "loading...";
          return data.category.products.map(({ name, brand, gallery }, idx) => {
            console.log(name, brand, gallery);
            return (
              <li key={idx}>
                <CardContainer>
                  <Thumb>
                    <img src={gallery[0]} alt="" width="200" />
                  </Thumb>
                  <Info>
                    <p>{name}</p>
                    <p>{brand}</p>
                  </Info>
                </CardContainer>
              </li>
            );
          });
        }}
      </Query>
      // <li>
      //   <div>
      //     <img
      //       src={`https://via.placeholder.com/280x420.png?text=Image+Not+Available`}
      //       alt=""
      //     />
      //     <p>Description</p>
      //     <p>Price</p>
      //   </div>
      // </li>
    );
  }
}

export default Card;
