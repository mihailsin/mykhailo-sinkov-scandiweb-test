import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import { connect } from "react-redux";
import { client } from "../..";
import { Link } from "react-router-dom";
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
    console.log("unmounted");
    this.controller.abort();
    this.setState({ data: [] });
  }
  render() {
    const { showOrderModal } = this.state;
    return (
      <>
        <Gallery>
          {this.state.data.map(({ name, gallery, brand, prices, id }, idx) => {
            return (
              <Card
                key={idx}
                product={{ name, gallery, brand, prices, id }}
                togglemodal={this.toggleOrderModal}
              />
            );
          })}
          {/* <Query
            query={queries.OPTIONAL_QUERY}
            variables={{ cat: this.props.match.params.category }}
          >
            {({ data, loading, error }) => {
              if (loading) return "loading...";
              if (error) return "void";
              return data.category.products.map(
                ({ name, brand, gallery, prices, id }, idx) => {
                  return (
                    <Card
                      key={idx}
                      product={{ name, gallery, brand, prices, id }}
                    />
                  );
                }
              );
            }}
          </Query> */}
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
