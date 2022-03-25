import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import { connect } from "react-redux";
import { client } from "../..";

class CategoryView extends React.Component {
  // state = {
  //   data: [],
  // };

  // controller = new AbortController();

  // async componentDidMount() {
  //   const response = await client.query({
  //     query: queries.OPTIONAL_QUERY,
  //     variables: { cat: this.props.match.url.slice(1) },
  //   });
  //   const products = response.data.category.products;
  //   this.setState({ data: products });
  // }

  // async componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps.match.url);
  //   console.log(this.props.match.url);
  //   if (prevProps.match.url !== this.props.match.url) {
  //     const response = await client.query({
  //       query: queries.OPTIONAL_QUERY,
  //       variables: { cat: this.props.match.url.slice(1) },
  //     });
  //     const products = response.data.category.products;
  //     this.setState({ data: products });
  //   }
  // }

  // componentWillUnmount() {
  //   this.controller.abort();
  //   this.setState({ data: [] });
  // }
  render() {
    console.log(this.props.match.params.category);
    return (
      <>
        <Gallery>
          {/* {this.state.data.map(({ name, gallery, brand, prices, id }, idx) => {
            return (
              <Card key={idx} product={{ name, gallery, brand, prices, id }} />
            );
          })} */}
          <Query
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
          </Query>
        </Gallery>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.userOptions.filter,
});

export default connect(mapStateToProps, null)(CategoryView);
