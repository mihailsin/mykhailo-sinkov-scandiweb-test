import React from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import Container from "../../components/Container";
import { client } from "../..";
import {
  PreviewImgContainer,
  ImgWrapper,
  Img,
  FlexContainer,
  MainImgContainer,
} from "./ProductDescPage.styled";

class ProductDescPage extends React.Component {
  state = {
    image: null,
  };

  setImage = (e) => {
    console.log(e.target.src);
    this.setState({ image: e.target.src });
  };

  componentDidMount() {
    client
      .query({
        query: queries.PRODUCT_QUERY,
        variables: { prod: this.props.productId },
      })
      .then((data) => this.setState({ image: data.data.product.gallery[0] }));
  }

  render() {
    console.log(this.props.productId);
    return (
      <>
        <Container>
          <Query
            query={queries.PRODUCT_QUERY}
            variables={{ prod: this.props.productId }}
          >
            {({ data, loading }) => {
              if (loading) return "loading";
              console.log(data.product.gallery);
              return (
                <FlexContainer>
                  <PreviewImgContainer>
                    {data.product.gallery.map((picture, idx) => (
                      <ImgWrapper key={idx}>
                        <Img src={picture} alt="" onClick={this.setImage} />
                      </ImgWrapper>
                    ))}
                  </PreviewImgContainer>
                  <MainImgContainer>
                    <Img src={this.state.image} alt="" />
                  </MainImgContainer>
                </FlexContainer>
              );
            }}
          </Query>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.userOptions.productId,
});

export default connect(mapStateToProps, null)(ProductDescPage);
