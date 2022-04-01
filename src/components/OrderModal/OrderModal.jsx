import React from "react";
import { createPortal } from "react-dom";
import { Backdrop, Modal, CloseButton } from "./OrderModal.styled";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import { connect } from "react-redux";
import { addProductInCart } from "../../redux/actions";
import { client } from "../..";
import { nanoid } from "@reduxjs/toolkit";
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
  ProductName,
  CustomInput,
  CustomLabel,
} from "../../Views/ProductDescPage/ProductDescPage.styled";

const modalRoot = document.querySelector("#modal-root");
class OrderModal extends React.Component {
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
    const toggleOrderModal = this.props.togglemodal;
    e.preventDefault();
    this.props.addProductInCart(this.state);
    e.target.reset();
    toggleOrderModal();
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
          quantity: 1,
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
    const toggleOrderModal = this.props.togglemodal;
    return createPortal(
      <Backdrop>
        <Modal>
          <CloseButton onClick={() => toggleOrderModal()}>CLOSE</CloseButton>
          <Query
            query={queries.PRODUCT_QUERY}
            variables={{ prod: this.props.productId }}
          >
            {({ data, loading }) => {
              if (loading) return "loading";
              return (
                <ProductOrderContainer>
                  <form onSubmit={this.submitHandler}>
                    <ProductName>{data.product.name}</ProductName>
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
                                      <CustomInput
                                        type="radio"
                                        name={attribute.name}
                                        id={attribute.id + item.id}
                                        value={item.displayValue}
                                        onClick={this.selectAttribute}
                                        required
                                      />
                                      <CustomLabel
                                        content={item.displayValue}
                                        htmlFor={attribute.id + item.id} // because attribute id's from backend repeated ("yes" "no")
                                      />
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
                  </form>
                </ProductOrderContainer>
              );
            }}
          </Query>
        </Modal>
      </Backdrop>,
      modalRoot
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.userOptions.productId,
  currency: state.userOptions.currency,
});

const mapDispatchToProps = () => ({
  addProductInCart,
});

export default connect(mapStateToProps, mapDispatchToProps())(OrderModal);
