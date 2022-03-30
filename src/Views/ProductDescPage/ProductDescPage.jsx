import React from "react";
import dompurify from "dompurify";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import Container from "../../components/Container";
import { client } from "../..";
import { addProductInCart } from "../../redux/actions";
import {
  PreviewImgContainer,
  ImgWrapper,
  Img,
  FlexContainer,
  MainImgContainer,
  ProductOrderContainer,
  SubmitButton,
  RadioButton,
  CustomRadio,
} from "./ProductDescPage.styled";
import { nanoid } from "nanoid";

const sanitizer = dompurify.sanitize;

class ProductDescPage extends React.Component {
  state = {};

  setImage = (e) => {
    this.setState({ image: e.target.src });
  };

  selectAttribute = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addProductInCart(this.state);
    e.target.reset();
  };

  componentDidMount() {
    client
      .query({
        query: queries.PRODUCT_QUERY,
        variables: { prod: this.props.productId },
      })
      .then((data) =>
        this.setState({
          uniqueId: nanoid(10),
          image: data.data.product.gallery[0],
          orderedProductName: data.data.product.name,
          price: data.data.product.prices.map(({ amount, currency }) => {
            if (currency.label === this.props.currency) {
              return `${amount}${currency.symbol}`;
            }
          }),
        })
      );
  }
  render() {
    const productsInCart = this.props.productsInCart;
    console.log(productsInCart);
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
                  <ProductOrderContainer>
                    <form onSubmit={this.submitHandler}>
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
                                          onClick={this.selectAttribute}
                                          id={item.id}
                                          type="radio"
                                          name={attribute.name}
                                          value={item.value}
                                          required
                                        />
                                        <CustomRadio
                                          swatchcolor={item.value}
                                          htmlFor={item.id}
                                        />
                                      </React.Fragment>
                                    );
                                  } else
                                    return (
                                      <React.Fragment key={idx}>
                                        <label>
                                          <input
                                            type="radio"
                                            name={attribute.name}
                                            id={item.id}
                                            value={item.displayValue}
                                            onClick={this.selectAttribute}
                                            required
                                          />
                                          {item.displayValue}
                                        </label>
                                      </React.Fragment>
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
  productsInCart: state.userOptions.productsInCart,
});

const mapDispatchToProps = () => ({
  addProductInCart,
});

export default connect(mapStateToProps, mapDispatchToProps())(ProductDescPage);
