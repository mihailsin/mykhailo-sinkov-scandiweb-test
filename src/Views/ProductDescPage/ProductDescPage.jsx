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
  ProductOrderContainer,
  AttributeSelectOption,
  SubmitButton,
  ColorSelectOption,
  RadioButton,
  CustomRadio,
} from "./ProductDescPage.styled";

const sanitizer = dompurify.sanitize;

class ProductDescPage extends React.Component {
  state = {
    image: null,
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
        })
      );
  }

  render() {
    return (
      <>
        <Container>
          {/* <h1>PDP Page</h1> */}
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
                  <ProductOrderContainer>
                    <form>
                      <h2>{data.product.name}</h2>
                      <h3>{data.product.brand}</h3>
                      <div>
                        {data.product.attributes.map((attribute, idx) => {
                          return (
                            <div key={idx}>
                              <h4>{attribute.name}</h4>
                              <div>
                                {attribute.items.map((item, idx) => {
                                  if (attribute.name === "Color") {
                                    return (
                                      <React.Fragment key={idx}>
                                        <RadioButton
                                          onClick={(e) =>
                                            console.log(e.target.value)
                                          }
                                          id={item.id}
                                          type="radio"
                                          name="color"
                                          value={item.displayValue}
                                        />
                                        <CustomRadio
                                          swatchcolor={item.value}
                                          htmlFor={item.id}
                                        />
                                      </React.Fragment>

                                      // <ColorSelectOption
                                      //   swatchcolor={item.value}
                                      //   key={item.id}
                                      // />
                                    );
                                  } else
                                    return (
                                      <AttributeSelectOption
                                        type="button"
                                        key={item.value}
                                      >
                                        {item.displayValue}
                                      </AttributeSelectOption>
                                    );
                                })}
                              </div>
                            </div>
                          );
                        })}
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
                      <SubmitButton type="submit">ADD TO CART</SubmitButton>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(data.product.description),
                        }}
                      ></p>
                    </form>
                  </ProductOrderContainer>
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
