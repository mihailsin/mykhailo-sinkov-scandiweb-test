import React from "react";
import dompurify from "dompurify";
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

const sanitizer = dompurify.sanitize;

class ProductDescPage extends React.Component {
  state = {
    image: null,
    attributes: null,
  };

  setImage = (e) => {
    this.setState({ image: e.target.src });
  };

  componentDidMount() {
    client
      .query({
        query: queries.PRODUCT_QUERY,
        variables: { prod: this.props.productId },
      })
      .then((data) =>
        this.setState({
          image: data.data.product.gallery[0],
          attributes: data.data.product.attributes,
        })
      );
  }

  render() {
    console.log(this.state.attributes);
    return (
      <>
        <Container>
          <Query
            query={queries.PRODUCT_QUERY}
            variables={{ prod: this.props.productId }}
          >
            {({ data, loading }) => {
              if (loading) return "loading";
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
                  <div>
                    <h2>{data.product.name}</h2>
                    <h3>{data.product.brand}</h3>
                    {data.product.attributes.map((attrib, idx) => (
                      <p key={idx}>{attrib.name}:</p>
                    ))}
                    <div>
                      {data.product.attributes.map((attrib) =>
                        attrib.items.map((item, idx) => (
                          <button key={idx} type="button">
                            {item.value}
                          </button>
                        ))
                      )}
                    </div>
                    <p>PRICE:</p>
                    {data.product.prices.map(({ amount, currency }, idx) => {
                      if (currency.label === this.props.currency) {
                        return (
                          <p key={idx}>
                            {amount} {currency.symbol}
                          </p>
                        );
                      }
                    })}
                    <button type="submit">ADD TO CART</button>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(data.product.description),
                      }}
                    ></p>
                  </div>
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
  currency: state.userOptions.currency,
});

export default connect(mapStateToProps, null)(ProductDescPage);
