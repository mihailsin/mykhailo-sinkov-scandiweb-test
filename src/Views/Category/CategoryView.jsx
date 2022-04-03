import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { Header } from "./CategoryView.styled";
import queries from "../../queries";
import { connect } from "react-redux";
import { client } from "../..";
import OrderModal from "../../components/OrderModal";

class CategoryView extends React.Component {
  state = {
    data: [],
    showOrderModal: false,
  };

  controller = new AbortController();

  toggleOrderModal = () => {
    this.setState((state) => ({
      showOrderModal: !state.showOrderModal,
    }));
  };

  async componentDidMount() {
    const response = await client.query({
      query: queries.OPTIONAL_QUERY,
      variables: { cat: this.props.match.params.category },
    });
    const products = response.data.category.products;
    this.setState({ data: products });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.url !== this.props.match.url) {
      const response = await client.query({
        query: queries.OPTIONAL_QUERY,
        variables: { cat: this.props.match.params.category },
      });
      if (response?.data?.category?.products) {
        const products = response.data.category.products;
        this.setState({ data: products });
      } else this.setState({ data: [] });
    }
  }

  componentWillUnmount() {
    this.controller.abort();
    this.setState({ data: [] });
  }
  render() {
    const { showOrderModal } = this.state;
    return (
      <>
        <Container>
          <Header>{this.props.filter.toUpperCase()}</Header>
        </Container>
        <Gallery>
          {this.state.data.map(
            ({ name, gallery, brand, prices, id, inStock }, idx) => {
              return (
                <Card
                  key={idx}
                  product={{ name, gallery, brand, prices, id, inStock }}
                  togglemodal={this.toggleOrderModal}
                />
              );
            }
          )}
        </Gallery>

        {showOrderModal && (
          <OrderModal togglemodal={this.toggleOrderModal}></OrderModal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.userOptions.filter,
  productId: state.userOptions.productId,
});

export default connect(mapStateToProps, null)(CategoryView);
